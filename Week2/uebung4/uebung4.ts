type Player = {
    Name: string;
    lastLogin: Date;
    ID: number;
    Email: string;
    PlayedGame: PlayedGame
}

type Admin = {
    Name: string;
    ID: number;
    Email: string;
    EmployeeID: number
}


type PlayedGame = {
    Title: string;
    Highscore: number
}

const getPlayerEmail = ({ Email }: { Email: Player["Email"]} | { Email: Admin["Email"] })=> {
    console.log(Email)
}

getPlayerEmail(player1)