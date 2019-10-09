from django.conf.urls import url
from . import views

                    
urlpatterns = [
    url(r'^$', views.index),
    url('^random_word$', views.random),
    url('^reset', views.reset),

]
