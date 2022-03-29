document.getElementById('poga').addEventListener('click', () => {
  let ievade =document.getElementById('ievade');
  let ievadeText = ievade.value;
  ievade.value ="";

  let datiJson = {"datiY": ievadeText};

  sutitDatus(datiJson);
    
});


async function sutitDatus(dati) {
  let atbilde = await fetch('/demoPoga', {
    method: 'POST',
    header: {
      'Content-Type': 'application/json'
    },
      body: JSON.stringify(dati)
  })

  let data = await atbilde.text();

  //if data != "OK":
   // alert("Pievienošana neveiksmīga!");

  sanemtDatus();
}

async function sanemtDatus() {
  let atbilde = await fetch('/demoPoga')

  let data = await atbilde.text();

  let divData =document.getElementById('data');
  divData.innerHTML = data;

}

  