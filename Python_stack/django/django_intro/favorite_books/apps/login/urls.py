from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index),
    url(r'^register$', views.register),
    url(r'^login$', views.login),
    url(r'^books/(?P<id>\d+)$', views.books),
    url(r'^edit/(?P<id>\d+)$', views.edit),
    url(r'^logout$', views.logout),
    url(r'^add_book$', views.add_book),
    url(r'^updated$', views.updated),
    url(r'^delete/(?P<id>\d+)$', views.delete),
    url(r'^book_details/(?P<id>\d+)$', views.book_details)

]