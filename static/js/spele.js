let vards = "";
let vardi4   = ['koks','kāja', 'labs','lini', 'logs', 'daba', 'dēls', 'egle', 'ezis', 'gads' ];
let vardi5   = ['kaķis', 'kakls', 'kalns', 'kauls', 'kļava', 'krūms', 'lācis', 'laiks', 'laime', 'laiva', 'lapsa', 'lauks', 'liepa', 'dzīve', 'ezers'];
let vardi6   = ['karogs', 'kleita', 'kalējs', 'komats', 'krekls', 'krēsls', 'kurmis', 'kurpes', 'krūtis', 'labība', 'lietus', 'nedēļa', 'laipns']
let vardi7   = ['kadiķis', 'Kurzeme', 'Latgale', 'Vidzeme', 'Zemgale', 'nākotne', 'pasaule',  'pirksts',  'pērkons', 'pilsēta','rietumi', 'smiltis', 'sudrabs']
let vardi8   = ['kukainis', 'liktenis', 'pīlādzis',  'taurenis',  'uzdevums',  'vecāmāte', 'zīdainis', 'zemnieks', 'zvaigzne', 'folklora', 'dzimtene', 'dzeltens']
let vardi9   = ['gliemezis', 'dzirnavas', 'draudzība', 'dzejnieks', 'biezpiens', 'mīlestība', 'patiesība', 'pavasaris', 'skolotājs', 'zvejnieks', 'zvirbulis']
let vardi10   = ['kartupelis', 'lakstīgala', 'varavīksne',  'basketbols',  'rakstnieks', 'Lieldienas',  'strēlnieks',  'valodnieks'];

function generet(){
    let select = document.getElementById('izvele');
    let izvele = select.options[select.selectedIndex].value;
    let vardi = [];

    if(izvele == 4){
        vardi = vardi4;
    }else if(izvele == 5){
        vardi = vardi5;
    }else if(izvele == 6){
        vardi = vardi6;
    }else if(izvele == 7){
        vardi = vardi7;
    }else if(izvele == 8){
        vardi = vardi8;
    }else if(izvele == 9){
        vardi = vardi9;
    }else if(izvele == 10){
        vardi = vardi10;
    }

    spelesLaukums();

    let randomNr = getRandomInt(vardi.length - 1);

    vards = vardi[randomNr];

    document.getElementById("vards").innerHTML = sajaukt(vards);

}

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

function parbaudit(){
    let atbilde = document.getElementById('atbilde').value;
    if(atbilde === vards){
        alert('Apsveicu pareizi!');
        generet();
    }else{
        alert('Mēģini vēlreiz');
    }
}