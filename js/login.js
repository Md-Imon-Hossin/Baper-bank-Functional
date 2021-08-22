
document.getElementById('submit-button').addEventListener('click', function () {

    // get user email :
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;

    // get user password :
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    
    // check email and password :
    if (userEmail == 'imonhossin104@gmail.com' && userPassword == 'secret') {
        window.location.href = 'banking.html';
    }
})