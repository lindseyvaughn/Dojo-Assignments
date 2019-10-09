from django.shortcuts import render, redirect
import random
from datetime import datetime

def index(request):
    if "gold" not in request.session:
        request.session ['gold'] =0
        request.session ['activity'] = []
    else:
        request.session['gold'] += 1
    context = {
        "wallet":request.session ['gold'],
        "activity":request.session ['activity'],
    }

    return render(request,"n_g/index.html", context)

def process(request):
    if request.method=='POST':
        if request.POST['location'] == 'Farm':
            farm_gold = random.randint(10,20)
            request.session['gold'] += farm_gold
            request.session['activity'].append('You are earned ' + str(farm_gold) + ' golds from the ' + request.POST['location'] + ' ' + '(' + str(datetime.now().strftime("%m-%d-%Y %H:%M.%S")) + ')')
        if request.POST['location'] == 'Cave':
            cave_gold = random.randint(10,20)
            request.session['gold'] += cave_gold
            request.session['activity'].append('You are earned ' + str(cave_gold) + ' golds from the ' + request.POST['location'] + ' ' + '(' + str(datetime.now().strftime("%m-%d-%Y %H:%M.%S")) + ')')
        if request.POST['location'] == 'House':
            house_gold = random.randint(10,20)
            request.session['gold'] += house_gold
            request.session['activity'].append('You are earned ' + str(house_gold) + ' golds from the ' + request.POST['location'] + ' ' + '(' + str(datetime.now().strftime("%m-%d-%Y %H:%M.%S")) + ')')
        if request.POST['location'] == 'Casino':
            casino_gold = random.randint(10,20)
            request.session['gold'] += casino_gold
            request.session['activity'].append('You are earned ' + str(casino_gold) + ' golds from the ' + request.POST['location'] + ' ' + '(' + str(datetime.now().strftime("%m-%d-%Y %H:%M.%S")) + ')')

        return redirect('/')

def reset(request):
    request.session.clear()
    return redirect('/')