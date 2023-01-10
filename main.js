let tg = window.Telegram.WebApp


tg.expand()

const { first_name, last_name, username } = window.Telegram.WebApp.initDataUnsafe.user;


let usercard = document.getElementById("usercard")

usercard.innerHTML = first_name