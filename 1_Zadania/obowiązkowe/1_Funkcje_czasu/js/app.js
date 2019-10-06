// Zadanie 1
function countHello(number) {
    var counter = 0;
    var countdown = setInterval(() => {
        console.log("Hello " + counter);
        counter++
        if (counter === number) {
            clearInterval(countdown);
        }
    }, 1000);
}