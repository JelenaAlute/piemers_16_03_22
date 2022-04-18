import sqlite3
import json

DB = sqlite3.connect("dati.db")  
SQL = DB.cursor()

SQL.execute(""" CREATE TABLE IF NOT EXISTS vardi(
    id INTEGER NOT NULL UNIQUE,
    vards TEXT,
    PRIMARY KEY ("id" AUTOINCREMENT)
) """)

SQL.execute(""" CREATE TABLE IF NOT EXISTS speletaji(
    id INTEGER NOT NULL UNIQUE,
    vards TEXT,
    minejums TEXT,
    rezultats INTEGER,
    PRIMARY KEY ("id" AUTOINCREMENT)
) """)

for i in range(4, 11):
  with open (f"dati/vardi{i}.json", "r", encoding="utf-8") as f:
    dati=f.read()
    
    print(f"dati/vardi{i}.json")
    datiJson=json.loads(dati)
    

  for ieraksts in datiJson['vardiFaila']:
    SQL.execute("INSERT INTO vardi (vards) VALUES (:vards)",{'vards':ieraksts['vards']})
    print("Veicam ierakstu!")
    print(ieraksts['vards'])
    print("=============")

DB.commit()
SQL.close()
DB.close()