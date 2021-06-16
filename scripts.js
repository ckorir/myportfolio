let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();

timeline
    .fromTo(".profileimg", { opacity: 0 }, { opacity: 1, duration: 4 })
    .fromTo(".profileimg", { x: 900 }, { x: 0, duration: 7 }, "-=8")
    .fromTo(".landingtext h1", { opacity: 0 }, { opacity: 1, duration: 5 }, "-=3")
    .fromTo(".landingtext h2", { x: -850 }, { x: 0, duration: 5 }, "-=6")
    .fromTo(".landingtext h3", { opacity: 0 }, { opacity: 1, duration: 5 }, "-=1")
    .fromTo(".card", { opacity: 0 }, { opacity: 1, duration: 7 }, "-=5");

