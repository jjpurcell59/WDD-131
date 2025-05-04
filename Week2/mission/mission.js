const themeSelector = document.querySelector('#theme-selector');

function changeTheme() {
    const body = document.body;
    const logo = document.querySelector('footer img');

    if (themeSelector.value === 'dark') {
        body.classList.add('dark');
        logo.src = 'byui-logo_white.jpg';
    } else {
        body.classList.remove('dark');
        logo.src = 'byui-logo_blue.jpg';
    }
}

themeSelector.addEventListener('change', changeTheme);