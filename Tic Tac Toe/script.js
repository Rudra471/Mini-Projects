let boxes = document.querySelectorAll('.box');
let reset = document.getElementById('reset');
let msgContainer = document.querySelector('.msgContainer');
let msg = document.getElementById('msg');

let turn0 = true;
let cnt = 0;

const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

boxes.forEach((box)=> {
    box.addEventListener('click', () => {
        if(turn0 && box.innerText === '') {
            box.innerText= 'X';
            box.style.color = "green";
            turn0 = false;
        }
        else if(!turn0 && box.innerText === '') {
            box.innerText = 'O';
            box.style.color = "red";
            turn0 = true;
        }
        box.disabled = true;
        cnt++; 

        if (checkWin()) return;

        if(cnt === 9) {
            msg.innerText = "It's a draw!";
            msgContainer.classList.remove('hide');
        }
    });
});

const resetGame = () => {
    turn0 = true;
    cnt = 0; 
    boxes.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
        box.style.backgroundColor = ""; 
    });
    msgContainer.classList.add('hide');
}

const showWinner = (winner, pattern) => {
    msg.innerText = `Player ${winner} wins!`;
    msgContainer.classList.remove('hide');

    pattern.forEach(i => boxes[i].style.backgroundColor = "lightgreen");

    boxes.forEach((box) => box.disabled = true);
}

const checkWin = () => {
    for(let pattern of winPatterns){
        let val1 = boxes[pattern[0]].innerText;
        let val2 = boxes[pattern[1]].innerText;
        let val3 = boxes[pattern[2]].innerText;
        if(val1 !== "" && val1 === val2 && val2 === val3) {
            showWinner(val1, pattern); 
            return true; 
        }
    }
    return false; 
}

reset.addEventListener('click', resetGame);