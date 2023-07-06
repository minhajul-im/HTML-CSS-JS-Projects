// step 1
document.getElementById('login-btn').addEventListener('click', function(){
    const email = document.getElementById('email-id');
    const emailValue = email.value;
   
    const password = document.getElementById('password-input');
    const passwordValue = password.value;

    if(emailValue === 'example@gmail.com' && passwordValue === 'example'){
        window.location.href = "inside.html"
    }
    else{
        alert('Please Valid Email.')
    }
    email.value = '';
    password.value = '';
})