var sign = localStorage.getItem("sign");
var queryHoroscope ='https://aztro.sameerkumar.website/?sign=' + sign + '&day=today';
var queryHoroscopeYesterday ='https://aztro.sameerkumar.website/?sign=' + sign + '&day=yesterday';
var queryHoroscopeTomorrow ='https://aztro.sameerkumar.website/?sign=' + sign + '&day=tomorrow'; 
var cryptoNameEl = document.querySelector("#cryptoName"); 
var priceEl = document.querySelector("#price"); 
var rankEl = document.querySelector("#marketRank");
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
    console.log(queryHoroscope);
    
    var horoscopeDescription = document.querySelector('#horo-Description');
    var headline = document.querySelector('#headline');
    var horDate = document.querySelector('#date');
    var mood = document.querySelector('#mood');
    mood.textContent = "Mood: " + json.mood;
    horDate.textContent = json.date_range;
    headline.textContent = "Welcome " + sign + "!";
    horoscopeDescription.textContent = json.description;
    console.log(sign);
});

fetch(queryHoroscopeYesterday, {
    method: 'POST'
})
.then(response => response.json())
.then(json => {
    const luckyNumber = json.lucky_number;
    console.log(luckyNumber);
    let cryptoChoice = luckyNumber % 8; 
    console.log(cryptoChoice);
    localStorage.setItem("lucky", cryptoChoice); 
    console.log(queryHoroscopeYesterday);
    
    var horoscopeDescriptionY = document.querySelector('#horo-DescriptionY');
    var headlineY = document.querySelector('#headlineY');
    var horDateY = document.querySelector('#dateY');
    var moodY = document.querySelector('#moodY');
    moodY.textContent = "Mood: " + json.mood;
    horDateY.textContent = "Yesterday's Horoscope";
    headlineY.textContent = "Welcome " + sign + "!";
    horoscopeDescriptionY.textContent = json.description;
    console.log(sign);
});

fetch(queryHoroscopeTomorrow, {
    method: 'POST'
})
.then(response => response.json())
.then(json => {
    const luckyNumber = json.lucky_number;
    console.log(luckyNumber);
    let cryptoChoice = luckyNumber % 8; 
    console.log(cryptoChoice);
    localStorage.setItem("lucky", cryptoChoice); 
    console.log(queryHoroscopeTomorrow);
    
    var horoscopeDescriptionT = document.querySelector('#horo-DescriptionT');
    var headlineT = document.querySelector('#headlineT');
    var horDateT = document.querySelector('#dateT');
    var moodT = document.querySelector('#moodT');
    moodT.textContent = "Mood: " + json.mood;
    horDateT.textContent = "Tomorrow's Horoscope";
    headlineT.textContent = "Welcome " + sign + "!";
    horoscopeDescriptionT.textContent = json.description;
    console.log(sign);
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
    cryptoNameEl.innerHTML = "The stars have chosen " + luckyCrypto + " as your lucky crypto!"
    priceEl.innerHTML = price + " BTC" 
    rankEl.innerHTML = "#" + rank + " on the market rank" 
    iconEl.setAttribute("src", cryptoIcon);
}); 