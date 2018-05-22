from .models import Article
from .serializers import ArticleSerializer, ArticlePostSerializer, ArticleListSerializer, CrawledArticleSerializer
from django.http import Http404
from rest_framework.views import APIView
from rest_framework.generics import ListAPIView
from rest_framework.response import Response
from rest_framework import status
from django.shortcuts import render
from rest_framework import authentication, permissions
from django.views.decorators.csrf import csrf_exempt



from .dataUtils import crawl_wiki

def index(request):
    return render(request, 'index.html', {})


class ArticleList(ListAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleListSerializer


class ArticleDetail(APIView):
    """
    Retrieve, update or delete a Article instance.
    """
    def get_object(self, slug):
        try:
            return Article.objects.get(slug=slug)
        except Article.DoesNotExist:
            raise Http404

    def get(self, request, slug, format=None):
        Article = self.get_object(slug)
        serializer = ArticleSerializer(Article)
        return Response(serializer.data)

    def put(self, request, slug, format=None):
        Article = self.get_object(slug)
        serializer = ArticleSerializer(Article, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, slug, format=None):
        Article = self.get_object(slug)
        Article.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class ArticlePost(APIView):

    def post(self, request, format=None):
        serializer = ArticlePostSerializer(data=request.data)
        if serializer.is_valid():
            new_res = serializer.save()
            new_serializer = ArticleSerializer(new_res, many=False)
            return Response(new_serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# Crawler
class CrawledArticle(object):
    def __init__(self, title, text):
        self.title = title
        self.text = text


class CrawlArticle(APIView):

    def post(self, request, format=None, **kwargs):
        url = request.data['url']
        print(url)
        crawlRes = crawl_wiki(url)
        raw_data = CrawledArticle(crawlRes['title'], crawlRes['text'])
        serializer = CrawledArticleSerializer(raw_data)
        return Response(serializer.data, status=status.HTTP_201_CREATED)
