from flask import Flask
app = Flask(__name__)

@app.route("/")
def num():
    return"33643"

@app.route("/index")
def go():
    return open("index.html").read()

