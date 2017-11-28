from flask import Flask
app = Flask(__name__)

@app.route("/num")
def num():
    return"33643"

@app.route("/")
def go():
    return open("index.html").read()

