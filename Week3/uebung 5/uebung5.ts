// Aufgabe 1

function sum(nums: number[]): number{
    let summe = 0;
    nums.forEach(element => {
        summe += element;
    });
    return summe;

    // bzw: 
    // return nums.reduce((a,b)=> a+b,0);
}


// Aufgabe 2

function sum2(items: (number | string)[]):string{
    let summe2 = "";
    items.forEach(element => {
        summe2 += element;
    });
    return summe2
};

console.log(sum2(["test", 1, "lol"]));

function genericLast<T>(arr: Array<T>): T | undefined{
    const size = arr.length;
    if (size < 1) {
        return undefined;
    }
    return arr[size - 1];
}

console.log(genericLast([1, 2, 3]));

// Letzte Aufgabe

function genericRange<T>(collection: Array<T>, start: number, end: number): Array<T>|T{
    if (start < 0) {
        return [];
    }
    if (end > collection.length - 1) {
        return [];
    }
    const subCollection = collection.slice(start, end);
    if (subCollection.length === 1) {
        subCollection[0];
    }
    return subCollection;
}

export {}