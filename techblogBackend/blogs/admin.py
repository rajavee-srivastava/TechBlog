from django.contrib import admin
from .models import Category, Post, Project, Image 
# Register your models here.

class PostAdmin(admin.ModelAdmin):
    list_display = ('title','created_at', 'category')
    search_fields = ('title','created_at','category')
    list_filter = ('created_at',)

class ProjectAdmin(admin.ModelAdmin):
    list_display = ('title','created_at')
    search_fields = ('title','created_at')
    list_filter = ('created_at',)

admin.site.register(Category)
admin.site.register(Image)
admin.site.register(Post, PostAdmin)
admin.site.register(Project, ProjectAdmin)

