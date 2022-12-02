var queryHoroscope ='https://aztro.sameerkumar.website/?sign=aries&day=today';
fetch(queryHoroscope, {
    method: 'POST'
})
.then(response => response.json())
.then(json => {
    const date = json.current_date;
    console.log(date);
});


var queryCrypto = "https://api.coingecko.com/api/v3/ping"
fetch(queryCrypto) 
.then(response => console.log(response.json()));
