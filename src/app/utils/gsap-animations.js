export function gsapAnimations() {
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
