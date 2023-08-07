from rest_framework import serializers
from blogs.models import Idea, Category, Blog, Project


class IdeaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Idea
        fields = ['id', 'email']


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'name']


class BlogSerializer(serializers.ModelSerializer):
    category = CategorySerializer(many=True)

    # Custom date format
    date = serializers.DateField(format="%d, %b %Y")
    class Meta:
        model = Blog
        fields = ['blogId', 'title', 'shortDesc',
                  'content', 'date', 'category', 'image']


class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = ['id', 'title', 'desc', 'project_link', 'image1', 'image2']

