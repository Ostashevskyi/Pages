function toogleBurger() {
    document.querySelector('.header__burger-btn').addEventListener('click', () => {
        document.querySelector('.header__wrapper').classList.toggle('open');
    })
}

function tooglePopUp() {
    const popUp = document.querySelector('.main__popup');
    const openBtns = document.querySelectorAll('.open-popup');
    const closeBtns = document.querySelectorAll('.close-popup');

    for (let i = 0; i < openBtns.length; i++) {
        openBtns[i].addEventListener('click', () => {
            popUp.classList.add('open');
            document.body.style.overflow = 'hidden';
            document.querySelector('.header__burger-btn').style.zIndex = '0';
        })        
    }
    
    for (let i = 0; i < closeBtns.length; i++) {
        closeBtns[i].addEventListener('click', () => {
            popUp.classList.remove('open');
            document.body.style.overflow = 'scroll';
            document.querySelector('.header__burger-btn').style.zIndex = '1';

        })        
    }

}

toogleBurger();
tooglePopUp();