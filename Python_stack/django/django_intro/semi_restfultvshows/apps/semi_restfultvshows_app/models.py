from __future__ import unicode_literals
from django.db import models



class ShowManager(models.Manager):
    def basic_validator(self, postData):
        errors = {}
        if len(postData['title']) < 2:
            errors["title"] = "Title should be at least 2 characters"
        if len(postData['network']) < 3:
            errors["network"] = "network should be at least 3 characters"
        if len(postData['description']) < 10:
            errors["description"] = "network should be at least 10 characters"
        return errors

class Show(models.Model):
    title = models.CharField(max_length=255)
    network = models.TextField()
    release_date = models.DateField()
    description = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects=ShowManager()
    def __repr__(self):
        return f"show: {self.id} {self.title} {self.network} {self.release_date} {self.description}"

