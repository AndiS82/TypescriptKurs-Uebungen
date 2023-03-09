const Concatenate = (first:string, second:string) =>{
    const Uebungconcat: string = first +second;
    return Uebungconcat;
}

console.log("ein ", "String")

const Numberify = (numberify:string):number=>{
    const number = Number(numberify)
    return number
}


console.log(Numberify("4"))

const chainCreator = (toChain:string, multiplier:number):string=>{
    let chainifyMe: string =""
    for (let i=0; i<multiplier; i++){ 
        chainifyMe +=toChain}
    return chainifyMe
}

console.log(chainCreator("test", 3))

const isVowel =(letter:string):boolean=>{
    if(
        letter === "a" ||
        letter === "e"||
        letter ==="i"||
        letter ==="o"||
    letter === "u"    )
    {
        return true}
    else {
        return false
    }
}

console.log(isVowel("a"))
console.log(isVowel("k"))

const weirdifyVowels = (word:string, number:number):string =>{
let result: string = word
let times:number =0
for(let i=0; i < word.length; i++){
    if(
        word[i] === "a" ||
        word[i] === "e" ||
        word[i] === "i" ||
        word[i] === "o" ||
        word[i] === "u"
    ){
        result = result.slice(0, times) + word[i].repeat(number - 1) + result.slice(times)
        times = times + number
    }
    times++
}
return result
}

console.log(weirdifyVowels("ente", 5))

export{}