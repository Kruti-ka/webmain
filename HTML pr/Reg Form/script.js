function validation()
{
    var userid =document.getElementById('userid').value;
    var fullname = document.getElementById('fname').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var number = document.getElementById('phone').value;

    var usercheck = /^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$/;
    var fnamecheck = /^[A-Za-z. ]{3,20}$/;
    var emailcheck =/^[A-Za-z_]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/;
    var pswcheck =/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9@#$%^&*]{8,15}$/;

    if (usercheck.test(userid))
    {
        document.getElementById('usererror').innerHTML = "";
    }
    else{
        document.getElementById('usererror').innerHTML = "**User id is invalid **";
        return false;
    }
    if (fnamecheck.test(fname)){
        document.getElementById('fnameerror').innerHTML ="";
    }
    else{
        document.getElementById('fnameerror').innerHTML = "Should not contain digits and special characters";
        return false;
    }
    if(emailcheck.test(email))
    {
        document.getElementById('mail').innerHTML= "";
    }
    else{
        document.getElementById('mail').innerHTML ="Email-id is invalid";
        return false;
    }
    if (pswcheck.test(psw))
    {
        document.getElementById('pass').innerHTML = "";
    }else {
        document.getElementById('pass').innerHTML = "It should contain contain digits and special characters";
        return false;
    }
}