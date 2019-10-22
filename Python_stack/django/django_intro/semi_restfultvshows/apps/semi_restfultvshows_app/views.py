from django.shortcuts import render, redirect
from .models import * 
from django.contrib import messages 

def index(request):

    return render(request, "semi_restfultvshows_app/index.html")

def showsdetails(request,id):
    context={
        "show":Show.objects.get(id=id)
    }


    return render(request, "semi_restfultvshows_app/showdetail.html", context)


def savenewshows(request):
    errors=Show.objects.basic_validator(request.POST)
    if len(errors) > 0:
        for key, value in errors.items():
            messages.error(request, value)
        return redirect(f"/shows/new")
    else:
        addnewshow=Show.objects.create(
        title=request.POST['title'],
        network=request.POST['network'],
        release_date= request.POST['release_date'],
        description=request.POST['description'])
        return redirect(f'/shows/{addnewshow.id}')

def edit(request,id):
    context={
        "show":Show.objects.get(id=id)
    }

    return render(request, "semi_restfultvshows_app/editshow.html", context)

def update(request,id):
    errors=Show.objects.basic_validator(request.POST)
    if len(errors) > 0:
        for key, value in errors.items():
            messages.error(request, value)
        return redirect(f"/shows/{id}/edit")
    else:
        addnewshow=Show.objects.get(id=id)
        addnewshow.title=request.POST['title'],
        addnewshow.network=request.POST['network'],
        addnewshow.release_date= request.POST['release_date'],
        addnewshow.description=request.POST['description']
        addnewshow.save()
        return redirect(f'/shows/{addnewshow.id}')

def allshow(request):
    context={
        "all_shows":Show.objects.all()
    }

    return render(request, "semi_restfultvshows_app/allshow.html", context)

def delete(request,id):
    deleteshow=Show.objects.get(id=id)
    deleteshow.delete()
    ##created a variable^ & then delete 

    return redirect('/shows')

# ##def update(request, id):
#     errors=Show.objects.basic_validator(request.POST)
#     if len(errors) > 0:
#         for key, value in errors.items():
#             messages.error(request, value)
#         return redirect("semi_restfultvshows_app/showdetail.html"+id)
#     else:
#         show=Show.objects.get(id=id)
#         show.title=request.POST['title']
#         show.network=request.POST['network']
#         show.description=request.POST['description']
#         show.save()
#         messages.success(request, "Info successfully updated")
#         return redirect("semi_restfultvshows_app/showdetail.html")





