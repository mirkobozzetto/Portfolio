const swiper = new Swiper(".swiper", {
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
  keyboard: true,
  mousewheel: false,

  effect: "creative",
  creativeEffect: {
    prev: {
      // will set `translateZ(-400px)` on previous slides
      translate: [0, 0, -800],
    },
    next: {
      // will set `translateX(100%)` on next slides
      translate: ["100%", 0, 0],
    },
  },
  effect: "coverflow",
})

// ! Create the transition of logo
const btn = document.querySelector(".btn")

btn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  })
})

// ! cursor
const cursor = document.querySelector("#cursor")
let mouse = { x: 300, y: 300 }
let pos = { x: 0, y: 0 }
const speed = 0.1 // between 0 and 1

const updatePosition = () => {
  pos.x += (mouse.x - pos.x) * speed
  pos.y += (mouse.y - pos.y) * speed
  cursor.style.transform = "translate3d(" + pos.x + "px ," + pos.y + "px, 0)"
}

const updateCoordinates = (e) => {
  mouse.x = e.clientX
  mouse.y = e.clientY
}

window.addEventListener("mousemove", updateCoordinates)

function loop() {
  updatePosition()
  requestAnimationFrame(loop)
}

requestAnimationFrame(loop)
//
