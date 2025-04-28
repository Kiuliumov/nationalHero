window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

const buttons = document.querySelectorAll('.button');

function buttonOnClick(event) {
    const img = document.querySelector('img');

    img.src = 'https://i.ibb.co/xKWxPmGt/Copy-of.png';

    confetti({
        particleCount: 900,
        spread: 100,
        origin: { y: 0.5 }
    });

    event.target.classList.add('clicked');

    setTimeout(() => {
        event.target.classList.remove('clicked');
    }, 400);
}

buttons.forEach(button => {
    button.addEventListener('click', buttonOnClick);
});

function changeButtonColor() {
    buttons.forEach(button => {
    });
}

