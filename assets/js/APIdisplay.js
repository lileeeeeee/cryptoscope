// gets the sign the user clicked from the previous page
var sign = localStorage.getItem("sign");
// ueses that data in the fetch call to the horoscope API
var queryHoroscope = 'https://aztro.sameerkumar.website/?sign=' + sign + '&day=today';
var queryHoroscopeYesterday = 'https://aztro.sameerkumar.website/?sign=' + sign + '&day=yesterday';
var queryHoroscopeTomorrow = 'https://aztro.sameerkumar.website/?sign=' + sign + '&day=tomorrow';
// variables for displaying returned fetch data on the page
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
// gets the data from the crypto API
var queryCrypto = "https://api.coingecko.com/api/v3/search/trending";

// sets the icon for the user's horoscope to the sign variable
iconHoroEl.setAttribute("src", "assets/images/" + sign + ".png");

// gets the horoscope data for today
var promise1 = fetch(queryHoroscope, {method: 'POST'}).then(function (response) {
    return response.json();
}).then(function (json) { // gets the lucky number from the horoscope.then(function (json) {
    const luckyNumber = json.lucky_number;
    console.log(luckyNumber);
    // sets that number as "luckyToday" in local storage
    localStorage.setItem("luckyToday", luckyNumber);
    console.log(queryHoroscope);
    // displays current day horoscope info
    var horoscopeDescription = document.querySelector('#horo-Description');
    var headline = document.querySelector('#headline');
    var mood = document.querySelector('#mood');
    mood.textContent = "Mood: " + json.mood;
    headline.textContent = "Welcome " + sign + "!";
    horoscopeDescription.textContent = json.description;
});

// gets yesterday's horoscope
var promise2 = fetch(queryHoroscopeYesterday, {method: 'POST'}).then(function (response) {
    return response.json();
}).then(function (json) { // displays that data on the page
    var horoscopeDescriptionY = document.querySelector('#horo-DescriptionY');
    var moodY = document.querySelector('#moodY');
    moodY.textContent = "Mood: " + json.mood;
    horoscopeDescriptionY.textContent = json.description;
    const luckyNumYesterday = json.lucky_number;
    console.log(luckyNumYesterday);
    localStorage.setItem("luckyYes", luckyNumYesterday);
});

// gets tomorrow's horoscope
var promise3 = fetch(queryHoroscopeTomorrow, {method: 'POST'}).then(function (response) {
    return response.json();
}).then(function (json) { // displays that data on the page
    var horoscopeDescriptionT = document.querySelector('#horo-DescriptionT');
    var headlineT = document.querySelector('#headlineT');
    var moodT = document.querySelector('#moodT');
    moodT.textContent = "Mood: " + json.mood;
    horoscopeDescriptionT.textContent = json.description;
    const luckyNumTom = json.lucky_number;
    console.log(luckyNumTom);
    localStorage.setItem("luckyTom", luckyNumTom);
});
// gets the stored lucky number data from the horoscope API and guarantees a number less than 7 using the remainder

// gets the data on the top trending crypto
function fetchCrypto () {
    fetch(queryCrypto).then(function (response) {
      return response.json();
  }).then(function (json) {
      let coins = json.coins;
      console.log(coins);
      console.log(arrayPosToday);
      let luckyCrypto = coins[arrayPosToday].item.name;
      let price = coins[arrayPosToday].item.price_btc;
      let rank = coins[arrayPosToday].item.market_cap_rank;
      let cryptoIcon = coins[arrayPosToday].item.small
      // displays the data for "lucky" crypto based on lucky number
      cryptoNameEl.innerHTML = "The stars have chosen " + luckyCrypto + " as your lucky crypto."
      priceEl.innerHTML = price + " BTC"
      localStorage.setItem("todayPrice",price);
      rankEl.innerHTML = "#" + rank + " on the market rank"
      iconEl.setAttribute("src", cryptoIcon);
      // does the same thing using yesterday's lucky number
      let coins1 = json.coins;
      console.log(arrayPosYes);
      let luckyCrypto1 = coins1[arrayPosYes].item.name;
      let price1 = coins1[arrayPosYes].item.price_btc;
      let rank1 = coins1[arrayPosYes].item.market_cap_rank;
      let cryptoIcon1 = coins1[arrayPosYes].item.small
      cryptoNameElY.innerHTML = "The stars chose " + luckyCrypto1 + ";" + " " + "did you follow their guidance?"
      priceElY.innerHTML = price1 + " BTC"
      rankElY.innerHTML = "#" + rank1 + " on the market rank"
      iconElY.setAttribute("src", cryptoIcon1);
      let coins2 = json.coins;
      console.log(arrayPosTom);
      let luckyCrypto2 = coins2[arrayPosTom].item.name;
      let price2 = coins2[arrayPosTom].item.price_btc;
      let rank2 = coins2[arrayPosTom].item.market_cap_rank;
      let cryptoIcon2 = coins2[arrayPosTom].item.small
      cryptoNameElT.innerHTML = "The stars have chosen " + luckyCrypto2 + ". " + "Will you follow your destiny?"
      priceElT.innerHTML = price2 + " BTC"
      rankElT.innerHTML = "#" + rank2 + " on the market rank"
      iconElT.setAttribute("src", cryptoIcon2);
      localStorage.setItem("compare", luckyCrypto)
  });
}
var arrayPosToday = (localStorage.getItem("luckyToday")) % 7;
var arrayPosYes = (localStorage.getItem("luckyYes")) % 7;
var arrayPosTom = (localStorage.getItem("luckyTom")) % 7;
Promise.all([promise1, promise2, promise3])
.then(function(data) {
  fetchCrypto();
})

//gets historical data on your lucky crypto
console.log(localStorage.getItem("compare"));
var yesterday = dayjs().subtract(1,"day").format('DD-MM-YYYY');
console.log(yesterday);
var yesterdayCryptoURL = "https://api.coingecko.com/api/v3/coins/" + localStorage.getItem("compare").toLowerCase() +"/history?date="+yesterday+"&localization=false";
fetch(yesterdayCryptoURL).then(function(response){
    return response.json();
}).then(function (json) {
    console.log(json);
 console.log(json.market_data.current_price.btc);
 var yesterdayCryptoPrice = json.market_data.current_price.btc;
 var modalContent = document.querySelector("#modal-text");
 console.log(modalContent);
 modalContent.textContent = " But really, how lucky are you? Yesterday's price was " + yesterdayCryptoPrice + " and today's is " + localStorage.getItem("todayPrice");


   var number = localStorage.getItem("todayPrice")-yesterdayCryptoPrice;
    console.log(number);



});
//this code is copied directly from Bulma for use with their modals
document.addEventListener('DOMContentLoaded', () => {
    // Functions to open and close a modal
    function openModal($el) {
      $el.classList.add('is-active');
    }
  
    function closeModal($el) {
      $el.classList.remove('is-active');
    }
  
    function closeAllModals() {
      (document.querySelectorAll('.modal') || []).forEach(($modal) => {
        closeModal($modal);
      });
    }
  
    // Add a click event on buttons to open a specific modal
    (document.querySelectorAll('.js-modal-trigger') || []).forEach(($trigger) => {
      const modal = $trigger.dataset.target;
      const $target = document.getElementById(modal);
  
      $trigger.addEventListener('click', () => {
        openModal($target);
      });
    });
  
    // Add a click event on various child elements to close the parent modal
    (document.querySelectorAll('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button') || []).forEach(($close) => {
      const $target = $close.closest('.modal');
  
      $close.addEventListener('click', () => {
        closeModal($target);
      });
    });
  
    // Add a keyboard event to close all modals
    document.addEventListener('keydown', (event) => {
      const e = event || window.event;
  
      if (e.keyProperty === 27) { // Escape key
        closeAllModals();
      }
    });
  });