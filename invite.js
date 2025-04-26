const buttons = document.querySelectorAll('.button');

function buttonOnClick() {
    const img = document.querySelector('img');
    
    img.src = 'https://i.ibb.co/xKWxPmGt/Copy-of.png';
    confetti({
        particleCount: 900,
        spread: 100,
        origin: { y: 0.5 }
    });
}

buttons.forEach(button => {
    button.addEventListener('click', buttonOnClick);
});


setInterval(changeButtonColor, 3000);