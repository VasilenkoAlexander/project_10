/* Modal widown */
"use strict";
const modalSignIn = document.querySelector('.signIn');
const modalSignUp = document.querySelector('.signUp');

const closeSignIn = document.querySelector('.modal__close-signIn');
const closeSignUp = document.querySelector('.modal__close-signUp');

const btnSignIn = document.querySelector('.header__button-signIn');
const btnSignUp = document.querySelector('.header__button-signUp');

btnSignIn.addEventListener('click', function(){
    modalSignIn.style.display = 'block';
});
btnSignUp.addEventListener('click', function(){
    modalSignUp.style.display = 'block';
});

closeSignIn.addEventListener('click', function(){
    modalSignIn.style.display = 'none';
});
closeSignUp.addEventListener('click', function(){
    modalSignUp.style.display = 'none';
});
/* DropDown in footer */
