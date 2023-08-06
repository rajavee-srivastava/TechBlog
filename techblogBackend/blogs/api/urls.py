from django.urls import path
from .views import project_list, project_detail, post_list, post_detail, form_data_api, get_image

urlpatterns = [
    path('projects/', project_list, name='project-list'),
    path('projects/<int:pk>/', project_detail, name='project-detail'),
    path('posts/', post_list, name='post-list'),
    path('posts/<int:pk>/', post_detail, name='post-detail'),
    path('form-data/', form_data_api, name='form_data'),
    path('images/<int:image_id>/', get_image, name='get-image')
]
