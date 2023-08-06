from rest_framework import serializers
from blogs.models import Project, Post, Category, FormData, BlogImage

class BlogImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = BlogImage
        fields = ['image_id', 'image', 'image_name']


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ('id', 'name',)


class DateTimeToDateField(serializers.ReadOnlyField):
    def to_representation(self, value):
        return value.date().isoformat()


class ProjectSerializer(serializers.ModelSerializer):
    created_at = DateTimeToDateField()
    categories = CategorySerializer(many=True, read_only=True)

    class Meta:
        model = Project
        fields = ('project_id', 'title', 'description', 'project_link', 'images', 'created_at', 'categories')


class PostSerializer(serializers.ModelSerializer):
    created_at = DateTimeToDateField()
    categories = CategorySerializer(many=True, read_only=True)

    class Meta:
        model = Post
        fields = ('post_id', 'title', 'short_description', 'content', 'created_at', 'categories', 'image')

class FormDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = FormData
        fields = '__all__'