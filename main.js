let tg = window.Telegram.WebApp

const queryString = window.location.search;

tg.expand()


console.log(queryString);

let usercard = document.getElementById("usercard")

if (queryString == '?page=form/') {
    usercard.innerHTML = 'FORM'
} else {
    usercard.innerHTML = 'HOME'
}   

