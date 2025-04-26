const buttons = document.querySelectorAll('.button');

function buttonOnClick() {
    const img = document.querySelector('img');
    
    img.src = 'https://i.ibb.co/xKWxPmGt/Copy-of.png';
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });
}

buttons.forEach(button => {
    button.addEventListener('click', buttonOnClick);
});


setInterval(changeButtonColor, 3000);