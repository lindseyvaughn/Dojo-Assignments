from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index),
    url(r'^register$', views.register),
    url(r'^login$', views.login),
    url(r'^success/(?P<id>\d+)$', views.success),
    url(r'^logout/', views.logout),
    url(r'^create$', views.create),
    url(r'^create_new_trip/(?P<id>\d+)$', views.create_new_trip),
    url(r'^submit$', views.submit),



    


]