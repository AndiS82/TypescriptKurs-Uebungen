// Übungen

//Übung 1: Lege einen Player und einen Admin an

type Player = {
    Name: string;
    lastLogin: Date;
    ID: number;
    Email: string;
    //von Übung4
    Games: PlayedGame
}

type Admin = {
    Name: string;
    ID: number;
    Email: string;
    EmployeeID: number
}

//Übung 2
// Schreibe eine Funktion getEmail, die einen Player nimmt und die Email zurückgibt

const Andi: Player = {
    Name: "Andi",
    lastLogin: new Date(),
    ID: 2104,
    Email: "andi@andi.com",
    Games: {
        SpielName: "SpaceInvaders",
        HighScore: 777
    }
}

function getPlayerEmail(player: Player): string{
    return player.Email
}

console.log(getPlayerEmail(Andi))

//Übung 3
// Gib Email für Player und Admin aus

const Carina: Admin = {
    Name: "Carina",
    ID: 1912,
    Email: "carina@carina.com",
    EmployeeID:181291
}

function getEmail({ Email }: { Email: string }): string{
    return Email
}

console.log(getEmail(Andi))
console.log(getEmail(Carina))

//Übung 4
// Definiere Objekt PlayedGame mit SpielName als string und HighScore als number und füge es den Objekten aus den vorheringen Übungen als nested Object ein (Typ:PlayedGame)

type PlayedGame = {
    SpielName: string;
    HighScore: number;
}

const player1: Player = {
    Name: "Johannes",
    lastLogin: new Date(),
    ID: 723,
    Email: "johannes@johannes.com",
    Games: {
        SpielName: "SpaceInvaders",
        HighScore: 12345678
    }
}

const player2: Player = {
    Name: "Johanna",
    lastLogin: new Date(),
    ID: 724,
    Email: "johanna@johanna.com",
    Games: {
        SpielName: "SpaceInvaders",
        HighScore:87654321
    }
}

//Übung 5
// vergleiche 2 HighScores und ermittle den Gewinner

function evaluateWinner(object1: PlayedGame, object2: PlayedGame): number{
    if (object1.SpielName != object2.SpielName)
        return 0
    else {
        if (object1.HighScore > object2.HighScore)
            return 1
        if (object1.HighScore < object2.HighScore)
            return -1
        else
            return 0
    }
}

console.log(evaluateWinner(player1.Games, player2.Games))


// Bonusaufgabe 1
//screibe ein Leaderboard etc.

const game1: PlayedGame = {
    SpielName: "FlappyDuck",
    HighScore: 100
}

const game2: PlayedGame = {
    SpielName: "FlappyDuck",
    HighScore: 200
}

const game3: PlayedGame = {
    SpielName: "FlappyDuck",
    HighScore: 300
}

const game4: PlayedGame = {
    SpielName: "SpaceInvaders",
    HighScore: 400
}

const gameArray: PlayedGame[] = [
    game1, game2, game3, game4
];

let leaderboardArray: PlayedGame[] = [];

function LeaderboardEntry(x: PlayedGame[], name: string): PlayedGame[]{
    x.forEach(score => {
        if(score.SpielName === name)
        leaderboardArray.push(score)
    })
    return leaderboardArray.sort((a,b)=> b.HighScore -a.HighScore)
}

console.log(LeaderboardEntry(gameArray, "FlappyDuck"))

// Bonusaufgabe 2

//erstelle einen Typen namens Highscore nach Vorgaben der Aufgabe

type Highscore = {
    Spielname: string,
    Score: number,
    Player: Player
}

// erstelle einen Typen namens Leaderboard nach Vorgaben der Aufgabe

type Leaderboard = Highscore[];

// erstelle eine Funktion, die einen Array von Playern nimmt und ein Leaderboard zurückgibt

const player3: Player = {
    Name: "Carina",
    lastLogin: new Date(),
    ID: 1912,
    Email: "carina@carina.com",
    Games: {
        SpielName: "FlappyDuck",
        HighScore:19121991
    }
}

let LeaderboardFlappyDuck: Player[] = [];
let LeaderboardSpaceInvaders: Player[] = [];

const leaderboardAdvanced = (playerArray: Player[]):Leaderboard => {
    playerArray.forEach(Player => {
        if (
            Player.Games.SpielName === "FlappyDuck"
        )
            LeaderboardFlappyDuck.push(Player)
        if (
            Player.Games. SpielName === "SpaceInvaders"
        ) LeaderboardSpaceInvaders.push(Player)
    })

    const FlappyDuckTopPlayer: Player = LeaderboardFlappyDuck.sort((a, b) => b.Games.HighScore - a.Games.HighScore)[0];
    const SpaceInvadersTopPlayer: Player = LeaderboardSpaceInvaders.sort((a, b) => b.Games.HighScore - a.Games.HighScore)[0]
    
    const UltimateHighscores: Highscore[] = [
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
    ]

    return UltimateHighscores
}

console.log(leaderboardAdvanced([player1, player2, player3, Andi]))

export {}