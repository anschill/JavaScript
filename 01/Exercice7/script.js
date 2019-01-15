
//on appelle une fonction anonyme pour appeler la fonction superCalcul

function superCalcul(shoeSize, yearOfBirth)
{
  var result = (((((parseInt(shoeSize)*2)+5)*50)-parseInt(yearOfBirth))+1766);

  alert(result);
}
var button = document.querySelector("#submit").onclick = function()
{
  var shoeSize = document.querySelector("#shoeSize").value;
  var yearOfBirth = document.querySelector("#yearOfBirth").value;

  superCalcul(shoeSize, yearOfBirth);
}
