
function submit(event){
    event.preventDefault();

    var contact = document.getElementById('country_code').value;
    var mail = document.getElementById('email').value;
    var phone = document.getElementById('mobile_no').value;
    var obj = {
        email: mail,
        number: phone,
        country: contact
    }
    var data = JSON.stringify(obj);
    localStorage.setItem("data",data);
    window.location="thank_you.html";
}

var button = document.getElementById("login_form").addEventListener('submit',submit);