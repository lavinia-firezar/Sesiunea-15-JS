// 1. Creeaza o functie care primeste ca parametru doua numere si returneaza rezultatul ridicarii primului numar la puterea celui de-al doilea numar.

function exercisePower(number1,number2) {
    var result = 1;
    for (var power = 1; power <= number2; power++) {
       result = result * number1;
    }
    return result;
  }
  
   let result1 = exercisePower(2,3);
   console.log(result1);
  
  // 2. Creeaza o functie care primeste ca parametru un sir de caractere, ce poate avea urmatoarele valori:
  // "patrat", caz in care functia va returna formula de calcul a ariei patratului
  // "dreptunghi", caz in care functia va returna formula de calcul a ariei patratului
  // "cerc", caz in care functia va returna formula de calcul a ariei cercului
  // Orice alta valoare a parametrului, va rezulta in returnarea unui sir gol si afisarea la consola a mesajului 'Va rugam sa alegeti una dintre urmatoarele valori: "patrat", "dreptunghi" sau "cerc".'
  
  function stringCharacter(string1) {
    var area1 = '';
    if (string1 === 'patrat') {
      area1 = 'Formula de calcul a ariei patratului este: L^2';
    } else if (string1 === 'dreptunghi') {
      area1 = 'Formula de calcul a ariei dreptunghiului este: L*l';
    } else if (string1 === 'cerc') {
      area1 = 'Formula de calcul a ariei cercului este: 2*PI*R';
    } else {
      console.log('Va rugam sa alegeti una dintre urmatoarele valori: "patrat", "dreptunghi" sau "cerc".')
    }
    
    return area1;
  }
  
  var result2 = stringCharacter('cerc')
  console.log(result2);
  
  // BONUS: Scrie aceeasi functie in toate cele 3 sintaxe discutate la curs.
  
  var stringCharacter1 = function(string2) {
    var area2 = '';
    if (string2 === 'patrat') {
      area2 = 'Formula de calcul a ariei patratului este: L^2';
    } else if (string2 === 'dreptunghi') {
      area2 = 'Formula de calcul a ariei dreptunghiului este: L*l';
    } else if (string2 === 'cerc') {
      area2 = 'Formula de calcul a ariei cercului este: 2*PI*R';
    } else {
      console.log('Va rugam sa alegeti una dintre urmatoarele valori: "patrat", "dreptunghi" sau "cerc".')
    }
    
    return area2;
  }
  
  let result3 = stringCharacter1('patrat');
  console.log (result3);
  
  var shapes = (shape) => {
    var area3 = '';
    if (shape === 'patrat') {
      area3 = 'Formula de calcul a ariei patratului este: L^2';
    } else if (shape === 'dreptunghi') {
      area3 = 'Formula de calcul a ariei dreptunghiului este: L*l';
    } else if (shape === 'cerc') {
      area3 = 'Formula de calcul a ariei cercului este: 2*PI*R';
    } else {
      console.log('Va rugam sa alegeti una dintre urmatoarele valori: "patrat", "dreptunghi" sau "cerc".')
    }
    
    return area3;
  }
  
  let result4 = shapes('dreptunghi');
  console.log(result4);