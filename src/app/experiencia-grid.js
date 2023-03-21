import danone from '../assets/images/brands/danone.png';
import quaker from '../assets/images/brands/quaker.png';
import kelloggs from '../assets/images/brands/kelloggs.png';
import modelo from '../assets/images/brands/modelo.png';
import lala from '../assets/images/brands/lala.png';
import laCostena from '../assets/images/brands/la-costena.png';
import washington from '../assets/images/brands/washington.png';
import doritos from '../assets/images/brands/doritos.png';
import crackets from '../assets/images/brands/crackets.png';
import sevenUp from '../assets/images/brands/7up.png';
import nike from '../assets/images/brands/nike.png';
import nestle from '../assets/images/brands/nestle.png';

export function experienciaGrid() {
  const experienciaGrid = document.getElementById('experiencia-grid');

  const brands = [
    {
      name: 'danone',
      image: danone,
    },
    {
      name: 'quaker',
      image: quaker,
    },
    {
      name: 'kelloggs',
      image: kelloggs,
    },
    {
      name: 'modelo',
      image: modelo,
    },
    {
      name: 'lala',
      image: lala,
    },
    {
      name: 'la-costena',
      image: laCostena,
    },
    {
      name: 'washington',
      image: washington,
    },
    {
      name: 'doritos',
      image: doritos,
    },
    {
      name: 'crackets',
      image: crackets,
    },
    {
      name: '7up',
      image: sevenUp,
    },
    {
      name: 'nike',
      image: nike,
    },
    {
      name: 'nestle',
      image: nestle,
    },
  ];

  brands.forEach((brand) => {
    const brandLogo = document.createElement('div');
    brandLogo.innerHTML = `
    <img src=${brand.image} alt=${brand.name} />
      `;
    brandLogo.className = 'brand';
    experienciaGrid.appendChild(brandLogo);
  });
}
