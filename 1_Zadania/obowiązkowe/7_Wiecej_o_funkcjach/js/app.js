/**
 * Zagniezdzanie funkcji.
 * Przesledz krok po kroku kazda linijke kodu. Kazda!
 * Napisz komentarze dla kazdej z linijek kodu
 */


// Deklaracja funkcji 'jeden'
function jeden() {

    // Deklaracja zmiennej 'zmienna1'
    var zmienna1 = 1;

    // Deklaracja funckji 'dwa'
    function dwa() {

        // Wypisanie w konsoli wartości przechowywanej przez zmienną "zmienna1"
        console.log(zmienna1);

        // Deklaracja zmiennej 'zmienna 2' w obrębie funkcji 'dwa'
        var zmienna2 = 3;
    }

    // Wywołanie funkcji 'dwa'
    dwa();

    // Próba wyświetlenia wartości zmiennej która jest w obrębie funkcji 'dwa' więc tutaj nie ma do niej dostępu
    console.log(zmienna2)
}

// Wywołanie funckji 'jeden'
jeden()