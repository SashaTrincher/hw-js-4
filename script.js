const block = document.querySelector('.event-container');
const toggle = document.querySelector('.click-event');
const blockText = document.querySelector('.inactive');
const mainBlock = document.querySelector('.main');

toggle.addEventListener('click', () => {
    if (block.className === 'event-container') {
        block.classList.add('active');
    } else {
        block.classList.remove('active');
    };
});

toggle.addEventListener('click', () => {
    if (toggle.className === 'click-event') {
        toggle.classList.add('active');
    } else {
        toggle.classList.remove('active');
    };
});

toggle.addEventListener('click', () => {
    if (blockText.className === 'inactive') {
        blockText.classList.replace('inactive', 'active');
    } else {
        blockText.classList.replace('active', 'inactive');
    };
});

toggle.addEventListener('click', () => {
    if (mainBlock.className === 'main') {
        mainBlock.classList.add('active');
    } else {
        mainBlock.classList.remove('active');
    };
});