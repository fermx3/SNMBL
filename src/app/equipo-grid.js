export function equipoGrid() {
  const equipoGrid = document.getElementById('equipo-grid');

  const equipo = [
    {
      photo: 'src/images/equipo/cielo-mejia-directora-audiovisual.png',
      name: 'Cielo Mejía',
      desc: 'Directora de Audiovisual',
    },
    {
      photo: 'src/images/equipo/omar-ramirez-director-de-arte.png',
      name: 'Omar Ramirez',
      desc: 'Director de Arte',
    },
    {
      photo: 'src/images/equipo/diego-ceballos-director-de-estrategia.png',
      name: 'Diego Ceballos',
      desc: 'Director de Estrategia',
    },
    {
      photo: 'src/images/equipo/silueta-1.jpg',
      name: 'Juanchi Zamudio',
      desc: 'Director Creativo',
    },
  ];

  equipo.forEach((member) => {
    const divMember = document.createElement('div');
    divMember.innerHTML = `
    <img
      src=${member.photo}
      alt=${member.name} ${member.desc}
      class="profile-pic"
    />
    <div class="profile-details">
      <h3 class="profile-name">${member.name}</h3>
      <p class="profile-desc">${member.desc}</p>
    </div>
    `;
    divMember.className = 'profile';
    equipoGrid.appendChild(divMember);
  });
}
