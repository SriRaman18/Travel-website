const togglebtn = document.querySelector(".toggle-btn");
const video = document.getElementById("video-file");
const playbtn = document.querySelector(".video-btn");
const playicon = document.querySelector(".play-icon");

const ali = document.querySelectorAll(".a-li");

const submenu = document.querySelector(".sub-menu");
const closebtn = document.querySelector(".close-btn");

const mode = document.querySelector(".mode");
const menubtn = document.querySelector(".menu-btn");

const hiddenelements = document.querySelectorAll(".hidden");

const fullsections = document.querySelectorAll(".fullsection");

const obs = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0,
  }
);

hiddenelements.forEach((ele) => {
  obs.observe(ele);
});

// snavbar scroll function
function scrollHeader() {
  const nav = document.querySelector(".nav");
  // When the scroll is greater than 100 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 100) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
}
// console.log(togglebtn.classList);
// themeButton.classList.contains(iconTheme)
function switchtheme() {
  const moonicon = "fa-moon";
  if (togglebtn.classList.contains(moonicon)) {
    document.documentElement.setAttribute("data-theme", "dark");
    togglebtn.classList.replace("fa-moon", "fa-sun");
    localStorage.setItem("theme", "dark");
    mode.textContent = "light mode";
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    togglebtn.classList.replace("fa-sun", "fa-moon");
    localStorage.setItem("theme", "light");
    mode.textContent = "dark mode";
  }
}

const currentTheme = localStorage.getItem("theme");
if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);

  if (currentTheme === "dark") {
    togglebtn.classList.replace("fa-moon", "fa-sun");
    mode.textContent = "light mode";
  }
}
/////

function videohandle() {
  if (video.paused) {
    video.play();
    playicon.classList.replace("fa-circle-play", "fa-circle-pause");
    playbtn.setAttribute("title", "Pause");
  } else {
    video.pause();
    playicon.classList.replace("fa-circle-pause", "fa-circle-play");
    playbtn.setAttribute("title", "Play");
  }
}

function scrollUp() {
  const scrollUp = document.querySelector(".scroll-up-btn");
  // When the scroll is higher than 200 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if (this.scrollY >= 200) {
    scrollUp.classList.add("show-scroll");
  } else {
    scrollUp.classList.remove("show-scroll");
  }
}

function showsidenavbar() {
  submenu.classList.add("show");
}

function removesidenavbar() {
  submenu.classList.remove("show");
}

// highlighting the nav-header when scroll

function scrollactive() {
  const scrollY = window.pageYOffset;

  fullsections.forEach((section) => {
    const sectionheight = section.offsetHeight;

    const sectiontop = section.offsetTop - 50;

    sectionid = section.getAttribute("id");

    // console.log(sectionid);

    if (scrollY > sectiontop && scrollY <= sectiontop + sectionheight) {
      // console.log(`a-${sectionid}`);
      document.querySelector(`.a-${sectionid}`).classList.add("highlight");
    } else {
      document.querySelector(`.a-${sectionid}`).classList.remove("highlight");
    }
  });
}
//event listeners

window.addEventListener("scroll", scrollUp);

window.addEventListener("scroll", scrollHeader);

togglebtn.addEventListener("click", switchtheme);

playbtn.addEventListener("click", videohandle);

menubtn.addEventListener("click", showsidenavbar);

closebtn.addEventListener("click", removesidenavbar);

ali.forEach((tag) => {
  tag.addEventListener("click", removesidenavbar);
});

window.addEventListener("scroll", scrollactive);

// import Swiper from "swiper/swiper-bundle.esm.js";
// import "swiper/swiper-bundle.css";
// var swiper = new Swiper(".swiper", {
//   effect: "coverflow",
//   slidesPerView: "auto",
//   spaceBetween: 32,
//   centeredSlides: true,
//   grabCursor: true,
//   loop: true,
//   coverflowEffect: {
//     rotate: 0,

//   },
// });

// new

var swiper = new Swiper(".swiper", {
  effect: "coverflow",
  grabCursor: true,
  loop: true,
  spaceBetween: 32,

  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    depth: 100,
    // stretch: 50,
    // modifier: 5,
    // slideShadows: true,
  },
  // pagination: {
  //   el: ".swiper-pagination",
  // },
});
