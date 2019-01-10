function myFunction()
{
  var age = document.getElementById('age').value;

  if (age < 18 && age > 0)
  {
    alert(`Vous êtes mineur.`);
  }
  else if (age >= 18)
  {
    alert(`Vous êtes majeur.`);
  }
  else {
    alert(`Erreur`);
  }
}
