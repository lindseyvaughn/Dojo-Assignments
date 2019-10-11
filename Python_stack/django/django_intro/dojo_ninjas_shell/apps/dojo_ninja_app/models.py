from django.db import models

class Dojo(models.Model):
    name = models.CharField(max_length=255)
    city= models.CharField(max_length=255)
    state= models.CharField(max_length=2)
    description =models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __repr__(self):
        return f"Dojo: {self.name} {self.city} {self.state}"

class Ninja(models.Model):
    dojo =models.ForeignKey(Dojo, related_name="ninjas")
    first_name= models.CharField(max_length=255)
    last_name= models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
