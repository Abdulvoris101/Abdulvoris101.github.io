let tg = window.Telegram.WebApp;
tg.expand();

tg.MainButton.textColor = '#FFFFFF';
tg.MainButton.color = '#2cab37';

let user = document.getElementById('user');
let item = "Worked";

user.innerText = `${tg.initDataUnsafe?.user?.first_name} - FirstName`;


Telegram.WebApp.onEvent("mainButtonClicked", function() {
    this.sendData(item);
})

