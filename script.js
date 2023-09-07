let currency = 0;
let workers = 0;
let currencyPerSecond = 1; 

function aumentarMoneda() {
    currency += currencyPerSecond;
    document.getElementById("currencyDisplay").textContent = currency;
}

const incrementButton = document.getElementById("incrementButton");
incrementButton.addEventListener("click", function() {
    aumentarMoneda();
});

const buyWorkerButton = document.getElementById("buyWorkerButton");
buyWorkerButton.addEventListener("click", function() {
    const workerCost = 10; 
    if (currency >= workerCost) {
        currency -= workerCost;
        workers++;
        currencyPerSecond += 1; 
        document.getElementById("currencyDisplay").textContent = currency;
        console.log(`Worker comprado. Workers: ${workers}`);
    } else {
        console.log("No tienes suficiente moneda para comprar un worker.");
    }
});

const intervalo = setInterval(aumentarMoneda, 1000);