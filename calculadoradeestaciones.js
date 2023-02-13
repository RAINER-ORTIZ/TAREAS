const numeroDeMes = prompt('Ingrese el número de un mes');

if (numeroDeMes >= 1 && numeroDeMes <= 12) {
  if (numeroDeMes == 12 || numeroDeMes == 1 || numeroDeMes == 2) {
    alert('Invierno');
  }

  if (numeroDeMes == 3 || numeroDeMes == 4 || numeroDeMes == 5) {
    alert('primavera');
  }

  if (numeroDeMes == 6 || numeroDeMes == 7 || numeroDeMes == 8) {
    alert('Verano');
  }

  if (numeroDeMes == 9 || numeroDeMes == 10 || numeroDeMes == 11) {
    alert('Otoño');
  }
} else {
  alert('Valor invalido');
}

let nombre = 'RAINER';
let numeroCarnet = 23004907;

alert(nombre + ' ' + numeroCarnet);
