
if (window.hasJoke) {
    const title = document.getElementById('main-title');
    if (title) title.style.display = 'none';
}

const toggleBtn = document.getElementById('toggle-original');
if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
        const jokePl = document.getElementById('joke-pl');
        const jokeEn = document.getElementById('joke-en');

        if (jokeEn.style.display === 'none') {
            jokePl.style.display = 'none';
            jokeEn.style.display = 'flex';
            toggleBtn.innerText = 'Zobacz tłumaczenie';
        } else {
            jokePl.style.display = 'flex';
            jokeEn.style.display = 'none';
            toggleBtn.innerText = 'Złe tłumaczenie? Zobacz oryginał';
        }
    });
}
