from django.db import models

class Book(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    def __repr__(self):
        return f"Book: {self.title} {self.description}"

class Author(models.Model):
    first_name = models.CharField(max_length=45)
    last_name = models.TextField(max_length=45)
    book= models.ManyToManyField(Book, related_name="authors")
    notes = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    def __repr__(self):
        return f"Author: {self.first_name} {self.last_name} {self.book}"

