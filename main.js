let tg = window.Telegram.WebApp
let user = document.getElementById('user')

user.innerHTML = `${tg.initDataUnsafe.user.first_name} - FirstName`

