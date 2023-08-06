from django.db import models
from ckeditor.fields import RichTextField


class BlogImage(models.Model):
    image_id = models.AutoField(primary_key=True)
    image = models.ImageField(upload_to='images/')
    image_name = models.CharField(max_length=200, default="img", null=True)
    def __int__(self):
        return self.image_id


class Category(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class Post(models.Model):
    post_id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=200)
    short_description = models.CharField(max_length=300)
    content = RichTextField()
    categories = models.ManyToManyField(Category)  # Many-to-many relationship with Category
    created_at = models.DateTimeField(auto_now_add=True)  # Date field
    image = models.ForeignKey(BlogImage, on_delete=models.PROTECT, to_field='image_id')

    def __str__(self):
        return self.title


class Project(models.Model):
    project_id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=200)
    description = models.TextField()
    project_link = models.URLField()
    images = models.ManyToManyField(BlogImage)
    created_at = models.DateTimeField(auto_now_add=True)  # Date field

    def __str__(self):
        return self.title

class FormData(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    message = models.TextField()

    def __str__(self):
        return self.name