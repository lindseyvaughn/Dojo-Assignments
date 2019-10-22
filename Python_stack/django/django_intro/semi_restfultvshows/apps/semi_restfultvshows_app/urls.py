from django.conf.urls import url
from . import views

urlpatterns=[
    url(r'^shows/new$',views.index),
    url(r'^shows/(?P<id>\d+)$', views.showsdetails),
    url(r'^savenewshows$', views.savenewshows),
    url(r'^shows/(?P<id>\d+)/edit$', views.edit),
    url(r'^update/(?P<id>\d+)', views.update),
    url(r'^shows$', views.allshow),
    url(r'^shows/(?P<id>\d+)/delete$', views.delete),

    
]
