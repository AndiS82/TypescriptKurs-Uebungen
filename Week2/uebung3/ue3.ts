// Aufgabe 1

type myString = string

const aString: string = "Hallo";

let myWord:myString = "Ein beliebiges Wort";

myWord=aString;

// Aufgabe 2

type StringOrNumber = string | number;

let myNumber: number = 1;

const myStringOrNumber: StringOrNumber = 1;

// Aufgabe 3

function introduction(param:StringOrNumber):string{
    return ("Hallo, mein Inhalt lautet: "+param)
}


introduction("Lars")
// introduction(param: false)
introduction(5)

// Aufgabe4

const showIntroduction = (param:string |number):string=>{
if(typeof param === "undefined"){
    return "Mein Inhalt ist leer."
}else{
    return ("Hallo, mein Inhalt lautet: "+param)
}
}

showIntroduction(undefined)
showIntroduction("Grüß Gott!")

// Aufgabe5

const keepPlaying = (param:number|boolean)=>{
    if(typeof param ==="number"&&param<10){
        return true
    } else if(param === true){
        return true
    }else{
        return false
    }
}

keepPlaying(1)
keepPlaying(true)
keepPlaying(10)


// Aufgabe 6

const move = (move:string):number | undefined=>{
    const moveLow = move.toLowerCase()
    switch(moveLow){
        case "links":return 0;
        break
        case "rechts":return 1;
        break
        case "oben":return 2;
        break
        case "unten": return 3;
        break
        default: undefined
    }
}

move("rechts")
move("oben")
move("move überall hin")

export{};