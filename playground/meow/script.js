console.log('hello world');
const open_btn = document.querySelector('.btn');
const modal = document.querySelector('.modal');
const close_btn = document.querySelector('.close-btn');
open_btn.addEventListener('click', () => {
    modal.classList.remove('hidden');
});

close_btn.addEventListener('click', () => {
    modal.classList.add('hidden');
});
