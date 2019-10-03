#1
from flask import Flask
app = Flask(__name__)
@app.route('/')
def hello_world():
    return 'Hello World!'

#2
@app.route('/dojo')
def hello():
    return 'Dojo!'
#3
@app.route("/say/<name>") 
def hello_person(name):
    print("*"*80)
    print("in hello_person function")
    print(name)
    return f"hello {name}!"
#4
@app.route("/repeat/<number>/<word>") 
def number_word(number,word):
    print("*"*80)
    print(int(number))
    print("in hello_person function")
    return int(number)*word
Bonus #1
@app.route("/repeat/<number>/<int:word>") 
def number_word(number,word):
    print("*"*80)
    print(int(number))
    print("in hello_person function")
    return number*word

if __name__=="__main__":
    app.run(debug=True)

