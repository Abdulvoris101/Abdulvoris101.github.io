let tg = window.Telegram.WebApp

const queryString = window.location.pathname;

tg.expand()



let usercard = document.getElementById("usercard")

if (queryString == '/form') {
    usercard.innerHTML = 'FORM'
} else if (queryString == '') {
    usercard.innerHTML = 'HOME'
}   

