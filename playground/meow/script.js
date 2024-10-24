console.log('hello world');

function modal() {
    const open_btn = document.querySelector('.btn');
    const modal = document.querySelector('.modal');
    const close_btn = document.querySelector('.close-btn');
    const overlay = document.querySelector('.overlay');

    open_btn.addEventListener('click', () => {
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');
    });

    close_btn.addEventListener('click', () => {
        modal.classList.add('hidden');
        overlay.classList.add('hidden');
    });
}

modal();
