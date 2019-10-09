from django.shortcuts import render, HttpResponse, redirect

def index(request):
    return HttpResponse("Hello Lin")

def new(request):
    return HttpResponse("this is all so new to me")

def create(request):
    return redirect("/")

def show(request, number):
    return HttpResponse("placeholder to display blog number 15")

def edit(request, number):
    return HttpResponse("idk")

def destroy(request, number):
    return redirect("/")
