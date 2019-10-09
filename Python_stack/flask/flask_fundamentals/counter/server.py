from flask import Flask, render_template, request, redirect,session
import datetime 

app = Flask(__name__)
app.secret_key = 'shhh'


@app.route('/')         
def index():
    if 'count' not in session:
        session['count'] = 1
    else:
        session['count']+=1
    return render_template('index.html', count=session['count'])

@app.route('/reset')
def reset():

    session.clear()
    return redirect('/')

@app.route('/addtwo')
def addtwo():
    session['count']+=2
    return redirect('/')


if __name__=="__main__":   
    app.run(debug=True)    