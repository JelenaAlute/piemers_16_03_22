
window.addEventListener('load', function(){
    let pogaGeneret = document.getElementById('generet');
    let select = document.getElementById('izvele');
    

    pogaGeneret.addEventListener('click', async function(){
        let izvele = select.options[select.selectedIndex].value;
        let name = document.getElementById('name').value;
        console.log('vards ir:');
        console.log(name);

        let saite = "/generet/" + name + "/" + izvele;        
        let atbilde = await fetch(saite);
        let atbildeJson = await atbilde.json()

        spelesLaukums();

        console.log(atbildeJson);
        document.getElementById("vards").innerHTML = atbildeJson.vards;
        
    })
})




function sajaukt(jVards){
    var arr = jVards.split('');           // Convert String to array
    var n = arr.length;              // Length of the array
    
    for(var i=0 ; i<n-1 ; ++i) {
      var j = getRandomInt(n);       // Get random of [0, n-1]
      
      var temp = arr[i];             // Swap arr[i] and arr[j]
      arr[i] = arr[j];
      arr[j] = temp;
    }
    
    s = arr.join('');                // Convert Array to string
    return s;                        // Return shuffled string
}

function getRandomInt(n) {
    return Math.floor(Math.random() * n);
  }

function spelesLaukums(){
    let laukums = document.getElementById('spele');

    laukums.innerHTML = "<p>Sajauktais vārds:<div id='vards'></div></p><input type='text' id='atbilde'/><button onclick='parbaudit()'>Pārbaudīt</button>";
}

async function parbaudit() {
    let vards = document.getElementById('atbilde').value;
    let name = document.getElementById('name').value;
    console.log(name);
    let saite = "/parbaudit/" + name + "/" + vards;   
    let atbilde = await fetch(saite);
    let atbildeJson = await atbilde.json()
    
    alert(atbildeJson.rezultats);

    if(atbildeJson.status == "1"){
        document.getElementById("vards").innerHTML = "";
        document.getElementById('atbilde').value = "";
      
    }

}


// function parbaudit(){
//     let atbilde = document.getElementById('atbilde').value;
//     if(atbilde === vards){
//         alert('Apsveicu pareizi!');
//         generet();
//     }else{
//         alert('Mēģini vēlreiz');
//     }
// }