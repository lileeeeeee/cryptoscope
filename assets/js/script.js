var queryHoroscope ='https://aztro.sameerkumar.website/?sign=aquarius&day=today'; 
var cryptoNameEl = document.querySelector("#cryptoName"); 
var priceEl = document.querySelector("#price"); 
var rankEl = document.querySelector("#rank");
var iconEl = document.querySelector("#icon"); 
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
fetch(queryCrypto) .then(response => response.json())
.then(json => { 
    let coins = json.coins; 
    console.log(coins);
    console.log(coins[arrayPosition].item.name); 
    let luckyCrypto = coins[arrayPosition].item.name;
    let price = coins[arrayPosition].item.price_btc;
    let rank = coins[arrayPosition].item.market_cap_rank; 
    let cryptoIcon = coins[arrayPosition].item.small

}); 


