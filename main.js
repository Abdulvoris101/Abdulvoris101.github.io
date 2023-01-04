let tg = window.Telegram.WebApp
let user = document.getElementById('user')

function onClose () {
    user.innerHTML = tg.initDataUnsafe.user.first_name
    console.log(tg.initDataUnsafe.user.first_name);
    tg.close()
}