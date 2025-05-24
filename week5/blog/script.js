document.addEventListener('DOMContentLoaded', () => {
    const readMoreButton = document.querySelector('.read-more-btn');
    const hiddenText = document.querySelector('.hidden-text');

    readMoreButton.addEventListener('click', () => {
        const isHidden = hiddenText.style.display === 'none' || hiddenText.style.display === '';
        hiddenText.style.display = isHidden ? 'inline' : 'none';
        readMoreButton.textContent = isHidden ? 'Read Less' : 'Read More';
    });
});