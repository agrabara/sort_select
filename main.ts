/**
 * Progrsam z 10 zajęć CoderDojo-Micto:bit 
 * zdalnie 2020.06.13 obecni: Maks, Rafał, Michał
 * 
 * Sortowanie przez wybieranie
 *  https://pl.wikipedia.org/wiki/Sortowanie_przez_wybieranie
 *  
 * Polega na wyszukaniu elementu mającego się znaleźć na żądanej pozycji
 *  i zamianie miejscami z tym, który jest tam obecnie. 
 * Operacja jest wykonywana dla wszystkich indeksów sortowanej tablicy. 
 * Algorytm przedstawia się następująco:
 * wyszukaj minimalną wartość z tablicy spośród elementów od i do końca tablicy
 * zamień wartość minimalną, z elementem na pozycji i
*/

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
    }
// dla dużej listy prezentacja na konsoli symulatora   
    serial.writeNumbers(list)
    basic.pause(500)
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
