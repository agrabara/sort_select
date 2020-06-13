input.onButtonPressed(Button.A, function () {
    for (let i = 0; i <= 18; i++) {
        minimum = i
        for(let x = 1; x <= 19 - i; x++) {
            j = x + i
            if (list[j] < list[minimum]) {
                minimum = j    
            }
        }
if (minimum != i) {
            tymczasowa = list[minimum]
            list[minimum] = list[i]
            list[i] = tymczasowa
            doRysowanie()
            wynik += 1
        }
    }
    serial.writeValue("Wynik=", wynik)
})
function doRysowanie () {
    basic.clearScreen()
    for (let kol2 = 0; kol2 <= 4; kol2++) {
        wiersz = 0
        while (wiersz < list[kol2]) {
            led.plot(kol2, 4 - wiersz)
            wiersz += 1
        }
        serial.writeNumbers(list)
        basic.pause(100)
    }
}
input.onButtonPressed(Button.AB, function () {
    for (let k = 0; k <= 19; k++) {
        list[k] = randint(0, 315) + 1
    }
    doRysowanie()
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    for (let kol = 0; kol <= 4; kol++) {
        wiersz = 0
        while (wiersz < list[kol]) {
            led.plot(kol, 4 - wiersz)
            wiersz += 1
        }
    }
})
let wiersz = 0
let wynik = 0
let tymczasowa = 0
let list: number[] = []
let j = 0
let minimum = 0
let licznik = 0
list = [4, 3, 2, 5, 1]
doRysowanie()
