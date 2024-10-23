const switchButton = document.getElementById('switchmode');
const body = document.body;

if (localStorage.getItem('mode') === 'dark') {
    body.classList.add('darkmode');
} else {
    body.classList.add('lightmode');
}
switchButton.addEventListener('click', () => {
    if (body.classList.contains('lightmode')) {
        body.classList.remove('lightmode');
        body.classList.add('darkmode');
        localStorage.setItem('mode', 'dark');
    } else {
        body.classList.remove('darkmode');
        body.classList.add('lightmode');
        localStorage.setItem('mode', 'light');
    }
});