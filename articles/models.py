from django.db.models.signals import pre_save
from django.utils.text import slugify

from django.db import models

class Article(models.Model):

    title = models.CharField(max_length=100)
    text = models.TextField()
    slug = models.SlugField(max_length=50,  null=True, blank=True)
    timestamp = models.DateTimeField(auto_now=True, auto_now_add=False)


    def __str__(self):
        return self.title


def create_slug(instance, new_slug=None):
    slug = slugify(instance.title)
    if new_slug is not None:
        slug = new_slug
    qs = Article.objects.filter(slug=slug).order_by("-id")
    exists = qs.exists()
    if exists:
        new_slug = "%s-%s" % (slug, qs.first().id)
        return create_slug(instance, new_slug=new_slug)
    return slug

def pre_save_article_slug_receiver(sender, instance, *args, **kwargs):
    if not instance.slug:
        instance.slug = create_slug(instance)

# Listeners & Recorders
pre_save.connect(pre_save_article_slug_receiver, sender=Article)
