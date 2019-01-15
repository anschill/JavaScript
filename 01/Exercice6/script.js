var button = document.querySelector('input[type="submit"]');
//on utilise la fonction sans les parenthèses car c'est l'événement qui déclenche l'éxecution de la fonction
button.onclick= myFunction;

function myFunction()
{
  var dividende = document.getElementById('firstNumber').value;
  var diviseur = document.getElementById('secondNumber').value;

  // var quotient = (divieur % dividende);

  alert(`Resultat = ${parseFloat(dividende) % parseFloat(diviseur)}`);
}
