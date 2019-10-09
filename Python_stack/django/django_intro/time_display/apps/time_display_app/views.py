from django.shortcuts import render
from time import gmtime, strftime
    
def display(request):
    context = {
        "time": strftime("%B %-m, %Y %I:%M %p", gmtime())
    }
    return render(request,'time_display_app/index.html', context)
