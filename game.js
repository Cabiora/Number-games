let maxNumber = localStorage.getItem('maxNumber');
let randomNumber = Math.floor(Math.random() * maxNumber) + 1;
let attempts = 0;

document.getElementById('gameDescription').textContent = `J'ai choisi un nombre entre 1 et ${maxNumber}. À toi de deviner lequel !`;

function checkGuess() {
    const userGuess = parseInt(document.getElementById('guess').value);
    attempts++;
    let message = '';

    if (userGuess === randomNumber) {
        message = `Bravo ! Vous avez deviné le nombre en ${attempts} essais.`;
    } else if (userGuess > randomNumber) {
        message = 'Trop haut ! Essayez encore.';
    } else if (userGuess < randomNumber) {
        message = 'Trop bas ! Essayez encore.';
    }

    document.getElementById('message').textContent = message;
}
