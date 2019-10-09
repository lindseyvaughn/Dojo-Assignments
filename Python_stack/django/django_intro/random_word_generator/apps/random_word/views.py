from django.shortcuts import render, HttpResponse, redirect
from django.utils.crypto import get_random_string

def index(request):
    return HttpResponse("this is the equivalent of @app.route('/')!")

def random(request):
    request.session['count'] +=1
    
    context={
        "random_word": get_random_string

}
    return render(request,"random_word/index.html",context)

def some_function(request):
    request.session['random_word'] = request.POST['random_word']

def reset(request):
    request.session['count'] =0
    return redirect ("/random_word")

