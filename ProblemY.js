let triangle = "75 95 64 17 47 82 18 35 87 10 20 04 82 47 65 19 01 23 75 03 34 88 02 77 73 07 63 67 99 65 04 28 06 16 70 92 41 41 26 56 83 40 80 70 33 41 48 72 33 47 32 37 16 94 29 53 71 44 65 25 43 91 52 97 51 14 70 11 33 28 77 73 17 78 39 68 17 57 91 71 52 38 17 14 91 43 58 50 27 29 48 63 66 04 68 89 53 67 30 73 16 69 87 40 31 04 62 98 27 23 09 70 98 73 93 38 53 60 04 23"
let stringNum = ""
let counter = 0
let sum = 0
let array = []
for (let i = 0; i < triangle.length; i++) {
    if (triangle[i] !== ' ') {
        stringNum = stringNum + triangle[i]
        counter = counter + 1
        if (counter == 2) {
            counter = 0
            let number = parseInt(stringNum)
            sum = sum + number
            array.push(number)
            stringNum = ""
        }
    }   else {
 
    }
}


let arraytoadd
let j = 1
let h = 0
let maxDigitsSum = 0
let anotherCounter = 0
for (let i = 1; i < 16; i++) {
    arraytoadd = array.slice(h, j)
    h = h + i
    j = j + i + 1
    if (i == 1 || i == 2) {
        let numbertoadd = arraytoadd[0]
        console.log('jestem w petli 0 lub 1, dodaje ', arraytoadd[0])
        maxDigitsSum = maxDigitsSum + numbertoadd
        console.log('aktualny wynik = ', maxDigitsSum)
    } else {
        anotherCounter = anotherCounter + 1
        console.log('jestem w peli powyzej 1, dodaje ', arraytoadd[anotherCounter])
        maxDigitsSum = maxDigitsSum + arraytoadd[anotherCounter]
        console.log('aktualny wynik = ', maxDigitsSum)
    }
    arraytoadd = []
}
