from rest_framework import serializers
from blogs.models import Idea, Category, Blog, Project


class IdeaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Idea
        fields = ['id', 'email', 'idea']


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'name']


class BlogSerializer(serializers.ModelSerializer):
    class Meta:
        model = Blog
        fields = ['key', 'title', 'shortDesc',
                  'content', 'date', 'category', 'image']


class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = ['id', 'title', 'desc', 'project_link', 'image1', 'image2']

