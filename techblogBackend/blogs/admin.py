from django.contrib import admin
from .models import Idea, Category, Blog, Project
# Register your models here.

class BlogAdmin(admin.ModelAdmin):
    list_display = ('title','date')
    search_fields = ('title','date','category')
    list_filter = ('date',)

class ProjectAdmin(admin.ModelAdmin):
    list_display = ('title',)
    search_fields = ('title',)

admin.site.register(Category)
admin.site.register(Idea)
admin.site.register(Blog, BlogAdmin)
admin.site.register(Project, ProjectAdmin)

