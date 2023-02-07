let round = 1;
let player1 = 0;
let player2 = 0;

function startGame() {
    while (round <= 5) {
        let player1Guess = parseInt(
            prompt("Player 1, masukkan tebakan anda (1-3):")
        );
        let player2Guess = parseInt(
            prompt("Player 2, masukkan tebakan anda (1-3):")
        );

        let randomNumber = Math.floor(Math.random() * 3) + 1;

        if (player1Guess === player2Guess) {
            alert("Tebakan gak boleh sama gengs");
        } else if (player1Guess === randomNumber) {
            player1++;
            alert(`
            Player 1 menang ronde ${round}!
            >> Hasil: 
            Player 1 = ${player1}
            Player 2 = ${player2}
            `);
        } else if (player2Guess === randomNumber) {
            player2++;
            alert(`
            Player 2 menang ronde ${round}!
            >> Hasil: 
            Player 1 = ${player1}
            Player 2 = ${player2}
            `);
        } else {
            alert(`
            Ronde ${round} tidak ada pemenang!
            >> Hasil: 
            Player 1 = ${player1}
            Player 2 = ${player2}
            `);
        }
        round++;
    }

    if (player1 > player2) {
        alert("Yeayyy, Player 1 menang game ini!");
    } else if (player2 > player1) {
        alert("Yeayyy, Player 2 menang game ini!");
    } else {
        alert("Seri nih gengs! Coba main lagi yaa :)");
    }
}

startGame();
