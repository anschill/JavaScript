function myFunction()
{
  var shoeSize = document.getElementById('shoeSize').value;
  var yearOfBirth = document.getElementById('yearOfBirth').value;

  var result = (((((shoeSize*2)+5)*50)-yearOfBirth)+1766);

  alert(result);
}
