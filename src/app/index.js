import { gsapAnimations } from './utils/gsap-animations';
import { horizontalScroll } from './utils/horizontal-scrolling';
import { animateTitle } from './titulo';
import { openMenu, closeMenu } from './menu';
import { NosotrosGrid } from './nosotros-grid';
import { EquipoGrid } from './equipo-grid';
import { ExperienciaGrid } from './experiencia-grid';

gsapAnimations();
horizontalScroll();
animateTitle();
openMenu();
closeMenu();
NosotrosGrid();
EquipoGrid();
ExperienciaGrid();
