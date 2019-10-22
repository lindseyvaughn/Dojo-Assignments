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
        "user":User.objects.get(id=id)
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
        request.session['id']=user.id
        return redirect('/success/'+ str(user.id))
def logout(request):
    request.session.clear()
    return redirect('/')
#######################
def create(request):
    user=User.objects.get(id=request.session['id'])
    create_new_trip=Trip.objects.create(
    destination=request.POST['title'],
    start_date=request.POST['description'],
    end_date=request.POST['end_date'],
    plan=request.POST['plan']
    )
    create_new_trip.save()
    return redirect('/create_trip/' + str(user.id))

def create_new_trip(request,id):
    user=User.objects.get(id=request.session['id'])
    create_new_trip=Trip.objects.get(id=id)

    context={
        'create_new_trip':Trip.objects.get(id=id)
    }
    return render(request, 'login/create_trip.html/', context)

def submit(request):
    user=User.objects.get(id=request.session['id']) 
    trip=Trip.objects.get(id=request.POST['id'])

    trip.destination = request.POST['destination']
    trip.start_date=request.POST['start_date']
    book.save()

    return redirect('/success/' + str(user.id))





