# Generated by Django 2.0.5 on 2018-05-15 11:27

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Article',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=100)),
                ('text', models.TextField()),
                ('slug', models.SlugField()),
                ('timestamp', models.DateTimeField(auto_now=True)),
            ],
        ),
    ]