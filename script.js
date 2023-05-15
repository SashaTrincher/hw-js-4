const block = document.querySelector('.event-container');
const toggle = document.querySelector('.click-event');
const blockText = document.querySelector('.inactive');
const mainBlock = document.querySelector('.main');

toggle.addEventListener('click', () => {
    if (block.className === 'event-container') {
        block.classList.add('active');
        mainBlock.classList.add('active');
        blockText.classList.replace('inactive', 'active');
        toggle.classList.add('active');
    } else {
        block.classList.remove('active');
        toggle.classList.remove('active');
        blockText.classList.replace('active', 'inactive');
        mainBlock.classList.remove('active');
    };
});