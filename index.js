let registerButton = document.getElementById('register-page');
let backgroundMove = document.getElementById('btn-background');
let loginButton = document.getElementById('login-page');
let position = backgroundMove.style.left = '615px';

function backgroundMoveAnimation(){
    if (registerButton.focus){
        backgroundMove.style.left = '770px';
    }
}

function backgroundMoveBack(){
    if (loginButton.focus) {
        backgroundMove.style.left = '615px';
    }
}