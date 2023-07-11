"strict mode";

// Query Selectors//

/////////////////////////////////////////////
// body selectors //
////////////////////////////////////////////
// Header //
const header = document.querySelector(".header");
const nav = document.querySelector(".nav-container");

// CTA //
const ctaSocials = document.querySelector(".cta-social-container");
const socialNav = document.querySelector(".social-nav-container");

/////////////////////////////////////////////
// Buttons selectors //
////////////////////////////////////////////
// navigation buttons //
const navButtons = document.querySelector(".nav-container");

// Hero buttons //
const heroButtons = document.querySelector(".hero-button-container");

//  Prices Buttons //
const priceButtons = document.querySelectorAll(".price--btn");
///////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////
// MAIN FUNCTIONS //
////////////////////////////
// Sticky nav //
const stickyNav = function (entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) nav.classList.add("sticky");
  else nav.classList.remove("sticky");
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
});

headerObserver.observe(header);

///////////////////////////////////

// Sticky socials //
const stickySocials = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) socialNav.classList.add("sticky");
  else socialNav.classList.remove("sticky");
};

const ctaObserver = new IntersectionObserver(stickySocials, {
  root: null,
  threshold: 0,
});
ctaObserver.observe(ctaSocials);

///////////////////////////////////

// Smooth scroll for navigation //
navButtons.addEventListener("click", function (e) {
  e.preventDefault();

  if (e.target.classList.contains("main-nav-link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

////////////////////////////////////

///////////////////////////////////
// Smooth scroll for Hero buttons //
///////////////////////////////////

heroButtons.addEventListener("click", function (e) {
  e.preventDefault();

  if (e.target.classList.contains("hero-button")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

///////////////////////////////////

///////////////////////////////////
// Smooth scroll for prices buttons //
///////////////////////////////////

priceButtons.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector("#cta").scrollIntoView({ behavior: "smooth" });
  });
});

////////////////////////////////////
