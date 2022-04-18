let vards = "";
let vardi4   = ['koks','kāja', 'labs','lini', 'logs', 'daba', 'dēls', 'egle', 'ezis', 'gads' ];
let vardi5   = ['kaķis', 'kakls', 'kalns', 'kauls', 'kļava', 'krūms', 'lācis', 'laiks', 'laime', 'laiva', 'lapsa', 'lauks', 'liepa', 'dzīve', 'ezers'];
let vardi6   = ['karogs', 'kleita', 'kalējs', 'komats', 'krekls', 'krēsls', 'kurmis', 'kurpes', 'krūtis', 'labība', 'lietus', 'nedēļa', 'laipns']
let vardi7   = ['kadiķis', 'Kurzeme', 'Latgale', 'Vidzeme', 'Zemgale', 'nākotne', 'pasaule',  'pirksts',  'pērkons', 'pilsēta','rietumi', 'smiltis', 'sudrabs']
let vardi8   = ['kukainis', 'liktenis', 'pīlādzis',  'taurenis',  'uzdevums',  'vecāmāte', 'zīdainis', 'zemnieks', 'zvaigzne', 'folklora', 'dzimtene', 'dzeltens']
let vardi9   = ['gliemezis', 'dzirnavas', 'draudzība', 'dzejnieks', 'biezpiens', 'mīlestība', 'patiesība', 'pavasaris', 'skolotājs', 'zvejnieks', 'zvirbulis']
let vardi10   = ['kartupelis', 'lakstīgala', 'varavīksne',  'basketbols',  'rakstnieks', 'Lieldienas',  'strēlnieks',  'valodnieks'];

window.addEventListener('load', function(){
    let pogaGeneret = document.getElementById('generet');
    let select = document.getElementById('izvele');

    pogaGeneret.addEventListener('click', async function(){
        let izvele = select.options[select.selectedIndex].value;    
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
    let saite = "/parbaudit/" + name + "/" + vards;   
    let atbilde = await fetch(saite);
    let atbildeJson = await atbilde.json()
    
    alert(atbildeJson.rezultats);

    if(atbildeJson.status == "1"){
        document.getElementById("vards").innerHTML = "";
        document.getElementById('atbilde').value = "";
    }

}


function parbaudit(){
    let atbilde = document.getElementById('atbilde').value;
    if(atbilde === vards){
        alert('Apsveicu pareizi!');
        generet();
    }else{
        alert('Mēģini vēlreiz');
    }
}