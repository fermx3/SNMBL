var menuLogo = document.querySelector(".menu-logo");
var menuButton = document.querySelector(".menu-button");
var menuModal = document.querySelector(".menu-modal");
var menuCloseButton = document.querySelector(".close-icon");
var listItems = document.querySelectorAll(".main-menu > ul > li");

///////// MENU FUNCTIONS /////////////////
//Open Menu
listItems.forEach(function (item, index) {
  var delayOfAnimation = 0.1 * (1 + index) + "s";
  item.style.animationDelay = delayOfAnimation;
});

menuButton.addEventListener("click", function () {
  menuModal.classList.add("menu-active");
  menuButton.classList.remove("intro-animation-r");
  menuButton.classList.add("menu-btn-active");

  for (const item of listItems) {
    item.classList.remove("outro-animation-l");
    item.classList.add("intro-animation-l");
  }
});

//Close Menu
var closeMenu = function () {
  for (const item of listItems) {
    item.classList.remove("intro-animation-l");
    item.classList.add("outro-animation-l");
  }

  menuModal.classList.add("outro-animation-r");

  Promise.all(
    menuModal.getAnimations().map(function (animation) {
      return animation.finished;
    })
  ).then(function () {
    menuModal.classList.remove("menu-active", "outro-animation-r");
    menuButton.classList.remove("menu-btn-active");
    menuButton.classList.add("intro-animation-r");
  });
};

menuCloseButton.addEventListener("click", closeMenu);
menuLogo.addEventListener("click", closeMenu);
// listItems.forEach(function (item) {
//   item.addEventListener("click", closeMenu);
// });

///////////////Horizontal Scrolling ///////////////
gsap.registerPlugin(ScrollTrigger);
let sections = gsap.utils.toArray(".horizontal-section");

let scrollTween = gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".horizontal-container",
    pin: true,
    scrub: 1,
    // base vertical scrolling on how wide the container is so it feels more natural.
    snap: false,
    end: () =>
      "+=" + document.querySelector(".horizontal-container").offsetWidth,
  },
});

sections.forEach((sct, i) => {
  ScrollTrigger.create({
    trigger: sct,
    start:
      "top top-=" +
      (sct.offsetLeft - window.innerWidth / 2) *
        (document.querySelector(".horizontal-container").offsetWidth /
          (sct.offsetWidth * (sections.length - 1))),
    end:
      "+=" +
      sct.offsetWidth *
        (document.querySelector(".horizontal-container").offsetWidth /
          (sct.offsetWidth * (sections.length - 1))),
    toggleClass: { targets: sct, className: "active" },
  });
});

document.querySelectorAll(".main-menu > ul > li > a").forEach((element) => {
  element.addEventListener("click", function () {
    const id = this.getAttribute("href").split("#")[1];

    gsap.to(window, {
      scrollTo:
        document.getElementById(id).offsetLeft *
        (document.querySelector(".horizontal-container").offsetWidth /
          (document.querySelector(".horizontal-container").offsetWidth -
            window.innerWidth)),
      duration: 2,
    });

    closeMenu();
  });
});

///////////////// PORTADA TITULO //////////////
class TxtRotate {
  constructor(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = "";
    this.tick();
    this.isDeleting = false;
  }
  tick() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

    var that = this;
    var delta = 50 - Math.random() * 100; //Writing Speed

    if (this.isDeleting) {
      delta /= 2;
    }

    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }

    setTimeout(function () {
      that.tick();
    }, delta);
  }
}

window.onload = function () {
  var elements = document.getElementsByClassName("txt-rotate");
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute("data-rotate");
    var period = elements[i].getAttribute("data-period");
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML =
    ".wrap:after { content: '|'; animation: cursor-blink 2s ease 0s infinite normal forwards; }";
  document.body.appendChild(css);
};

//////////////// TRIM TRABAJO DESCRIPTONS ON MOBILE ////////////////
var cardDescription = document.querySelectorAll(".card-desc");


if (window.matchMedia("(max-width: 767px)").matches) {
  cardDescription.forEach(function (description) {
    var newTrimedString = description.innerText.substring(0, 50) + "...";
    description.innerText = newTrimedString;
  });
}
