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


ariesFormEl.addEventListener('click', mainInformation);
aquariusFormEl.addEventListener('click', mainInformation);
cancerFormEl.addEventListener('click', mainInformation);
capricornFormEl.addEventListener('click', mainInformation);
geminiFormEl.addEventListener('click', mainInformation);
leoFormEl.addEventListener('click', mainInformation);
libraFormEl.addEventListener('click', mainInformation);
piscesFormEl.addEventListener('click', mainInformation);
sagittariusFormEl.addEventListener('click', mainInformation);
scorpioFormEl.addEventListener('click', mainInformation);
taurusFormEl.addEventListener('click', mainInformation);
virgoFormEl.addEventListener('click', mainInformation);

function mainInformation(event) {
    event.preventDefault();
    var button = event.target;
    var zodiac = button.getAttribute("data-zodiac")
    localStorage.setItem("sign", zodiac);

    console.log("This was clicked: ", zodiac);

    window.location = "APIdisplay.html";

    // redirect to next page WITH the zodiac as a query parameter

}