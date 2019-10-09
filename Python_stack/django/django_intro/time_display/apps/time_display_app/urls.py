from django.conf.urls import url
from . import views
                    
urlpatterns = [
    url('^display$', views.display),
]