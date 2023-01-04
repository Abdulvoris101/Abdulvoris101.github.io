let tg = window.Telegram.WebApp;
let user = document.getElementById('user');

tg.expand();

user.innerText = `${tg.initDataUnsafe?.user?.username} - FirstName`;

