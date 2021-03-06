from __future__ import unicode_literals
from __future__ import unicode_literals
from django.db import models
import re, bcrypt 

class UserManager(models.Manager):
    def basic_validator(self, postData):
        print(postData)
        EMAIL_REGEX= re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
        PASSWORD_REGEX=re.compile(r'^[a-zA-Z0-9.+_-]+$')
        errors = {}
        print('*'* 80)
        if len(postData['first_name']) < 1:
            print(postData['first_name'])
            errors["first_name"] = "Name is required"
        if len(postData['last_name']) < 1:
            errors["last_name"] = "Name is required"
        user=User.objects.filter(email=postData['email'].lower())
        if len(user)>0:
            errors["email"] = "email exist"
        if not EMAIL_REGEX.match(postData['email']):
            errors['email_valid']="invalid email"
        if len(postData['password'])<8:
            errors["passwords"] = "password must be 8 characters long"
        if not PASSWORD_REGEX.match(postData['password']):
            errors['password_valid']="Please enter a valid password"
        if postData['confirm password'] != postData['password']:
            errors['confirm password']='password dont match'
        print(errors)
        return errors
    def login(self,postData):
        errors={}
        user=User.objects.filter(email=postData['email'])
        print('*'* 80)
        if not user:
            errors['email'] = "email does not exist"
        else:
            if not bcrypt.checkpw(postData['password'].encode(), user[0].password.encode()):
                errors['password'] = 'invalid passsword'
            print(errors)
        return errors
class User(models.Model):
    first_name = models.CharField(max_length=45)
    last_name = models.CharField(max_length=45)
    email = models.CharField(max_length=45)
    password = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    #books_uploaded= models.ForeignKey(User, related='books_uploaded')##one to many field
    #favorite_books=models.manyTomanyField(User, related='favorite_books') ##many to many field 
    objects=UserManager()

    def __repr__(self):
        return f"user: {self.id} {self.first_name} {self.last_name} {self.email} {self.password} {self.confirm_password}"
#############################################################################

class BookManager(models.Manager):
    def book_validator(self, postData):
        errors = {}
        if len(postData['title']) < 1:
            errors["title"] = "title is required"
        if len(postData['description']) < 5:
            errors["description"] = "description must be longer than 5 chracters"
        return errors


class Book(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    uploaded_by_id= models.ForeignKey(User, related_name='books_uploaded')##one to many field
    book_likes=models.ManyToManyField(User, related_name='favorite_books') ##many to many field 
    objects=BookManager()