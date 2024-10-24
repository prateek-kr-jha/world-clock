function addHoverEffect() {
    const imgs = document.querySelectorAll('.dropdown a');

    imgs.forEach((img) => {
        img.addEventListener('mouseover', (e) => {
            e.currentTarget.querySelector('svg').style.fill = 'white';
        });
    });

    imgs.forEach((img) => {
        img.addEventListener('mouseout', (e) => {
            e.currentTarget.querySelector('svg').style.fill = '#434343';
        });
    });
}

function addDropdownEffect() {
    const dropDownBtn = document.querySelector('.btn');
    const dropDown = document.querySelector('.dropdown');
    const toggleArrow = document.getElementById('arrow');
    const toggleDropdown = () => {
        dropDown.classList.toggle('show');
        toggleArrow.classList.toggle('arrow');
    };

    dropDownBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleDropdown();
    });
}

function addEffect() {
    addHoverEffect();
    addDropdownEffect();
}
addEffect();
