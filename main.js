let tg = window.Telegram.WebApp

const { first_name, last_name, username } = window.Telegram.WebApp.initDataUnsafe.user;

tg.expand()

let usercard = document.getElementById("usercard")

usercard.innerHTML = first_name