from django.db import models
from ckeditor.fields import RichTextField


class Idea(models.Model):
    id = models.AutoField(primary_key=True)
    email = models.EmailField()

    def __str__(self):
        return self.email


class Category(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class Blog(models.Model):
    blogId = models.AutoField(primary_key=True)
    title = models.CharField(max_length=200)
    shortDesc = models.CharField(max_length=300)
    content = RichTextField()
    date = models.DateField(auto_now_add=True)
    category = models.ManyToManyField(Category)
    image = models.ImageField(upload_to='uploads/')

    def __str__(self):
        return self.title


class Project(models.Model):
    title = models.CharField(max_length=200)
    desc = models.TextField()
    project_link = models.URLField()
    image1 = models.ImageField(upload_to='uploads/')
    image2 = models.ImageField(upload_to='uploads/')

    def __str__(self):
        return self.title
