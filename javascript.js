new Swiper(".swiper-container", {
  speed: 400,
  spaceBetween: 100,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  effect: "swipe",

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

// nav physics
const { styler, spring, listen, pointer, value } = window.popmotion;

const ball = document.querySelector(".brand");
const divStyler = styler(ball);
const ballXY = value({ x: 0, y: 0 }, divStyler.set);

listen(ball, "mousedown touchstart").start((e) => {
  e.preventDefault();
  pointer(ballXY.get()).start(ballXY);
});

listen(document, "mouseup touchend").start(() => {
  spring({
    from: ballXY.get(),
    velocity: ballXY.getVelocity(),
    to: { x: 0, y: 0 },
    stiffness: 200,
    mass: 2,
    damping: 10,
  }).start(ballXY);
});
