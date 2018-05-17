from rest_framework.serializers import ModelSerializer, Serializer
from .models import Article

from rest_framework import serializers

class ArticleSerializer(ModelSerializer):
    class Meta:
        model = Article
        fields = ('id', 'title', 'text', 'slug', 'timestamp')

class ArticlePostSerializer(ModelSerializer):
    class Meta:
        model = Article
        fields = ('title', 'text')

class ArticleListSerializer(ModelSerializer):
    class Meta:
        model = Article
        fields = ('id', 'title', 'slug', 'timestamp')


class CrawledArticleSerializer(Serializer):
    title = serializers.CharField(max_length=100)
    text = serializers.CharField()
