function showPassword() {
    const eye = document.getElementById(eye);
    const eyeSlash = document.getElementById('eye-Slash');
    const fieldPassword = document.getElementById('field-password');


    if(eye.style.display === 'none') {
        eye.style.display = 'block'
        eyeSlash.style.display = 'none'
        fieldPassword.style.display = 'text'

        

    } else {

        eye.style.display = 'none';
        eyeSlash.style.display = 'block';
        fieldPassword.style.type = 'password';
    }
}