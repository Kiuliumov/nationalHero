const buttons = document.querySelectorAll('.button');
let colorCycle = true;

function changeButtonColor() {
    buttons.forEach(button => {
        if (colorCycle) {
            button.style.background = 'linear-gradient(135deg, #8a2be2, #9b30ff)';
            button.style.boxShadow = '0 4px 20px rgba(138, 43, 226, 0.6)';
        } else {
            button.style.background = 'linear-gradient(135deg, #00c9ff, #92fe9d)';
            button.style.boxShadow = '0 4px 20px rgba(0, 201, 255, 0.4)';
        }
    });

    colorCycle = !colorCycle; 
}

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