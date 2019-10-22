from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index),
    url(r'^register$', views.register),#submits the registration, creating a new user
    url(r'^login$', views.login),#submits the login
    url(r'^success/(?P<id>\d+)$', views.success),#renders the success page
    url(r'^logout', views.logout),#clears session and redirects to login page
    url(r'^post_message/(?P<id>\d+)$', views.post_message),#submits message and redirects to success page
    url(r'^post_comment/(?P<message_id>\d+)/(?P<user_id>\d+)$', views.post_comment),
    url(r'^delete/(?P<comment_id>\d+)/(?P<user_id>\d+)$', views.delete),


]