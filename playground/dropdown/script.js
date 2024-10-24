const imgs = document.querySelectorAll('.dropdown a');
// console.log(imgs);

imgs.forEach((img) => {
    img.addEventListener('mouseover', (e) => {
        console.log(e.currentTarget.querySelector('svg'));
        e.currentTarget.querySelector('svg').style.fill = 'white';
    });
});

imgs.forEach((img) => {
    img.addEventListener('mouseout', (e) => {
        console.log(e.currentTarget.querySelector('svg'));
        e.currentTarget.querySelector('svg').style.fill = '#434343';
    });
});
