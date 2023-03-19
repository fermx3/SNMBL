import { gsapUtils } from './app/utils/gsap-utils';
import { animateTitle } from './app/titulo';
import { openMenu, closeMenu } from './app/menu';
import { nosotrosGrid } from './app/nosotros-grid';
import { equipoGrid } from './app/equipo-grid';
import { experienciaGrid } from './app/experiencia-grid';

import './styles/animations.css';
import './styles/main.css';

const menuCloseButton = document.querySelector('.close-icon');
const menuLogo = document.querySelector('.menu-logo');

gsapUtils();
animateTitle();
openMenu();
closeMenu();
nosotrosGrid();
equipoGrid();
experienciaGrid();

menuCloseButton.addEventListener('click', closeMenu);
menuLogo.addEventListener('click', closeMenu);
// listItems.forEach(function (item) {
//   item.addEventListener("click", closeMenu);
// });
