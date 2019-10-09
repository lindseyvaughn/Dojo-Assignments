from flask import Flask, render_template 
app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html", x=8, y=8)

@app.route("/4")
def by4():
    return render_template("index.html", x=8,y=4)

@app.route("/<y>/<x>")
def XY(x,y):
    return render_template("index.html",x= int(x),y=int(y))

if __name__ == "__main__":
    app.run(debug=True)
