from django.contrib import admin
from .models import Post, Project, BlogImage, Category, FormData 
# Register your models here.


class PostAdmin(admin.ModelAdmin):
    list_display = ('title',)
    search_fields = ('title','categories')
class BlogImageAdmin(admin.ModelAdmin):
    list_display = ('image_name',)
    search_fields = ('image_name',)

class ProjectAdmin(admin.ModelAdmin):
    list_display = ('title',)
    search_fields = ('title','categories')

class FormDataAdmin(admin.ModelAdmin):
    readonly_fields = ('name', 'email', 'message')

    def has_add_permission(self, request):
        # Disable the "Add" button on the admin site
        return False

admin.site.register(Category)
admin.site.register(FormData, FormDataAdmin)
admin.site.register(BlogImage, BlogImageAdmin)
admin.site.register(Post, PostAdmin)
admin.site.register(Project, ProjectAdmin)
