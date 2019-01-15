
var password = document.querySelector("#password").value;
var confirmPassword = document.querySelector("#confirmPassword").value;
var  button = document.querySelector("#submit");
button.onclick = function(e)
{
  e.preventDefault();
  varification();
}

function varification()
{
//On récupère les valeurs de password & confirmPassword
  var confirmPassword = document.getElementById('confirmPassword').value;
  var password = document.getElementById('password').value;

//On attrivue des bordures aux labels, épaisseur style et couleur
  if (confirmPassword != password)
  {
    document.getElementById("confirmPassword").style.border = "3px solid red";
    document.getElementById("password").style.border = "3px solid red";

  }
  else
  {
    document.getElementById("confirmPassword").style.border = "3px solid green";
    document.getElementById("password").style.border = "3px solid green";

  }
}
