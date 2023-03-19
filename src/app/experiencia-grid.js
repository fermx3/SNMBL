export function ExperienciaGrid() {
  const experienciaGrid = document.getElementById('experiencia-grid');

  const brands = [
    {
      name: 'danone',
    },
    {
      name: 'quaker',
    },
    {
      name: 'kelloggs',
    },
    {
      name: 'modelo',
    },
    {
      name: 'lala',
    },
    {
      name: 'la-costena',
    },
    {
      name: 'washington',
    },
    {
      name: 'doritos',
    },
    {
      name: 'crackets',
    },
    {
      name: '7up',
    },
    {
      name: 'nike',
    },
    {
      name: 'nestle',
    },
  ];

  brands.forEach((brand) => {
    const brandLogo = document.createElement('div');
    brandLogo.innerHTML = `
    <img src="src/images/brands/${brand.name}.png" alt=${brand.name} />
      `;
    brandLogo.className = 'brand';
    experienciaGrid.appendChild(brandLogo);
  });
}
