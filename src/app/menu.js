const menuLogo = document.querySelector('.menu-logo');
const menuButton = document.querySelector('.menu-button');
const menuModal = document.querySelector('.menu-modal');
const menuCloseButton = document.querySelector('.close-icon');
const listItems = document.querySelectorAll('.main-menu > ul > li');

export function openMenu() {
  listItems.forEach(function (item, index) {
    var delayOfAnimation = 0.1 * (1 + index) + 's';
    item.style.animationDelay = delayOfAnimation;
  });

  menuButton.addEventListener('click', function () {
    menuModal.classList.add('menu-active');
    menuButton.classList.remove('intro-animation-r');
    menuButton.classList.add('menu-btn-active');

    for (const item of listItems) {
      item.classList.remove('outro-animation-l');
      item.classList.add('intro-animation-l');
    }
  });
}

export function closeMenu() {
  var closeMenu = function () {
    for (const item of listItems) {
      item.classList.remove('intro-animation-l');
      item.classList.add('outro-animation-l');
    }

    menuModal.classList.add('outro-animation-r');

    Promise.all(
      menuModal.getAnimations().map(function (animation) {
        return animation.finished;
      })
    ).then(function () {
      menuModal.classList.remove('menu-active', 'outro-animation-r');
      menuButton.classList.remove('menu-btn-active');
      menuButton.classList.add('intro-animation-r');
    });
  };

  menuCloseButton.addEventListener('click', closeMenu);
  menuLogo.addEventListener('click', closeMenu);
  // listItems.forEach(function (item) {
  //   item.addEventListener("click", closeMenu);
  // });
}
