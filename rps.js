sessionStorage.setItem('wins', 0);
sessionStorage.setItem('losses', 0);
sessionStorage.setItem('draws', 0);

let w = Number(sessionStorage.getItem('wins'));
let l = Number(sessionStorage.getItem('losses'));
let d = Number(sessionStorage.getItem('draws'));

// 0 rock
// 1 paper
// 2 scissors

let showCompChoice = document.getElementById("compChoice");
let result = document.getElementById("result");
let winCounter = document.getElementById("winCount");
let lossCounter = document.getElementById("lossCount");
let drawCounter = document.getElementById("drawCount");
let body = document.getElementById("body");

let emojis = ['&#9994;', '&#9995;', '&#9996;'];

function rps(playerChoice) {
    let compChoice = Math.floor(Math.random() * 3);

    showCompChoice.innerHTML = emojis[compChoice];
    console.log(compChoice);

    switch(playerChoice) {
        case 0: // rock
            if(compChoice === 0) {
                tie(playerChoice, compChoice);
            } else if(compChoice === 1) {
                lose(playerChoice, compChoice);
            } else {
                win(playerChoice, compChoice);
            }
            break;
        case 1:  // paper
            if(compChoice === 0) {
                win(playerChoice, compChoice);
            } else if(compChoice === 1) {
                tie(playerChoice, compChoice);
            } else {
                lose(playerChoice, compChoice);
            }
            break;
        case 2: // scissors
            if(compChoice === 0) {
                lose(playerChoice, compChoice);
            } else if(compChoice === 1) {
                win(playerChoice, compChoice);
            } else {
                tie(playerChoice, compChoice);
            }
            break;
    }

    winCounter.innerHTML = sessionStorage.getItem('wins');
    lossCounter.innerHTML = sessionStorage.getItem('losses');
    drawCounter.innerHTML = sessionStorage.getItem('draws');
}

function win(pc, cc) {
    w += 1;
    result.innerHTML = `${emojis[pc]} beats ${emojis[cc]}`;
    body.style.background = 'linear-gradient(180deg, var(--base), var(--win)';
    sessionStorage.setItem('wins', w);
}

function tie(pc, cc) {
    d += 1;
    result.innerHTML = `${emojis[pc]} ties ${emojis[cc]}`;
    body.style.background = 'linear-gradient(180deg, var(--base), var(--accent-dk)';
    sessionStorage.setItem('draws', d);
}

function lose(pc, cc) {
    l += 1;
    result.innerHTML = `${emojis[pc]} loses to ${emojis[cc]}`;
    body.style.background = 'linear-gradient(180deg, var(--base), var(--loss)';
    sessionStorage.setItem('losses', l);
}

function reset() {
    w = 0;
    l = 0;
    d = 0;
    sessionStorage.setItem('wins', w);
    sessionStorage.setItem('draws', d);
    sessionStorage.setItem('losses', l);

    winCounter.innerHTML = sessionStorage.getItem('wins');
    lossCounter.innerHTML = sessionStorage.getItem('losses');
    drawCounter.innerHTML = sessionStorage.getItem('draws');
}
