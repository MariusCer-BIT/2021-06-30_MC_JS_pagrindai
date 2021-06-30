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







document.getElementById('kvietejas').addEventListener("click", ikrepseli);

function ikrepseli() {

    var value = 1;
    var kiekis = document.getElementById('kiekis').value;
    var zodis  = 'prekes';

    if(kiekis%10 == 1) {
        zodis  = 'prekę';
    }

    if( (kiekis > 10 && kiekis < 20) || kiekis%10 == 0) {
        zodis = 'prekių';
    } 

    var zinute = 'Jūs sėkmingai pridėjote ' + kiekis + ' ' + zodis + '  į savo krepšelį!';
    if(kiekis > 100 ) {
        zinute = " Jūsų pasirinktas kiekis yra didesnis nei leistinas"
}
if(kiekis < 1 ) {
    zinute = " Jūsų pasirinktas kiekis yra per mažas"
}

    document.getElementById('messages').innerHTML = zinute;
} 











    //alert('Jūs sėkmingai pridėjote ' + kiekis + ' prekę į savo krepšelį!');


//kaunasLietuva(petras);


// su atsitiktiniu pradzia //

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

document.getElementById('messages1').innerHTML = 'Kintamasis A  ' + rezultatas + ' uz kintamaji B';

}

// su atsitiktiniu pabaiga //


