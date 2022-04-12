import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});

const scrollToTopButton = document.getElementById("scrollToTop");
const burgerButton = document.querySelector(".page-header__burger");
const menu = document.querySelector(".page-header-nav");
const siteNav = document.querySelector(".site-navigation");
const downloadButton = document.querySelector(".btn--download");
const downloadIcon = downloadButton.querySelector(".download-arrow");

const handleScroll = () => {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    scrollToTopButton.style.display = "block";
  }
  else {
    scrollToTopButton.style.display = "none";
  }
};

const scrollToTop = () => {
  const distanceFromTop = document.documentElement.scrollTop || document.body.scrollTop;

  if (distanceFromTop > 0) {
    window.scrollTo(0, 0);
  }
};

function toggleMobileNav() {
  burgerButton.classList.toggle("active");
  menu.classList.toggle("active");
  body.classList.toggle("lock");
}

function closeNav() {
  body.classList.remove("lock");
  burgerButton.classList.remove("active");
  menu.classList.remove("active");
}

function animateDownloadButton() {
  downloadIcon.classList.add("animate-download");

  setTimeout(function() {
    downloadIcon.classList.remove("animate-download");
  }, 1000);
}

document.addEventListener("scroll", handleScroll);
scrollToTopButton.addEventListener("click", function(e) {
  e.preventDefault();
  scrollToTop();
});

burgerButton.addEventListener("click", toggleMobileNav);
siteNav.addEventListener("click", closeNav);
downloadButton.addEventListener("click", animateDownloadButton);
