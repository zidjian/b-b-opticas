const buscador_toggle = document.querySelector('.buscadorToggle');
const buscador_cerrar = document.querySelector('.buscadorMobil-cerrar');
const buscador_mobil = document.querySelector('.buscadorMobil');

const toggleMenu = () => {
    buscador_mobil.classList.toggle('activado');
};

buscador_toggle.addEventListener('click', toggleMenu);

buscador_cerrar.addEventListener('click', toggleMenu);