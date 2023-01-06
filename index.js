let registerButton = document.getElementById('register-page');
let backgroundMove = document.getElementById('btn-background');
let loginButton = document.getElementById('login-page');
let position = backgroundMove.style.left = '0px';
let bodyContainer = document.getElementById('body-container');
let registerContainer = document.getElementById('register-container');
let labelIconNickname = document.getElementById('nickname');
let labelIconHacker = document.getElementById('hacker');


function backgroundMoveAnimation(){
    if (registerButton.focus){
        backgroundMove.style.left = '156px';
        backgroundMove.style.background = '#ff0086';
    }
}

function backgroundMoveBack(){
    if (loginButton.focus) {
        backgroundMove.style.left = '0px';
        backgroundMove.style.background = '#ff00b7';
    }
}

function bodyContainerDisplay(){
    if (registerContainer.style.display = 'none'){
        bodyContainer.style.display = 'flex'
    }
}

function registerContainerDisplay(){
    if (bodyContainer.style.display = 'none'){
        registerContainer.style.display = 'flex';
    }
}
