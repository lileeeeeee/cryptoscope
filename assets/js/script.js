var queryHoroscope ='https://aztro.sameerkumar.website/?sign=aquarius&day=today';
fetch(queryHoroscope, {
    method: 'POST'
})
.then(response => response.json())
.then(json => {
    const luckyNumber = json.lucky_number;
    console.log(luckyNumber);
    let cryptoChoice = luckyNumber % 8; 
    console.log(cryptoChoice);
    localStorage.setItem("lucky", cryptoChoice); 
});

var arrayPosition = localStorage.getItem("lucky");
var queryCrypto = "https://api.coingecko.com/api/v3/search/trending";
fetch(queryCrypto) 
.then(response => response.json())
.then(json => { 
    let coins = json.coins; 
    console.log(coins);
    console.log(coins[arrayPosition].item.id);

}); 

