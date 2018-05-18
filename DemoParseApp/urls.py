"""DemoParseApp URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.11/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url
from django.contrib import admin
from articles.views import ArticleDetail, ArticleList, ArticlePost, index, CrawlArticle

urlpatterns = [

    url(r'^admin/', admin.site.urls),
    url(r'^article/$', ArticleList.as_view(), name='Article_List'),
    url(r'^article/crawl/$', CrawlArticle.as_view(), name='Article_Crawl'),
    url(r'^article/post/$', ArticlePost.as_view(), name='ArticlePost'),
    url(r'^article/(?P<slug>[\w-]+)/$', ArticleDetail.as_view(), name='Article_Detail'),
    url(r'^', index, name='index'),

]
