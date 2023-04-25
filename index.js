                                       // SPEAKER SECTION!!!
const speakers = [
  {
      image : 'assets/speaker_01.png',
      title : 'Resource Person',
      person : 'Prof. Afolabi Tonye',
      post : 'Conference Chair & Keynote Speaker',
      add : 'Former Dean of the Faculty of Agricultural Technology, Al-Balqa Applied University, Jordan.'
  },
  {
      image : 'assets/speaker02.png',
      title : 'Resource Person',
      person : 'SohYeong Noh',
      post : 'Conference Chair',
      add : 'Director of Art Centre Nabi and a board member of CC Korea.'
  },
  {
      image : 'assets/speaker03.png',
      title : 'Resource Person',
      person : 'Lila Tretikov',
      post : 'Plenary Speaker',
      add : 'Former Dean of the Faculty of Agricultural Technology, Al-Balqa Applied University, Jordan.'
  },
  {
      image : 'assets/speaker04.png',
      title : 'Resource Person',
      person : 'Prof.Kilman Chon',
      post : 'Plenary Speaker',
      add : 'Dean of Faculty of Agro Based Industry Universiti Malaysia Kelantan Malaysia'
  },
  {
      image : 'assets/speaker05.png',
      title : 'Resource Person',
      person : 'Julia Leda',
      post : 'Conference Chair & Keynote Speaker',
      add : 'President of Young Pirates of Europe'
  },
  {
      image : 'assets/speaker06.png',
      title : 'Resource Person',
      person : 'Ryan Dyrud',
      post : 'Conference Chair & Keynote Speaker',
      add : 'Berkman Professor of Enterpreneurial Legal Studies'
  },
]

const resource = document.querySelector('#speaker-card');

for (let i = 0; i < speakers.length; i += 1) {
  resource.innerHTML += `
      <div class="speaker-cont ">
        <div class="speaker-img">
            <img src="${speakers[i].image}" alt="speaker1-img">
        </div>
        <div class="speaker-item">
          <div class="speaker-name">
            <p>${speakers[i].person}</p> 
            <span class="speaker-title">${speakers[i].post}</span>
          </div>
          <div class="speaker-add">
            <p>${speakers[i].add}</p>
          </div>
        </div>
      </div>
  `;
}

                                    // MOBILE MENU-LIST (HAMBURGER)


const menuIcon = document.querySelector('.ham-div');
const closeIcon = document.querySelector('.closeIcon');
const overlay = document.querySelector('.overlay');
const menu = document.querySelector('.menu-links');
const menuList = document.querySelectorAll('.menu-links a');
const { body } = document;

const displayMenu = () => {
  menuIcon.style.display = 'none';
  overlay.classList.remove('hidden');
  menu.style.display = 'flex';
  closeIcon.style.display = 'block'
  body.style.overflow = 'hidden';
}

menuIcon.addEventListener('click', () => {
  displayMenu();
} )




