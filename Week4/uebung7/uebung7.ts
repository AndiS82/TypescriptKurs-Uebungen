type Action = "moveLeft" | "moveRight" | "moveUp" | "moveDown";

type Position = [number, number];

function performAction(pos: Position, action: Action): Position{
    const x = pos[0];
    const y = pos[1];
    switch (action) {
        case "moveLeft": {
            return (x - 1, y);
        }
        case "moveRight": {
            return (x + 1, y);
        }
        case "moveUp": {
            return (x, y - 1);
        }
        case "moveDown": {
            return (x, y + 1);
            }
    }
}

function isLegalPosition(pos: Position):boolean {
    const x = pos[0];
    const y = pos[1];
    if (x < 0) {
        return false;
    }
    if (y < 0) {
        return false;
    }
    if (x > 7) {
        return false;
    }
    if (y > 7) {
        return false
    }
    return true
}



export{}