document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav__menu');
    
    menuToggle.addEventListener('click', function(){
        navMenu.classList.toggle('active');
    });
    
    document.addEventListener('click', function(event) {
        const isClickInsideMenu = navMenu.contains(event.target);
        const isClickOnsideMenuToggle = menuToggle.contains(event.target);
        if (!isClickInsideMenu && !isClickOnsideMenuToggle){
            navMenu.classList.remove('active')
        }
    });
    });

    
    //ANIMACIONES
    window.sr = ScrollReveal();

    ScrollReveal().reveal();

    //header
    sr.reveal('.header-img',{
        duration: 1000,
        origin : 'left',
        distance : '-150px'
    });
    sr.reveal('.hero__title',{
        duration: 1500,
        origin : 'top',
        distance : '-150px',
        delay: 500,
    });
    sr.reveal('.hero__paragraph',{
        duration: 1500,
        origin : 'top',
        distance : '-150px',
        delay: 800,
    });
    sr.reveal('.hero__action',{
        duration: 2000,
        origin : 'top',
        distance : '-150px',
        delay: 1000,
    });


    //projects

    sr.reveal('.build-img',{
        duration: 1000,
        origin : 'rigth',
        distance : '-150px',
        delay: 800,
    });
    sr.reveal('.projects__title',{
        duration: 1500,
        origin : 'top',
        distance : '-150px',

        delay: 500,
    });
    sr.reveal('.projects__paragraph',{
        duration: 1500,
        origin : 'top',
        distance : '-150px',

        delay: 800,
    });

    sr.reveal('.uno',{
        duration: 1500,
        origin : 'top',
        distance : '-150px',

        delay: 1000,
    });
    sr.reveal('.dos',{
        duration: 1500,
        origin : 'top',
        distance : '-150px',
        delay: 1500,

    });
    sr.reveal('.tres',{
        duration: 1500,
        origin : 'top',
        distance : '-150px',
        delay: 2000,
    });


    //community
    sr.reveal('.commitment-img',{
        duration: 1000,
        origin : 'left',
        distance : '-150px',
        delay: 1500,
        delay: 500,
    });
    sr.reveal('.community__title',{
        duration: 1500,
        origin : 'top',
        distance : '-150px',
        delay: 500,

    });
    sr.reveal('.community__paragraph',{
        duration: 1500,
        origin : 'top',
        distance : '-150px',
        delay: 1000,
    });











