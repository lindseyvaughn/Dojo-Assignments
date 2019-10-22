from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index),
    url(r'^register$', views.register),
    url(r'^login$', views.login),
    url(r'^logout/', views.logout),
    url(r'^success/(?P<id>\d+)$', views.success),
    url(r'^create_new_job$', views.create_new_job),
    url(r'^create_job', views.create_job),
    url(r'^remove/(?P<id>\d+)$', views.remove),
    url(r'^edit/(?P<id>\d+)$', views.edit),
    url(r'^edit/(?P<id>\d+)/complete$', views.editcomplete),
    url(r'^jobdetails/(?P<id>\d+)$', views.jobdetails),
    url(r'^jobdetails/(?P<id>\d+)$', views.jobdetailscomplete), 

    ]