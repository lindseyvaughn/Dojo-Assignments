from django.shortcuts import render, redirect
from .models import * 
from django.contrib import messages 

# render index.html
def index(request):

    return render(request, "login/index.html")

# redirect success.html page(if no errors)
def login(request): 
    errors=User.objects.login(request.POST)
    if len(errors) > 0:
        for key, value in errors.items():
            messages.error(request, value)
        return redirect('/')
    else:
        user=User.objects.get(email=request.POST['email'])
        request.session['id'] = user.id
        return redirect('/success/' + str(user.id))


#render 
def success(request,id):
    user=User.objects.get(id=request.session['id'])
    context={
        "user":User.objects.get(id=id),
        'all_messages':Message.objects.all()
    } 
    return render(request, 'login/success.html', context)

#redirect back to index.html or redirect to success
def register(request):
    errors=User.objects.basic_validator(request.POST)
    if len(errors) > 0:
        for key, value in errors.items():
            messages.error(request, value)
            print (value)
        return redirect('/')
    else:
        password=request.POST['password']
        password_hash=bcrypt.hashpw(password.encode(),bcrypt.gensalt())

        user=User.objects.create(
            first_name=request.POST['first_name'],
            last_name=request.POST['last_name'],
            email=request.POST['email'],
            password=password_hash
            )
        request.session.id=user.id
        return redirect('/success/'+ str(user.id))
########################################################
def logout(request):
    request.session.clear()
    return redirect('/')

def post_message(request,id):
    user = User.objects.get(id=id)
    new_message = Message.objects.create(message = request.POST['message'], user = user)
    return redirect(f'/success/{user.id}')

def post_comment(request, message_id, user_id):
    user=User.objects.get(id=user_id)
    message=Message.objects.get(id=message_id)
    comment= Comment.objects.create(comment= request.POST['comment'],message=message, user = user)
    return redirect(f'/success/{user.id}')

def delete(request, comment_id, user_id):
    user = User.objects.get(id=user_id)
    deleted_comment = Comment.objects.get(id=comment_id)
    if user.id == deleted_comment.user.id:
        deleted_comment.delete()
    return redirect(f'/success/{user.id}')

