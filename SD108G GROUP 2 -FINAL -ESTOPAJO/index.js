let isPlayer1 = true;

let decide = false;

let playerId = {
    P1: [],
    P2: []
};
window.onload = () => {
    createCells();
};

function createCells() {
    let parent = document.getElementById("gameArea");

    for (let i = 0; i < 9; i++) {
        let div = document.createElement("div");
        div.className = "cell";
        div.id = i;
        div.addEventListener("click", cellClicked);

        parent.appendChild(div);
    }
}

function cellClicked(event) {
    let id = event.target.id;
    let cell = document.getElementById(id);
    let player = document.getElementById("player");
    cell.removeEventListener("click", cellClicked);
    if (isPlayer1) {
        //PLAYER 1

        cell.style = "background-image: url('./image/o.jpg')";
        player.innerText = "Player 2's turn!";
        playerId.P1.push(id);
        isPlayer1 = !isPlayer1;
        checkWin(playerId.P1, "Player 1 Win the Game GGWP!");
    } else {
        //PLAYER 2
        cell.style = "background-image: url('./image/x.jpg')";
        player.innerText = "Player 1's turn!";
        isPlayer1 = !isPlayer1;
        playerId.P2.push(id);
        checkWin(playerId.P2, "Player 2 Win the Game GGWP!");
    }

    //IF TIE
    let allLength = playerId.P1.length + playerId.P2.length;

    console.log(allLength);
    if (decide == false) {
        if (allLength >= 9) {
            location.reload();
            alert("The Game is Tied!");
        }
    }
}

function checkWin(playerId, player) {
    let winningCombination = [
        ["0", "1", "2"],
        ["3", "4", "5"],
        ["6", "7", "8"],

        ["0", "3", "6"],
        ["1", "4", "7"],
        ["2", "5", "8"],

        ["0", "4", "8"],
        ["2", "4", "6"]
    ];

    for (combination of winningCombination) {
        if (
            playerId.includes(combination[0]) &&
            playerId.includes(combination[1]) &&
            playerId.includes(combination[2])
        ) {
            alert(player);
            location.reload();
            decide = true;
        }
    }
}