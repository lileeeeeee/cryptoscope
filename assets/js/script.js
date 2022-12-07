//gets all the buttons from index.html
var btns = document.querySelectorAll(".button");
//list of buttons
console.log(btns);
//puts an event listener on every button that directs you to the next page
btns.forEach(addListener);
function addListener(button) {
    button.addEventListener('click', function movePage () {
     window.location = "horoscopebuttons.html"   
    })
}







