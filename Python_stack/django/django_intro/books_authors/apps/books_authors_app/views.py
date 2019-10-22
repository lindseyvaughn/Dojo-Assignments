from django.shortcuts import render, redirect
from apps.books_authors_app.models import Book, Author

def index(request):
    context={
        "all_books": Book.objects.all(),


    }
    return render(request, "books_authors_app/index.html", context)

def addbook(request):
    addnewbook=Book.objects.create(
    title=request.POST['title'],
    description=request.POST['description'])
    return redirect('/')

def books(request,my_val):
    context={
    "book": Book.objects.get(id=my_val),
    "other_authors": Author.objects.exclude(books=my_val)
    }
    return render(request, "books_authors_app/book_details.html", context)

def add_author_to_book(request):
    book= Book.objects.get(id=request.POST['book_id'])
    author= Author.objects.get(id=request.POST['author_id'])
    book.authors.add(author)
    return redirect('/books/'+ request.POST['book_id'])

def addauthor(request):
    addnewauthor=Author.objects.create(
    first_name=request.POST['first_name'],
    last_name=request.POST['last_name'])
    return redirect('/')

def authors_details(request,my_val):
    context={
    "author": Author.objects.get(id=my_val),
    "other_books": Book.objects.exclude(authors=my_val)
    }
    return render(request, "books_authors_app/author_details.html", context)

def add_book_to_author(request):
    author= Author.objects.get(id=request.POST['author_id'])
    book = Book.objects.get(id=request.POST['book_id'])
    author.books.add(book)
    return redirect('/authors/'+ request.POST['author_id'])

def authors(request):
    context={
    "all_authors": Author.objects.all(),
    "other_books": Book.objects.all()
    }
    return render(request, "books_authors_app/authors.html", context)




###"all_authors": Author.objects.all(),(where do I put this??)



