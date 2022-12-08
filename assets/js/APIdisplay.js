var sign = localStorage.getItem("sign");
var queryHoroscope ='https://aztro.sameerkumar.website/?sign=' + sign + '&day=today';
var queryHoroscopeYesterday ='https://aztro.sameerkumar.website/?sign=' + sign + '&day=yesterday';
var queryHoroscopeTomorrow ='https://aztro.sameerkumar.website/?sign=' + sign + '&day=tomorrow'; 
var cryptoNameEl = document.querySelector("#cryptoName"); 
var priceEl = document.querySelector("#price"); 
var rankEl = document.querySelector("#marketRank");
var iconEl = document.querySelector("#icon"); 
var cryptoNameElY = document.querySelector("#cryptoNameY"); 
var priceElY = document.querySelector("#priceY"); 
var rankElY = document.querySelector("#marketRankY");
var iconElY = document.querySelector("#iconY");
var cryptoNameElT = document.querySelector("#cryptoNameT"); 
var priceElT = document.querySelector("#priceT"); 
var rankElT = document.querySelector("#marketRankT");
var iconElT = document.querySelector("#iconT");
var iconHoroEl = document.querySelector("#iconHoro"); 
iconHoroEl.setAttribute("src", "assets/images/" + sign + ".png"); 
fetch(queryHoroscope, {
    method: 'POST'
})
.then(response => response.json())
.then(json => {
    const luckyNumber = json.lucky_number;
    console.log(luckyNumber);
    let cryptoChoice = luckyNumber % 8; 
    console.log(cryptoChoice);
    localStorage.setItem("luckyToday", cryptoChoice); 
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
    localStorage.setItem("luckyYes", cryptoChoice); 
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
    localStorage.setItem("luckyTom", cryptoChoice); 
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


var arrayPosToday = localStorage.getItem("luckyToday");
var queryCrypto = "https://api.coingecko.com/api/v3/search/trending";
fetch(queryCrypto) .then(response => response.json())
.then(json => { 
    let coins = json.coins; 
    console.log(coins);
    console.log(coins[arrayPosToday].item.name); 
    let luckyCrypto = coins[arrayPosToday].item.name;
    let price = coins[arrayPosToday].item.price_btc;
    let rank = coins[arrayPosToday].item.market_cap_rank; 
    let cryptoIcon = coins[arrayPosToday].item.small
    cryptoNameEl.innerHTML = "The stars have chosen " + luckyCrypto + " as your lucky crypto!"
    priceEl.innerHTML = price + " BTC" 
    rankEl.innerHTML = "#" + rank + " on the market rank" 
    iconEl.setAttribute("src", cryptoIcon);
});  
var arrayPosYes = localStorage.getItem("luckyYes");
fetch(queryCrypto) .then(response => response.json())
.then(json => { 
    let coins = json.coins; 
    console.log(coins);
    console.log(coins[arrayPosYes].item.name); 
    let luckyCrypto = coins[arrayPosYes].item.name;
    let price = coins[arrayPosYes].item.price_btc;
    let rank = coins[arrayPosYes].item.market_cap_rank; 
    let cryptoIcon = coins[arrayPosYes].item.small
    cryptoNameElY.innerHTML = "The stars chose " + luckyCrypto + " for yesterday's lucky crypto!"
    priceElY.innerHTML = price + " BTC" 
    rankElY.innerHTML = "#" + rank + " on the market rank" 
    iconElY.setAttribute("src", cryptoIcon);
});  

var arrayPosTom = localStorage.getItem("luckyTom");
fetch(queryCrypto) .then(response => response.json())
.then(json => { 
    let coins = json.coins; 
    console.log(coins);
    console.log(coins[arrayPosTom].item.name); 
    let luckyCrypto = coins[arrayPosTom].item.name;
    let price = coins[arrayPosTom].item.price_btc;
    let rank = coins[arrayPosTom].item.market_cap_rank; 
    let cryptoIcon = coins[arrayPosTom].item.small
    cryptoNameElT.innerHTML = "The stars have chosen " + luckyCrypto + " as tomorrow's lucky crypto!"
    priceElT.innerHTML = price + " BTC" 
    rankElT.innerHTML = "#" + rank + " on the market rank" 
    iconElT.setAttribute("src", cryptoIcon);
}); 