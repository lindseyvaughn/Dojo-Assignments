from flask import Flask, render_template
app=Flask(__name__)

@app.route("/play")
def root():
    return render_template("playground1.html", number=3)

@app.route("/play/<number>")
def play_x(number):
    return render_template("playground1.html",number=int(number))

@app.route("/play/<number>/<color>")
def play_x_color(number,color):
    return render_template("playground1.html",number=int(number), color=color)

if __name__ == "__main__":
    app.run(debug=True)