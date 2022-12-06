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


function horoscopeInformation(event) {
    event.preventDefault();
    var button = event.target;
    var zodiac = button.getAttribute("data-zodiac")

    console.log("This was clicked: ", zodiac);

    // redirect to next page WITH the zodiac as a query parameter

}


var ariesFormEl = document.querySelector('#ariesbtn');
var aquariusFormEl = document.querySelector('#aquariusbtn');
var cancerFormEl = document.querySelector('#cancerbtn');
var capricornFormEl = document.querySelector('#capricornbtn');
var geminiFormEl = document.querySelector('#geminibtn');
var leoFormEl = document.querySelector('#leobtn');
var libraFormEl = document.querySelector('#librabtn');
var piscesFormEl = document.querySelector('#piscesbtn');
var sagittariusFormEl = document.querySelector('#sagittariusbtn');
var scorpioFormEl = document.querySelector('#scorpiobtn');
var taurusFormEl = document.querySelector('#taurusbtn');
var virgoFormEl = document.querySelector('#virgobtn');


ariesFormEl.addEventListener('click', horoscopeInformation);
aquariusFormEl.addEventListener('click', horoscopeInformation);
cancerFormEl.addEventListener('click', horoscopeInformation);
capricornFormEl.addEventListener('click', horoscopeInformation);
geminiFormEl.addEventListener('click', horoscopeInformation);
leoFormEl.addEventListener('click', horoscopeInformation);
libraFormEl.addEventListener('click', horoscopeInformation);
piscesFormEl.addEventListener('click', horoscopeInformation);
sagittariusFormEl.addEventListener('click', horoscopeInformation);
scorpioFormEl.addEventListener('click', horoscopeInformation);
taurusFormEl.addEventListener('click', horoscopeInformation);
virgoFormEl.addEventListener('click', horoscopeInformation);


