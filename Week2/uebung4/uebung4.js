"use strict";
// Übungen
Object.defineProperty(exports, "__esModule", { value: true });
//Übung 2
// Schreibe eine Funktion getEmail, die einen Player nimmt und die Email zurückgibt
const Andi = {
    Name: "Andi",
    lastLogin: new Date(),
    ID: 2104,
    Email: "andi@andi.com",
    Games: {
        SpielName: "SpaceInvaders",
        HighScore: 777
    }
};
function getPlayerEmail(player) {
    return player.Email;
}
console.log(getPlayerEmail(Andi));
//Übung 3
// Gib Email für Player und Admin aus
const Carina = {
    Name: "Carina",
    ID: 1912,
    Email: "carina@carina.com",
    EmployeeID: 181291
};
function getEmail({ Email }) {
    return Email;
}
console.log(getEmail(Andi));
console.log(getEmail(Carina));
const player1 = {
    Name: "Johannes",
    lastLogin: new Date(),
    ID: 723,
    Email: "johannes@johannes.com",
    Games: {
        SpielName: "SpaceInvaders",
        HighScore: 12345678
    }
};
const player2 = {
    Name: "Johanna",
    lastLogin: new Date(),
    ID: 724,
    Email: "johanna@johanna.com",
    Games: {
        SpielName: "SpaceInvaders",
        HighScore: 87654321
    }
};
//Übung 5
// vergleiche 2 HighScores und ermittle den Gewinner
function evaluateWinner(object1, object2) {
    if (object1.SpielName != object2.SpielName)
        return 0;
    else {
        if (object1.HighScore > object2.HighScore)
            return 1;
        if (object1.HighScore < object2.HighScore)
            return -1;
        else
            return 0;
    }
}
console.log(evaluateWinner(player1.Games, player2.Games));
// Bonusaufgabe 1
//screibe ein Leaderboard etc.
const game1 = {
    SpielName: "FlappyDuck",
    HighScore: 100
};
const game2 = {
    SpielName: "FlappyDuck",
    HighScore: 200
};
const game3 = {
    SpielName: "FlappyDuck",
    HighScore: 300
};
const game4 = {
    SpielName: "SpaceInvaders",
    HighScore: 400
};
const gameArray = [
    game1, game2, game3, game4
];
let leaderboardArray = [];
function LeaderboardEntry(x, name) {
    x.forEach(score => {
        if (score.SpielName === name)
            leaderboardArray.push(score);
    });
    return leaderboardArray.sort((a, b) => b.HighScore - a.HighScore);
}
console.log(LeaderboardEntry(gameArray, "FlappyDuck"));
// erstelle eine Funktion, die einen Array von Playern nimmt und ein Leaderboard zurückgibt
const player3 = {
    Name: "Carina",
    lastLogin: new Date(),
    ID: 1912,
    Email: "carina@carina.com",
    Games: {
        SpielName: "FlappyDuck",
        HighScore: 19121991
    }
};
let LeaderboardFlappyDuck = [];
let LeaderboardSpaceInvaders = [];
const leaderboardAdvanced = (playerArray) => {
    playerArray.forEach(Player => {
        if (Player.Games.SpielName === "FlappyDuck")
            LeaderboardFlappyDuck.push(Player);
        if (Player.Games.SpielName === "SpaceInvaders")
            LeaderboardSpaceInvaders.push(Player);
    });
    const FlappyDuckTopPlayer = LeaderboardFlappyDuck.sort((a, b) => b.Games.HighScore - a.Games.HighScore)[0];
    const SpaceInvadersTopPlayer = LeaderboardSpaceInvaders.sort((a, b) => b.Games.HighScore - a.Games.HighScore)[0];
    const UltimateHighscores = [
        {
            Spielname: FlappyDuckTopPlayer.Games.SpielName,
            Score: FlappyDuckTopPlayer.Games.HighScore,
            Player: FlappyDuckTopPlayer
        },
        {
            Spielname: SpaceInvadersTopPlayer.Games.SpielName,
            Score: SpaceInvadersTopPlayer.Games.HighScore,
            Player: SpaceInvadersTopPlayer
        }
    ];
    return UltimateHighscores;
};
console.log(leaderboardAdvanced([player1, player2, player3, Andi]));
//# sourceMappingURL=uebung4.js.map