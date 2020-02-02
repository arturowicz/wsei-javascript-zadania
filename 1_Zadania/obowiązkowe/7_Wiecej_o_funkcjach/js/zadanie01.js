
/**
 * Zagniezdzanie funkcji.
 * Przesledz krok po kroku kazda linijke kodu. Kazda!
 * Napisz komentarze dla kazdej z linijek kodu
 */

// Deklaracja funkcji 'sortArray'
function sortArray() {

    // Deklaracja tablicy 'points'
    var points = [41, 3, 6, 1, 114, 54, 64];

    // Wywołanie funkcji sort na tablicy points
    points.sort(function (a, b) {
        // Odejmowanie zmiennych przekazanych
        return a - b;
    });

    // Zwrócenie tablicy
    return points;
}

// Wywołanei funkcji 
sortArray();
