let boxes = document.querySelectorAll('.box');
console.log(boxes);
let resetBtn = document.querySelector('#Reset');

let turno = true;
let turnx = false;

const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("click");
        if (turno) {
            box.innerHTML = "O";
            turno = false;
            turnx = true;
        } else {
            box.innerHTML = "X";
            turno = true;
            turnx = false;
        }
        box.disabled = true;
        checkWinner();
    });
});

let checkWinner = () => {
    for (let pattern of winPatterns) {
        let position1 = boxes[pattern[0]].innerHTML;
        let position2 = boxes[pattern[1]].innerHTML;
        let position3 = boxes[pattern[2]].innerHTML;

        if (position1 !== "" && position1 === position2 && position1 === position3) {
            let winImg = document.getElementById('winImg');
            winImg.style.display = "block"
            let Winner = document.getElementById('Winner')
            Winner.innerHTML = ("Winner is: " + position1)
            break;      
        }
    }
};