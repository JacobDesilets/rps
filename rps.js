let w = 0;
let l = 0;
let d = 0

// 0 rock
// 1 paper
// 2 scissors

let showCompChoice = document.getElementById("compChoice");
let result = document.getElementById("result");
let winCounter = document.getElementById("winCount");
let lossCounter = document.getElementById("lossCount");
let drawCounter = document.getElementById("drawCount");

let emojis = ['&#9994;', '&#9995;', '&#9996;'];

function rps(playerChoice) {
    let compChoice = Math.floor(Math.random() * 3);

    showCompChoice.innerHTML = emojis[compChoice];
    console.log(compChoice);

    switch(playerChoice) {
        case 0: // rock
            if(compChoice === 0) {
                d += 1;
                result.innerHTML = `${emojis[playerChoice]} ties ${emojis[compChoice]}`;
            } else if(compChoice === 1) {
                l += 1;
                result.innerHTML = `${emojis[playerChoice]} loses to ${emojis[compChoice]}`;
            } else {
                w += 1;
                result.innerHTML = `${emojis[playerChoice]} beats ${emojis[compChoice]}`;
            }
            break;
        case 1:  // paper
            if(compChoice === 0) {
                w += 1;
                result.innerHTML = `${emojis[playerChoice]} beats ${emojis[compChoice]}`;
            } else if(compChoice === 1) {
                d += 1;
                result.innerHTML = `${emojis[playerChoice]} ties ${emojis[compChoice]}`;
            } else {
                l += 1;
                result.innerHTML = `${emojis[playerChoice]} loses to ${emojis[compChoice]}`;
            }
            break;
        case 2: // scissors
            if(compChoice === 0) {
                l += 1;
                result.innerHTML = `${emojis[playerChoice]} loses to ${emojis[compChoice]}`;
            } else if(compChoice === 1) {
                w += 1;
                result.innerHTML = `${emojis[playerChoice]} beats ${emojis[compChoice]}`;
            } else {
                d += 1;
                result.innerHTML = `${emojis[playerChoice]} ties ${emojis[compChoice]}`;
            }
            break;
    }

    winCounter.innerHTML = w;
    lossCounter.innerHTML = l;
    drawCounter.innerHTML = d;
}
