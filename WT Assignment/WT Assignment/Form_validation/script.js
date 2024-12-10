function validation()
{
  var fullname = document.getElementById('fullname').value;
  var email = document.getElementById('email').value;
  var password= document.getElementById('password').value;
  var phone = document.getElementById('phone').value;
  var number = document.getElementById('quantity').value;

  var usercheck = /^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$/;
  var fnamecheck = /^[A-Za-z. ]{3,20}$/;
  var lnamecheck = /^[A-Za-z. ]{3,20}$/;
  var emailcheck = /^[A-Za-z_]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/;
  var pswcheck = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9@#$%^&*]{8,15}$/;
}