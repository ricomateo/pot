function getRandomChoice() {
    let options = ['Rock', 'Paper', 'Scissors'];
    let computerChoice = options[Math.floor(Math.random()*options.length)];
    return computerChoice;
}

function determineWinner(usersChoice, computerChoice) {
    if (usersChoice == 'Rock') {
        if (computerChoice == 'Scissors') return 1;
        else return 0;
    
    } else if (usersChoice == 'Paper') {
        if (computerChoice == 'Rock') return 1;
        else return 0;
    
    } else {
        if (computerChoice == 'Paper') return 1;
        else return 0;
    }
}

function playRound(usersChoice) {
    let computerChoice = getRandomChoice();
    while (computerChoice == usersChoice) {
        computerChoice = getRandomChoice();
    }
    return determineWinner(usersChoice, computerChoice);
}



function game() {
    let body = document.querySelector('body');
    let div = document.createElement('div');
    let h2 = document.createElement('h2');
    let h1 = document.createElement('h1');
    let usersScore = 0;
    let rounds = 0;
    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            if (rounds == 5) {
                rounds = 0;
                usersScore = 0;
                h2.textContent = '';
            }
            let score = playRound(button.id);
            usersScore += score;
            rounds += 1;
            displayScore(score, usersScore, rounds, body, div, h2, h1);
        });
    });
}

function displayScore(score, usersScore, rounds, body, div, h2, h1) {
    
    body.appendChild(h1);
    body.appendChild(div);

    div.textContent = "Puntiacion: " + usersScore + "/5";
    h1.textContent = "Ronda " + rounds;
    
    if (rounds == 5) {
        if (usersScore > 2) {
            h2.textContent = "ganaste papaaa";
        } else {
            h2.textContent = "perdiste pete jajjj";
        }
        body.appendChild(h2);
    }
}

game();

