import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { Draggable } from 'gsap/Draggable';

export function gsapUtils() {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, Draggable);
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

  ///HORIZONTAL SCROLL///
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

  ///ANIMATIONS///
  gsap.to('.animate-r-l-0', {
    x: -100,
    opacity: 1,
    ease: 'ease',
    scrollTrigger: {
      trigger: '.animate-r-l-0',
      containerAnimation: scrollTween,
      start: 'center 80%',
      end: 'center 20%',
      scrub: true,
    },
  });

  gsap.to('.animate-b-t', {
    y: -40,
    opacity: 2,
    ease: 'none',
    scrollTrigger: {
      trigger: '.animate-b-t',
      containerAnimation: scrollTween,
      start: 'center 80%',
      end: 'center 20%',
      scrub: true,
    },
  });

  gsap.to('.animate-t-b', {
    y: 40,
    opacity: 4,
    ease: 'none',
    scrollTrigger: {
      trigger: '.animate-t-b',
      containerAnimation: scrollTween,
      start: 'center 80%',
      end: 'center 20%',
      scrub: true,
    },
  });

  gsap.to('.animate-r-l', {
    x: -40,
    opacity: 4,
    ease: 'none',
    scrollTrigger: {
      trigger: '.animate-r-l',
      containerAnimation: scrollTween,
      start: 'center 80%',
      end: 'center 20%',
      scrub: true,
    },
  });

  gsap.to('.animate-b-t-2', {
    y: 40,
    opacity: 2,
    ease: 'none',
    scrollTrigger: {
      trigger: '.animate-b-t-2',
      containerAnimation: scrollTween,
      start: 'center 80%',
      end: 'center 20%',
      scrub: true,
    },
  });

  gsap.to('.animate-r-l-1', {
    x: -40,
    opacity: 4,
    ease: 'none',
    scrollTrigger: {
      trigger: '.animate-r-l-1',
      containerAnimation: scrollTween,
      start: 'center 80%',
      end: 'center 20%',
      scrub: true,
    },
  });

  gsap.to('.animate-b-t-3', {
    y: 40,
    opacity: 2,
    ease: 'none',
    scrollTrigger: {
      trigger: '.animate-r-l-3',
      containerAnimation: scrollTween,
      start: 'center 80%',
      end: 'center 20%',
      scrub: true,
    },
  });

  gsap.to('.animate-r-l-3', {
    x: -40,
    opacity: 2,
    ease: 'none',
    scrollTrigger: {
      trigger: '.animate-r-l-3',
      containerAnimation: scrollTween,
      start: 'center 80%',
      end: 'center 20%',
      scrub: true,
    },
  });

  gsap.to('.animate-t-b-4', {
    y: 60,
    opacity: 3,
    ease: 'none',
    scrollTrigger: {
      trigger: '.animate-t-b-4',
      containerAnimation: scrollTween,
      start: 'center 80%',
      end: 'center 20%',
      scrub: true,
    },
  });

  gsap.to('.animate-b-t-4', {
    y: -60,
    opacity: 3,
    ease: 'none',
    scrollTrigger: {
      trigger: '.animate-b-t-4',
      containerAnimation: scrollTween,
      start: 'center 80%',
      end: 'center 20%',
      scrub: true,
    },
  });
}
