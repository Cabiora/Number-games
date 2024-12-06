let maxNumber = parseInt(localStorage.getItem('maxNumber'));
let randomNumber = Math.floor(Math.random() * maxNumber) + 1;
let attempts = 0;
let maxAttempts = 5;  // Default for easy level

// Set max attempts based on difficulty
switch(maxNumber) {
    case 100:
        maxAttempts = 5;  // Easy
        break;
    case 300:
        maxAttempts = 3;  // Medium
        break;
    case 500:
        maxAttempts = 2;  // Difficult
        break;
    case 10000:
        maxAttempts = 1;  // Expert
        break;
}

document.getElementById('gameDescription').textContent = `J'ai choisi un nombre entre 1 et ${maxNumber}. À toi de deviner lequel ! Tu as ${maxAttempts} tentatives.`;

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

    if (userGuess % 2 === 0) {
        message += ' Le nombre est pair.';
    } else {
        message += ' Le nombre est impair.';
    }

    if (attempts >= maxAttempts) {
        message = `Game over ! Le nombre était ${randomNumber}.`;
        document.getElementById('guess').disabled = true;
        document.querySelector('button').disabled = true;
    }

    document.getElementById('message').textContent = message;
}
