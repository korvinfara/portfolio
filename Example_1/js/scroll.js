const sliderPlanets = document.querySelector(".slider.planets");
const sliderPlanetsOrbit = document.querySelector(".slider.planets .orbit");
let sliderPlanetsOrbitRotate = 0;
const sliderPlanetsPlanet = document.querySelectorAll(".slider.planets .planet");
const sliderPlanetsPlanetRotateX = -90;
let sliderPlanetsPlanetRotateY = 360;
const sliderPlanetsPlanetRotateZ = 0;
const sliderPlanetsButtons = document.querySelectorAll(".slider-button");


sliderPlanetsButtons.forEach(button => button.addEventListener('click', () => {
    sliderPlanetsButtons.forEach(button => sliderPlanets.classList.remove(button.getAttribute('data-active-class')));
    sliderPlanets.classList.add(button.getAttribute('data-active-class'));
    sliderPlanetsOrbitRotate = sliderPlanetsOrbitRotate - (360 / sliderPlanetsButtons.length);
    sliderPlanetsOrbit.style.transform = 'rotate(' + (sliderPlanetsOrbitRotate - 360 / sliderPlanetsButtons.length) + 'deg)';
    sliderPlanetsPlanetRotateY = sliderPlanetsPlanetRotateY - (360 / sliderPlanetsButtons.length);
    sliderPlanetsPlanet.forEach( planet => {
        planet.style.transform = 'rotateX(' + sliderPlanetsPlanetRotateX + 'deg) rotateY(' + (sliderPlanetsPlanetRotateY - (360 / sliderPlanetsButtons.length)) + 'deg) rotateZ(' + sliderPlanetsPlanetRotateZ + 'deg)'
    });

}));

let icons = [];

const recalculateActiveIcons = () => {
    const windowTop = 0; //window.scrollY; // $window.scrollTop()
    const windowBottom = window.innerHeight; // windowTop + $window.height()

    for (let i = 0; i < icons.length; ++i) {
        const icon = icons[i];
        const elRect = icon.getBoundingClientRect();

        if ((elRect.bottom >= windowTop && elRect.top < windowBottom)) {
            if (!icon.classList.contains('checked')) {
                icon.classList.add('checked');
            }
        }
    }
}

const initPage = () => {
    icons = document.querySelectorAll('.animated');
    recalculateActiveIcons();
}

const init = () => {
    document.addEventListener('scroll', recalculateActiveIcons)
    initPage();
}

init(initPage);