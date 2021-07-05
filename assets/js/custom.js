//Kintamuju skaiciavimas

var skaiciavimas;

skaiciavimas = 1;

skaiciavimas += 2;

skaiciavimas -= 2;

skaiciavimas = skaiciavimas * 3;

skaiciavimas = skaiciavimas / 3;

//alert(skaiciavimas);

var petras = [
    0 , 
    'Labas lietuva' , 
    2 , 
    3 , 
    [1, 2, 3]
];

//console.log( petras[1] );

//var = variable (angl.) kintamasis 






//Eventas skirtas issaukti reakcija paspaudus mygtuka
var pasisveikinimas = 'Labas lietuva!';

//       Uzduotis Slapukai    //

document.getElementById("sutinku").onclick = function () {
    var cookies = document.getElementById("slapukai");  
    cookies.classList.add("closed");
  };

//       Papildomas soninis meniu    //

document.getElementById("atidarymoNuoroda").onclick = function () {
    var popup = document.getElementById("offcanvasAtidarymas");
  
    if (popup.classList.contains("open") == false) {
      popup.classList.add("open");
    } else {
      popup.classList.remove("open");
    }
  };

//       1 Uzduotis Alert mygtukai    //
document.getElementById('1alertmygtukas').addEventListener("click", vienaspranesimas);
function vienaspranesimas() {
    alert("Mygtukas 1 alertui");
}

document.getElementById('3alertmygtukas').addEventListener("click", tryspranesimas);
function tryspranesimas() {
    alert("Pirmas alertas");
    alert("Antras alertas");
    alert("Trecias alertas");
}

document.getElementById('sudrezultatas').addEventListener("click", galimasveiksmas);
function galimasveiksmas() {
    alert(9+12);
}

//  2 Uzduotis Dvieju atsitiktiniu skaiciu generavimas ir palyginimas  //

document.getElementById('kartoti').addEventListener("click", kartoti);

function kartoti() {

var kinA = document.getElementById("kinA").innerHTML =
Math.floor(Math.random() * 100);

var kinB = document.getElementById("kinB").innerHTML =
Math.floor(Math.random() * 100);

var rezultatas;

if( kinA > kinB ) {
    rezultatas = 'daugiau';
}

if( kinA < kinB ) {
    rezultatas = 'maziau';
}

if( kinA === kinB ) {
    rezultatas = 'lygu';
}

document.getElementById('kintmessages1').innerHTML = 'Kintamasis A  ' + rezultatas + ' uz kintamaji B';

// Kintamuju sumos funkcija rasoma kintamuju sudarymo funkcijoje (funkcija - funkcijoje)
document.getElementById('kintsuma').addEventListener("click", kintamujusuma);

function kintamujusuma() {

    var kinsuma  = 0;
    var kinsuma = kinA + kinB;
    document.getElementById('kinmessages2').innerHTML = 'Kintamuju suma = ' + kinsuma +'' ;
  }

}

document.getElementById('kintsuma').addEventListener("click", kintamujusuma);

function kintamujusuma() {

    var kinsuma  = 0;
    var kinsuma = kinA + kinB;
    document.getElementById('kinmessages2').innerHTML = 'Kintamuju suma = ' + kinsuma +'' ;
  }
  

//     3 Pirkiniu krepselis ir pastabos  //

document.getElementById('kvietejas').addEventListener("click", ikrepseli);

function ikrepseli() {

    var kiekis = document.getElementById('kiekis').value;
    var zodis  = 'prekes';

    if(kiekis%10 == 1) {
        zodis  = 'prekę';
    }

    if( (kiekis > 10 && kiekis < 20) || kiekis%10 == 0) {
        zodis = 'prekių';
    } 

    var zinute = 'Jūs sėkmingai pridėjote ' + kiekis + ' ' + zodis + '  į savo krepšelį!';

    if(kiekis > 100) {
         zinute = 'Jūsų pasirinktas prekių kiekis yra didesnis nei leistinas.';
         //classList.add('error');//
    }

    if(kiekis < 1) {
         zinute = 'Pasirinktas per mažas kiekis.';
         //classList.add('error');//
    }

    document.getElementById('messages_uzsakymas').innerHTML = ''+ zinute;
    
}

document.getElementById("reset").onclick = function () {
    document.getElementById("kiekis").value = "1";
    document.getElementById('messages_uzsakymas').innerHTML = "";
  };





// 4  Lenteles ir mygtukas //

const duomenys = [
    {
        klientas: "Jonas",
        miestas: "Kaunas",
        preke: "Plaktukas",
        kiekis: "2",
        data: "2020-07-01",
        
    },
    {
        klientas: "Petras",
        miestas: "Vilnius",
        preke: "atsuktuvas",
        kiekis: "4",
        data: "2020-08-20",
    },
    {
        klientas: "Antanas",
        miestas: "Utena",
        preke: "viela",
        kiekis: "8",
        data: "2021-02-02",
    },
    {
    klientas: "Gintas",
    miestas: "Kaunas",
    preke: "Plaktukas",
    kiekis: "3",
    data: "2020-07-01"
}
];

let html = '';
let ending = '';

for(let indeksas in duomenys) {

    html += '<tr>'; 

    for(let indeksas2 in duomenys[indeksas]) {
        
        html += '<td>' + duomenys[indeksas][indeksas2] + '</td>';

    }

    html += '</tr>';

    //console.log(eilute);

}

document.getElementById('lentelesVidus').innerHTML = html;

function testineFunkcija() {

}


let reiksme = 0;

switch(reiksme) {

    case 0:
        testineFunkcija();
    break;

    case 1:
        alert('Reiksme yra 1');
    break;

    default:
        alert('Reiksmes nera');

}

document.getElementById('rodyti').onclick = function() {

    var lentele = document.getElementById('lentele');
    
    lentele.classList.toggle('show'); 

    if( lentele.classList.contains('show') == false ) {
        document.getElementById('rodyti').innerText = 'Rodyti';
    } else {
        document.getElementById('rodyti').innerText = 'Slėpti';
    }

};


// Informacija isvedama i narsykles Console grafa pradzia //
for(let eile in duomenys) {
    console.log(duomenys[eile]['miestas']);
}

for(let eile in duomenys) {
    console.log(duomenys[eile]['klientas']);
}
for(let eile in duomenys) {
    console.log(duomenys[eile]['preke']);
}
for(let eile in duomenys) {
    console.log(duomenys[eile]['kiekis']);
}
for(let eile in duomenys) {
    console.log(duomenys[eile]['data']);
}

for(let eile in duomenys) {
    console.log(duomenys[eile]['data']);
    console.log(duomenys[eile]['klientas']);
}

for(let eile in duomenys) {
    console.log(duomenys[eile]['data'], duomenys[eile]['klientas']);
    console.log(duomenys[eile]['klientas'], duomenys[eile]['miestas']);
}
// Informacija isvedama i narsykles Console grafa pabaiga //



// switch funkcijos pvz pradzia//


let reiksme_X = 3;
switch (reiksme_X) {
    case 0:
        alert('reiksme yra 0');  
        break;

    case 1:
        alert('reiksme yra 1');
        break;

    case 2:
        alert('reiksme yra 2');    
        break;

    default:
        alert('reiksmes nera');
        
}
// let funkcijos pvz pabaiga//


// Masyvo sudetis //


document.getElementById('mas_sud').onclick = function() {
var masyvas = [175, 50, 25, 15, 60, 70, 85, 74, 65, 14, 32, 33, 74, 85, 96, 49 ];

var total_mas = 0;

for(let i = 0; i < masyvas.length; i++) {
    total_mas += masyvas[i];
}
//document.getElementById('masyvas').innerHTML = masyvas; Funkcija kad butu rodomas masyvas nesigauna
document.getElementById('total_mas').innerHTML = total_mas;
};
  

//   6 Uzduotis - Select //


document.getElementById('car_tikrinti').onclick = function() {
var select_car = document.getElementById(pasirinkimas_1);

document.getElementById('pasirinktas_car').innerHTML = pasirinkimas_1.value  ;

//console.log(pasirinkimas_1.value);//
}

function pasirinkimas_2() {
    var select_car2 = document.getElementById("pasirinkimas_2").value;
    document.getElementById("pasirinktas_car2").innerHTML = "Jusu pasirinkimas " + select_car2;
  }


/*
 function myFunc(total, num) {
  return total - numbers;
}
*/
