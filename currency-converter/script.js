document.getElementById("convertButton").addEventListener("click", function () {

    const amount = parseFloat(document.getElementById("amount").value);
    const sourceCurrency = document.getElementById("sourceCurrency").value;
    const targetCurrency = document.getElementById("targetCurrency").value;

    
    const exchangeRates = {
        USD: 1,     
        EUR: 0.85,  
        JPY: 110,   
        
    };

    
    const convertedAmount = (amount / exchangeRates[sourceCurrency]) * exchangeRates[targetCurrency];


    document.getElementById("convertedAmount").textContent = convertedAmount.toFixed(2) + " " + targetCurrency;
});
