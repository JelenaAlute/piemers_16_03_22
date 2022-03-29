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
    
  
@app.route('/noteikumi')
def noteikumi():
  return render_template("noteikumi.html")

@app.route('/speles_rezultati')
def speles_rezultati():
  return render_template("speles_rezultati.html")

@app.route('/top/labakais')
def labakais():
  with open("dati/labakais", "r") as f:
    rezultats = f.read()

  return rezultats


@app.route('/top/rekords/<jaunais>')
def rekords(jaunais):
  with open("dati/labakais", "r") as f:
    top =int(f.read())

  try:
    jaunais_skaitlis = int(jaunais)
  except:
    return str(top)
    
  if jaunais_skaitlis > top:
    with open("dati/labakais", "w") as f:
      f.write(jaunais)
    return jaunais
  else:
    return str(top)
    

@app.route('/top/saraksts')
def top_saraksts():
  with open("dati/top.csv", "r",encoding="utf-8") as f:
    rindas =f.readlines()

  return jsonify(rindas)

 
@app.route('/top/rezultati')
def top_rezultati():
  with open("dati/top.json", "r",encoding="utf-8") as f:
    dati = json.loads(f.read())
  return jsonify(dati)
    
    
@app.route('/top/rekordi/jauns/<vards>/<rekords>')
def jauns_rekords(vards,rekords):
  jauns_ieraksts ={"vards": vards, "rezultats": rekords}

  #return jsonify(jauns_ieraksts)

  with open("dati/top.json", "r", encoding="utf-8") as f:
    dati = json.loads(f.read())

  dati["top"].append(jauns_ieraksts)

  with open("dati/top.json", "w",encoding="utf-8") as f:
    f.write(json.dumps(dati, indent=2, ensure_ascii=False))
    
  return jsonify(dati)

  


app.run(host='0.0.0.0', port=8080)
