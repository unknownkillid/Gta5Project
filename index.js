let registerButton = document.getElementById('register-page');
let backgroundMove = document.getElementById('btn-background');
let loginButton = document.getElementById('login-page');
let position = backgroundMove.style.left = '0px';
let bodyContainer = document.getElementById('body-container');
let registerContainer = document.getElementById('register-container');
let labelIconNickname = document.getElementById('nickname');
let labelIconHacker = document.getElementById('hacker');
let loginButtonPress = document.getElementById('login');

function backgroundMoveAnimation(){
    if (registerButton.focus){
        backgroundMove.style.left = '156px';
        backgroundMove.style.background = '#ff5ad0';
        backgroundMove.style.boxShadow = "0px 0px 30px rgb(255, 0, 251)"
    }
}

function backgroundMoveBack(){
    if (loginButton.focus) {
        backgroundMove.style.left = '0px';
        backgroundMove.style.background = '#ff5ad0';
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

function buttonFunction(e){
    e.preventDefault();
    console.log("Enter working");
}


/* <form action="" method="POST">
<input type="submit" onclick="functionname"></input> */