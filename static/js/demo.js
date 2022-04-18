document.getElementById('poga').addEventListener('click', () => {
  let name =document.getElementById('name');
  let nameText = name.value;
  name.value ="";

  let datiJson = {"datiY": nameText};

  sutitDatus(datiJson);
    
});


async function sutitDatus(dati) {
  let atbilde = await fetch('/demoPoga', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
      body: JSON.stringify(dati)
  })

  let data = await atbilde.text();

  //if data != "OK":
   // alert("Pievienošana neveiksmīga!");

  sanemtDatus();
}

async function sanemtDatus(dati) {
  let atbilde = await fetch('/demoPoga')

  let data = await atbilde.text();

  let divData =document.getElementById('data');
  divData.innerHTML = data;

}

  