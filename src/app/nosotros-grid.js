export function nosotrosGrid() {
  const nosostrosGrid = document.getElementById('nosotros-grid');

  const nosotrosList = [
    {
      title: '¿EN QUÉ CREEMOS?',
      desc: 'Creemos en el poder de las grandes ideas para transformar el mundo.',
    },
    {
      title: '¿POR QUÉ EXISTIMOS?',
      desc: 'Para inspirar a nuestros partners a transformar el mundo y crecer su negocio.',
    },
    {
      title: '¿NUESTRA VISIÓN?',
      desc: 'Convertirnos en la agencia boutique más creativa, fuerte y emocionante.',
    },
    {
      title: '¿NUESTRO COMPROMISO?',
      desc: 'Generar grandes ideas con grandes resultados. Siempre.',
    },
  ];

  nosotrosList.forEach((item) => {
    const listItem = document.createElement('div');
    listItem.innerHTML = `
    <h4 class="subtitle">${item.title}</h4>
    <p>${item.desc}</p>
        `;
    nosostrosGrid.appendChild(listItem);
  });
}
