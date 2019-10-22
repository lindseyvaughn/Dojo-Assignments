from django.shortcuts import render, redirect
from .models import * 
from django.contrib import messages 

# render index.html
def index(request):

    return render(request, "login/index.html")

# redirect books.html page(if no errors)
def login(request): 
    errors=User.objects.login(request.POST)
    if len(errors) > 0:
        for key, value in errors.items():
            messages.error(request, value)
        return redirect('/')
    else:
        user=User.objects.get(email=request.POST['email'])
        request.session['id'] = user.id
        return redirect('/books/' + str(user.id))


#render 
def books(request,id):
    user=User.objects.get(id=request.session['id'])
    context={
        "user":User.objects.get(id=id),
        'all_books':Book.objects.all()
    } 
    return render(request, 'login/books.html', context)

#redirect back to index.html or redirect to books
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
        return redirect('/books/'+ str(user.id))
def logout(request):
    request.session.clear()
    return redirect('/')

def add_book(request):
    user=User.objects.get(id=request.session['id'])
    errors=Book.objects.book_validator(request.POST)
    if request.method == "POST":
        errors = Book.objects.book_validator(request.POST)
    if len(errors) > 0:
        for key, value in errors.items():
            messages.error(request, value)
            return redirect("/books/" + str(user.id))
    else:
        new_book=Book.objects.create(
        title=request.POST['title'],
        description=request.POST['description'],
        uploaded_by_id=user
    )
        new_book.book_likes.add(user)
        new_book.save()
    return redirect('/books/' + str(user.id))

def edit(request,id):
    user=User.objects.get(id=request.session['id'])
    book=Book.objects.get(id=id)

    context={
    "book":Book.objects.get(id=id)
    }
    return render(request, 'login/edit.html/', context)

def updated(request):
    user=User.objects.get(id=request.session['id']) 
    book=Book.objects.get(id=request.POST['id'])

    book.title = request.POST['title']
    book.description=request.POST['description']
    book.save()

    return redirect('/books/' + str(user.id))

def delete(request,id):
    user=User.objects.get(id=request.session['id'])
    book=Book.objects.get(id=id)
    book.delete()
    return redirect('/books/' + str(user.id))
def book_details(request,id):
    user=User.objects.get(id=request.session['id'])
    book=Book.objects.get(id=id)

    if user.id==book.uploaded_by_id.id:
        context={
         "book":Book.objects.get(id=id)
        }
        return render(request, 'login/edit.html', context)
    else: 
        context={
         "book":Book.objects.get(id=id)
        }
        return render(request, 'login/book_details.html', context)