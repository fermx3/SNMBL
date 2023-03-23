import cieloMejia from '../assets/images/equipo/cielo-mejia-directora-audiovisual.png';
import omarRamirez from '../assets/images/equipo/omar-ramirez-director-de-arte.png';
import diegoCeballos from '../assets/images/equipo/diego-ceballos-director-de-estrategia.png';
import juachiZamudio from '../assets/images/equipo/silueta-1.jpg';

export function equipoGrid() {
  const equipoGrid = document.getElementById('equipo-grid');

  const equipo = [
    {
      photo: cieloMejia,
      name: 'Cielo Mejía',
      desc: 'Directora de Audiovisual',
    },
    {
      photo: omarRamirez,
      name: 'Omar Ramirez',
      desc: 'Director de Arte',
    },
    {
      photo: diegoCeballos,
      name: 'Diego Ceballos',
      desc: 'Director de Estrategia',
    },
    {
      photo: juachiZamudio,
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
