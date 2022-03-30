from flask import Flask, render_template, jsonify, request
import json

app = Flask('app')
app.config['JSON_AS_ASCII'] = False


@app.route('/')
def index():
  return render_template("index.html")

@app.route('/demo')
def demo():
  return render_template("demo.html")

@app.route('/demoPoga', methods=['POST', 'GET'])
def demoPoga():
  if request.method == "GET":
    with open("dati.txt", "r", encoding="utf-8") as f:
      dati = f.read()
    return dati
  elif request.method == "POST":
    ievade =request.json

    with open("dati.txt", "a", encoding="utf-8") as f:
      f.write(f"{ievade['datiY']}\n")
   
    return "OK"
  else:
    return "Kā tu te tiki?"

    app.run(host='0.0.0.0', port=8080)

    