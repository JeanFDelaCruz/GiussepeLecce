"strict mode";
(function () {
  // Query Selectors//

  /////////////////////////////////////////////
  // body selectors //
  ////////////////////////////////////////////

  // GENERAL //
  const allSections = document.querySelectorAll(".section");
  // Header //
  const header = document.querySelector(".header");
  const nav = document.querySelector(".nav-container");
  const navList = document.querySelectorAll(".main-nav-list");
  const navContainer = document.querySelector(".nav-list-container");

  // Hero //
  const relatedBtns = document.querySelectorAll(".hero-lists");
  const relatedContainer = document.querySelector(".hero-list-container");
  const heroSlider = document.querySelectorAll(".hero-slider-images-container");

  // GALLERY //
  const galleryContainer = document.querySelector(".gallery-main-container");

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
  const heroRelatedBtns = document.querySelectorAll(".hero-list-button");

  //  Prices Buttons //
  const priceButtons = document.querySelectorAll(".price--btn");

  // MOBILE NAV BUTTON //
  const mobileButton = document.querySelector(".btn-mobile-nav");

  ///////////////////////////////////////////////////////////////////////////////////////////////////////

  const modalView = function () {};

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
  /*
  // Sticky socials //
  const stickySocials = function (entries) {
    const [entry] = entries;
    if (!entry.isIntersecting) socialNav.classList.add("sticky");
    else socialNav.classList.remove("sticky");
  };

  const ctaObserver = new IntersectionObserver(stickySocials, {
    root: null,
    threshold: 0.15,
  });
  ctaObserver.observe(ctaSocials);
  */
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

  ///////////////////////////////////
  // Menu Fade Animation //
  ///////////////////////////////////
  const handleHover = function (e) {
    if (e.target.classList.contains("main-nav-link")) {
      const link = e.target;
      const siblings = link
        .closest(".nav-container")
        .querySelectorAll(".main-nav-link");
      const logo = link.closest(".nav-container").querySelector("img");

      siblings.forEach((el) => {
        if (el !== link) el.style.opacity = this;
      });
      logo.style.opacity = this;
    }
  };

  nav.addEventListener("mouseover", handleHover.bind(0.3));
  nav.addEventListener("mouseout", handleHover.bind(1));

  ///////////////////////////////////
  // HERO slider component view //
  ///////////////////////////////////

  relatedContainer.addEventListener("click", function (e) {
    const clicked = e.target.closest(".hero-lists");

    if (!clicked) return;
    // Setting default class values to none
    relatedBtns.forEach((btn) => btn.classList.remove("hero--active"));
    heroSlider.forEach((img) =>
      img.classList.remove("hero-slider-images--active")
    );

    // Big hero images must be put here for buttons to remove the active class

    //Active Tab
    clicked.classList.add("hero--active");

    //Activate Hero Contents
    document
      .querySelector(`.hero-slider--${clicked.dataset.list}`)
      .classList.add("hero-slider-images--active");
  });

  ///////////////////////////////////

  ///////////////////////////////////
  // Prices Slider //
  ///////////////////////////////////

  const slider = function () {
    const slides = document.querySelectorAll(".slide");
    const btnLeft = document.querySelector(".button--prev");
    const btnRight = document.querySelector(".button--next");
    let slide = [];
    slides.forEach((s) => slide.push(s));
    let curSlide = 0;
    const maxSlide = slide.length;

    const activateSlide = function (slideIndex) {
      slides.forEach((s) => s.classList.remove("slide--active"));
      slides[slideIndex].classList.add("slide--active");
    };

    const nextSlide = function () {
      if (curSlide === maxSlide - 1) {
        curSlide = 0;
      } else {
        curSlide++;
      }
      activateSlide(curSlide);
    };

    const prevSlide = function () {
      if (curSlide === 0) {
        curSlide = maxSlide - 1;
      } else {
        curSlide--;
      }
      activateSlide(curSlide);
    };

    btnRight.addEventListener("click", nextSlide);
    btnLeft.addEventListener("click", prevSlide);
  };

  slider();

  ////////////////////////////////////////////////

  /*
  ///////////////////////////////////
  // Lazy Load Everything //
  ///////////////////////////////////

  const revealSection = function (entries, observer) {
    const [entry] = entries;

    if (!entry.isIntersecting) return;

    entry.target.classList.remove("section--hidden");
    observer.unobserve(entry.target);
  };

  const sectionObserver = new IntersectionObserver(revealSection, {
    root: null,
    threshold: 0.15,
  });

  allSections.forEach(function (section) {
    sectionObserver.observe(section);
    section.classList.add("section--hidden");
  });
  */

  ///////////////////////////////////
  // Nav button for mobile //
  ///////////////////////////////////

  mobileButton.addEventListener("click", function () {
    header.classList.toggle("nav-open");
  });

  // mobileButton.addEventListener("click", function (event) {
  //   if (event.target.closest(".header")) {
  //     // If the clicked element or any of its parents with the class 'header-child'
  //     // is found, the condition will be true
  //     header.classList.remove("nav-open");
  //   }
  // });
  ////////////////////////////////////

  ///////////////////////////////////
  // Load more portraits button //
  ///////////////////////////////////

  // Image container for each //
  const portraitContainer = document.getElementById("gallery-portrait");

  // This is the image container that holds the image //
  const portraits = document.querySelectorAll(".image-holder");

  // This is the image element //
  const portraitImage = document.querySelectorAll(".gallery-image");

  // Buttons querySelectors //
  const portraitButton = document.querySelector(".btn--portrait");

  // core function for setting up the click function

  // So here we set the images into an object so that We can set the content programatically
  // also because I dont know any server sided programming im doing this the oldschool way of doing it. If theres stuff
  // to be added just add that into here

  const portraitHolder = {
    image1: {
      imageUrl: "Portrait Photography/portrait-1.jpg",
      altTag:
        "A woman standing in white and blue stripe dress, standing in between bushes holder hear hands along her face.",
    },
    image2: {
      imageUrl: "Portrait Photography/portrait-2.jpg",
      altTag:
        "Two woman in luxurious dress standong behind each other, 1 leaning on a wall the other leaning on the other womans back",
    },
    image3: {
      imageUrl: "Portrait Photography/portrait-3.jpg",
      altTag:
        "blurred background in white and ared whilst the woman in the picture looks at small christmas light on her hand.",
    },
    image4: {
      imageUrl: "Portrait Photography/portrait-4.jpg",
      altTag:
        "A very neon theme with neon sign in pink luminous light, whilst a woman stands infront holding her self as if shes cold.",
    },
    image5: {
      imageUrl: "Portrait Photography/portrait-5.jpg",
      altTag:
        "A woman in beige and a straw hat almost the same color as the blurred building she is standing in front off.",
    },
    image6: {
      imageUrl: "Portrait Photography/portrait-6.jpg",
      altTag:
        "A woman in blue blouse looking at the camera whilst her finger is on her lips.",
    },
    image7: {
      imageUrl: "Portrait Photography/portrait-7.jpg",
      altTag:
        "A woman sitting along the stairs wearing long sleeve shirt in black and white outfit.",
    },
    image8: {
      imageUrl: "Portrait Photography/portrait-8.jpg",
      altTag:
        "A man and woman sitting on a laminated table, while the woman lays on the mans laps and both staring at the camera.",
    },
    image9: {
      imageUrl: "Portrait Photography/portrait-9.jpg",
      altTag:
        "A portrait picture of a woman in white background seen with clear brown eyes and a pircing showing just under her lip.",
    },
  };

  /*
  portraitButton.addEventListener("click", function (e) {
    portraitButton.classList.add("hidden--button");
    e.preventDefault();

    // set an empty array for the easier way of getting data into the DOM
    // we iterate over the object that we created container all the image url and alt tags
    // we get the values of the object in which we can iterate over to provide for the html template
    let images = [];
    const beginningLoad = 6;
    for (const [key, value] of Object.entries(portraitHolder)) {
      images.push({
        imageUrl: value.imageUrl,
        altTag: value.altTag,
      });
    }

    // here we get the data from images. which contains the key value pair of images url and its alt tag
    // the maximum page depends on the length of the object. if there is something to change it is to add more into that object
    // If i know server sided scripts then perhaps this whole thing will be different.
    let maxImagesPerLoad = images.length;

    //html is set to an empty "" string so that it can be changed as we iterate over the data and pushes into this array structure
    let html = "";
    for (let i = beginningLoad; i < maxImagesPerLoad; i++) {
      //just need to destructure this data here so we get the data we need to insert into the DOM. this is so that for each
      // images available we iterate through to get the html content down there to insert into the gallery container

      html += `
                <div class="image-holder">
                  <img
                    class="gallery-image"
                    src="${images[i].imageUrl}"
                    alt="${images[i].altTag}"
                  />
                </div>`;
    }
    portraitContainer.insertAdjacentHTML("beforeend", html);

    
    ///////////////////////////////////
    // Modal //
    ///////////////////////////////////
    // modal View
    // galleryContainer - for the holder of image gallery the whole thing
    const modal = document.querySelector(".modal");
    const closeModal = document.querySelector(".close-modal");
    const galleryImages = document.querySelectorAll(".gallery img");

    galleryImages.forEach(function (image) {
      image.addEventListener("click", function (e) {
        // Display Modal
        modal.style.display = "block";

        //Load the clicked image into the modal
        const modalImage = document.getElementById("modal-image");
        modalImage.src = e.target.src;
        modalImage.alt = e.target.alt;
      });
    });

    const closeModalFunction = function () {
      modal.style.display = "none";
    };

    closeModal.addEventListener("click", closeModalFunction);
    modal.addEventListener("click", closeModalFunction);
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeModalFunction();
    });
  });
  */
  ///////////////////////////////////
  // Load more Events button //
  ///////////////////////////////////

  //Selectors//
  /*
  const btnEvents = document.querySelector(".btn--events");
  const eventsContainer = document.getElementById("gallery-events");

  const eventsHolder = {
    image1: {
      imageUrl: "Event Photography/event-1.jpg",
      altTag: "A captured image of a woman just about to break dance.",
    },
    image2: {
      imageUrl: "Event Photography/event-2.jpg",
      altTag:
        "A guy dancing on stage followed by a rival dancer watching close by.",
    },
    image3: {
      imageUrl: "Event Photography/event-3.jpg",
      altTag: "Guy doing a hand stand",
    },
    image4: {
      imageUrl: "Event Photography/event-4.jpg",
      altTag:
        "Guy break dancing in the middle of spectators and rival dancers standing close by.",
    },
    image5: {
      imageUrl: "Event Photography/event-5.jpg",
      altTag:
        "A group of presenters holding a microphones and in the background a few people sitting down.",
    },
    image6: {
      imageUrl: "Event Photography/event-6.jpg",
      altTag: "an announcer talking to a man holding a trophy.",
    },
    image7: {
      imageUrl: "Event Photography/event-7.jpg",
      altTag: "A man doing a hand stand and crowd looking at him.",
    },
    image8: {
      imageUrl: "Event Photography/event-8.jpg",
      altTag: "A man dancing while the crowd cheer for him.",
    },
    image9: {
      imageUrl: "Event Photography/event-9.jpg",
      altTag:
        "A break dancing whilst the crowd watches with smiles on their face.",
    },
    image10: {
      imageUrl: "Event Photography/event-10.jpg",
      altTag:
        "A man doing a hand stand in the middle of the room and plenty of people watching him do so.",
    },
    image11: {
      imageUrl: "Event Photography/event-11.jpg",
      altTag: "A man doing a spin in the air.",
    },
    image12: {
      imageUrl: "Event Photography/event-12.jpg",
      altTag: "A man doing a headstand and holding himself still on a stage.",
    },
    image13: {
      imageUrl: "Event Photography/event-13.jpg",
      altTag:
        "On stage there is an announcer and a man in hoodie holding a trophy.",
    },
    image14: {
      imageUrl: "Event Photography/event-14.jpg",
      altTag: "A man doing an arm stand, while the crowd are in awe.",
    },
    image15: {
      imageUrl: "Event Photography/event-15.jpg",
      altTag:
        "a man break dancing in the middle of the stage in denim clothing.",
    },
    image16: {
      imageUrl: "Event Photography/event-16.jpg",
      altTag:
        "A man happily doing a headstand in a small stage surrounded by shrouding lights.",
    },
    image17: {
      imageUrl: "Event Photography/event-17.jpg",
      altTag:
        "A group of people standing together as they get their moment captured",
    },
    image18: {
      imageUrl: "Event Photography/event-18.jpg",
      altTag: "A spinning in whilst doing a handstand.",
    },
  };

  btnEvents.addEventListener("click", function (e) {
    e.preventDefault();
    btnEvents.classList.add("hidden--button");

    let images = [];
    for (const [key, value] of Object.entries(eventsHolder)) {
      images.push({
        imageUrl: value.imageUrl,
        altTag: value.altTag,
      });
    }
    const beginningLoad = 6;
    let maxImagesPerLoad = images.length;
    let html = "";
    for (let i = beginningLoad; i < maxImagesPerLoad; i++) {
      html += `
                <div class="image-holder">
                  <img
                    class="gallery-image"
                    src="${images[i].imageUrl}"
                    alt="${images[i].altTag}"
                  />
                </div>
`;
    }

    eventsContainer.insertAdjacentHTML("beforeend", html);

    ///////////////////////////////////
    // Modal //
    ///////////////////////////////////
    // modal View
    // galleryContainer - for the holder of image gallery the whole thing
    const modal = document.querySelector(".modal");
    const closeModal = document.querySelector(".close-modal");
    const galleryImages = document.querySelectorAll(".gallery img");

    galleryImages.forEach(function (image) {
      image.addEventListener("click", function (e) {
        // Display Modal
        modal.style.display = "block";

        //Load the clicked image into the modal
        const modalImage = document.getElementById("modal-image");
        modalImage.src = e.target.src;
        modalImage.alt = e.target.alt;
      });
    });

    const closeModalFunction = function () {
      modal.style.display = "none";
    };

    closeModal.addEventListener("click", closeModalFunction);
    modal.addEventListener("click", closeModalFunction);
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeModalFunction();
    });
  });
*/

  /*
  ///////////////////////////////////
  // Load more Products button //
  ///////////////////////////////////

  const productContainer = document.getElementById("gallery-products");
  const btnProducts = document.querySelector(".btn--product");

  const productHolder = {
    image1: {
      imageUrl: "Product Photography/product-1.jpg",
      altTag: "Clear liquid dripping into an electric cigarette.",
    },
    image2: {
      imageUrl: "Product Photography/product-2.jpg",
      altTag: "couple of electric cigarette coil floating in the air.",
    },
    image3: {
      imageUrl: "Product Photography/product-3.jpg",
      altTag: "a galaxy themed electric cigarette with a galaxy like shadow.",
    },
    image4: {
      imageUrl: "Product Photography/product-4.jpg",
      altTag:
        "A set of electric cigarette liquids placed in a row next to each other.",
    },
    image5: {
      imageUrl: "Product Photography/product-5.jpg",
      altTag: "electric cigarette liquid on a painted grass.",
    },
    image6: {
      imageUrl: "Product Photography/product-6.jpg",
      altTag:
        "red and black electric cigarette standing on the edge of a board",
    },
    image7: {
      imageUrl: "Product Photography/product-7.png",
      altTag:
        "An electric cigarette liquid on top of a machinery in blue and grey sprayed paint.",
    },
  };

  btnProducts.addEventListener("click", function (e) {
    e.preventDefault();
    btnProducts.classList.add("hidden--button");

    let images = [];
    for (const [key, value] of Object.entries(productHolder)) {
      images.push({
        imageUrl: value.imageUrl,
        altTag: value.altTag,
      });
    }
    const beginningLoad = 6;
    let maxImagesPerLoad = images.length;
    let html = "";
    for (let i = beginningLoad; i < maxImagesPerLoad; i++) {
      html += `
                <div class="image-holder">
                  <img
                    class="gallery-image"
                    src="${images[i].imageUrl}"
                    alt="${images[i].altTag}"
                  />
                </div>
              `;
    }

    productContainer.insertAdjacentHTML("beforeend", html);
    

    ///////////////////////////////////
    // Modal //
    ///////////////////////////////////
    // modal View
    // galleryContainer - for the holder of image gallery the whole thing
    const modal = document.querySelector(".modal");
    const closeModal = document.querySelector(".close-modal");
    const galleryImages = document.querySelectorAll(".gallery img");

    galleryImages.forEach(function (image) {
      image.addEventListener("click", function (e) {
        // Display Modal
        modal.style.display = "block";

        //Load the clicked image into the modal
        const modalImage = document.getElementById("modal-image");
        modalImage.src = e.target.src;
        modalImage.alt = e.target.alt;
      });
    });

    const closeModalFunction = function () {
      modal.style.display = "none";
    };

    closeModal.addEventListener("click", closeModalFunction);
    modal.addEventListener("click", closeModalFunction);
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeModalFunction();
    });
  });
  */
  ///////////////////////////////////
  // set Current Year //
  ///////////////////////////////////
  const yearEl = document.querySelector(".copyright-year");
  const currentYear = new Date().getFullYear();
  yearEl.textContent = currentYear;

  ///////////////////////////////////
  // Modal in the open  //
  ///////////////////////////////////
  // modal View
  // galleryContainer - for the holder of image gallery the whole thing
  const modal = document.querySelector(".modal");
  const closeModal = document.querySelector(".close-modal");
  const galleryImages = document.querySelectorAll(".gallery img");

  galleryImages.forEach(function (image) {
    image.addEventListener("click", function (e) {
      // Display Modal
      modal.style.display = "block";

      //Load the clicked image into the modal
      const modalImage = document.getElementById("modal-image");
      modalImage.src = e.target.src;
      modalImage.alt = e.target.alt;
    });
  });

  const closeModalFunction = function () {
    modal.style.display = "none";
  };

  closeModal.addEventListener("click", closeModalFunction);
  modal.addEventListener("click", closeModalFunction);
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeModalFunction();
  });
})();
