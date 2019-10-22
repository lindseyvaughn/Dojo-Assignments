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
        "all_jobs":Job.objects.all()
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

##################################################################
def create_new_job(request):
    
    print('*'*80)
    user=User.objects.get(id=request.session['id'])
    context={
        "user":User.objects.get(id=user.id)
    } 
    return render(request, 'login/create_job.html', context)

def create_job(request):
    print('*'*80)
    user=User.objects.get(id=request.session['id'])
    job = Job.objects.create(
        title=request.POST['title'],
        description=request.POST['description'],
        location=request.POST['location'],
        user=user
    )
    print('*'*80)
    print(user.id)
    return redirect('/success/'+ str(user.id))

def remove(request, id):
    user=User.objects.get(id=request.session['id'])
    job = Job.objects.get(id=id)
    job.delete()
    return redirect('/success/'+ str(user.id))

def edit(request, id):
    user=User.objects.get(id=request.session['id'])
    context={
        "user":User.objects.get(id=user.id),
        "job":Job.objects.get(id=id)
    }
    return render (request,'login/edit.html', context)

def editcomplete(request,id):
    user=User.objects.get(id=request.session['id'])
    errors = Job.objects.job_validator(request.POST)
    if len(errors):
        for key, value in errors.items():
            messages.error(request, value)
        return redirect('/edit/'+ id)
    else:
        job = Job.objects.get(id = id)
        job.title = request.POST['title']
        job.description = request.POST['description']
        job.location=request.POST['location']
        job.save()
        messages.success(request, "Blog successfully updated")
        # redirect to a success route
        return redirect ('/success/'+ str(user.id))
    user=User.objects.get(id=request.session['id'])
    job=Job.objects.get(id=id)
    job.title=request.POST['title']
    job.description=request.POST['description']
    job.location=request.POST['location']
    job.save()
    return redirect('/success/'+ str(user.id))
def jobdetails(request, id):
    user=User.objects.get(id=request.session['id'])
    context={
        "user":User.objects.get(id=user.id),
        "job":Job.objects.get(id=id)
    }
    return render (request,'login/detail_job.html', context)
def jobdetailscomplete(request,id):
    user=User.objects.get(id=request.session['id'])
    job=Job.objects.get(id=id)
    job.title=request.POST['title']
    job.description=request.POST['description']
    job.location=request.POST['location']
    job.save()
    return redirect('/jobdetails/'+ str(user.id))





