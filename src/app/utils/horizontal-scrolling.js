export function horizontalScroll() {
  gsap.registerPlugin(ScrollTrigger);
  let sections = gsap.utils.toArray('.horizontal-section');

  let scrollTween = gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: 'none',
    scrollTrigger: {
      trigger: '.horizontal-container',
      pin: true,
      scrub: 1,
      // base vertical scrolling on how wide the container is so it feels more natural.
      snap: 1 / (sections.length - 1),
      end: () =>
        '+=' + document.querySelector('.horizontal-container').offsetWidth,
    },
  });

  sections.forEach((sct, i) => {
    ScrollTrigger.create({
      trigger: sct,
      start:
        'top top-=' +
        (sct.offsetLeft - window.innerWidth / 2) *
          (document.querySelector('.horizontal-container').offsetWidth /
            (sct.offsetWidth * (sections.length - 1))),
      end:
        '+=' +
        sct.offsetWidth *
          (document.querySelector('.horizontal-container').offsetWidth /
            (sct.offsetWidth * (sections.length - 1))),
      toggleClass: { targets: sct, className: 'active' },
    });
  });

  document.querySelectorAll('.main-menu > ul > li > a').forEach((element) => {
    element.addEventListener('click', function () {
      const id = this.getAttribute('href').split('#')[1];

      gsap.to(window, {
        scrollTo:
          document.getElementById(id).offsetLeft *
          (document.querySelector('.horizontal-container').offsetWidth /
            (document.querySelector('.horizontal-container').offsetWidth -
              window.innerWidth)),
        duration: 2,
      });

      closeMenu();
    });
  });
}
