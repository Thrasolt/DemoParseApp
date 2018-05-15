from rest_framework.serializers import ModelSerializer
from .models import Article

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
