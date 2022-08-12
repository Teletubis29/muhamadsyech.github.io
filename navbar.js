var menu = document.querySelector('#menu-icon');
var navbar = document.querySelector('.navbar');


menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

const sr = ScrollReveal ({
    distance : '80px',
    duration : 2800,
    reset : true
})

sr.reveal ('.text',{delay:300, origin:'left'});
sr.reveal ('.social',{delay:300, origin:'bottom'});
sr.reveal ('.textme2',{delay:300, origin:'left'});
sr.reveal ('.video',{delay:100, origin:'left'});
sr.reveal ('.github a',{delay:200, origin:'bottom'});



