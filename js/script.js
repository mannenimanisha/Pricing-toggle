const toggle = document.getElementById
('toggle');
const flexy = document.getElementById('flexy');

toggle.addEventListener('change', e => {
flexy.classList.toggle('show-monthly');
flexy.classList.toggle('show-annually');

});