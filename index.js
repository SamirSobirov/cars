let arr = [1, 2, false, 'hello', 24, 'world', undefined, null, 'error', 22]

let number = arr.filter(elem => typeof elem ==='number')

if (number.length >= 5 ) {
    console.log("GOOD");
} else {
    console.log("BAD");
}





let cars = [17000,37000,13000,12000,14000,5000,10000,43000,80000,2000,2000]

let from = prompt('from')
let up = prompt('up')

let array = cars.filter(elem => typeof elem === "car")

    if (elem >= 2000 && elem <=17000, elem >=17000 && elem <=37000, elem >=37000 && elem <= 43000 ) {
        array.push(elem)
    }

