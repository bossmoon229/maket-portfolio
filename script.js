const header = document.querySelector('.header');
const burger = header.querySelector('.burger-menu');
const burgerIcon = header.querySelector('.burger-menu__icon');

console.log(header);
console.log(burger);
console.log(burgerIcon);

burger.addEventListener('click', function(){
    header.classList.toggle('header--mobile');

    if(header.classList.contains('header--mobile')){

        burgerIcon.src='img/close.svg';
    }else{
        burgerIcon.src='img/burger_menu.svg';
        
    }
});