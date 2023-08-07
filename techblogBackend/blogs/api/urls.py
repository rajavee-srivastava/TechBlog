from django.urls import path
from . import views

urlpatterns = [
    path('subs', views.create_idea, name='create_idea'),
    path('category', views.category_list, name='category_list'),
    path('blog_list', views.blog_list, name='blog_list'),
    path('blogs/<int:key>', views.get_blog, name='get_blog'),
    path('latest-blogs', views.latest_blogs, name='latest_blogs'),
    path('projects', views.project_list, name='project_list'),
]
