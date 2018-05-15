from .models import Article
from .serializers import ArticleSerializer, ArticlePostSerializer, ArticleListSerializer
from django.http import Http404
from rest_framework.views import APIView
from rest_framework.generics import ListAPIView
from rest_framework.response import Response
from rest_framework import status
from django.shortcuts import render

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
            new_res = serializer.save(user=self.request.user)
            new_serializer = ArticleSerializer(new_res, many=False)
            return Response(new_serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
