from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index),
    url(r'^add_book$', views.addbook),
    url(r'^books/(?P<my_val>\d+)$', views.books),
    url(r'^add_author_to_book$', views.add_author_to_book),
    url(r'^add_author$', views.addauthor),
    url(r'^authors/$', views.authors),
    url(r'^authors/(?P<my_val>\d+)$',views.authors_details),
    url(r'^add_book_to_author$', views.add_book_to_author),

]