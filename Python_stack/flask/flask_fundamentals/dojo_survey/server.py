from flask import Flask, render_template, request, redirect
app = Flask(__name__)
# our index route will handle rendering our form


@app.route('/')
def index():
    return render_template("index.html")




@app.route('/results', methods=['POST'])
def show_results():
    name = request.form['name']
    email = request.form['email']
    comment = request.form['comment']
    return render_template("show.html", name=name,email=email,comment=comment)



if __name__ == "__main__":
    app.run(debug=True)
