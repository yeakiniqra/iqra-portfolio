function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Dark / light mode

const btn = document.getElementById("modeToggle");
const btn2 = document.getElementById("modeToggle2");
const themeIcons = document.querySelectorAll(".icon");
const currentTheme = localStorage.getItem("theme");

if (currentTheme === "dark") {
  setDarkMode();
}

btn.addEventListener("click", function () {
  setTheme();
});

btn2.addEventListener("click", function () {
  setTheme();
});

function setTheme() {
  let currentTheme = document.body.getAttribute("theme");

  if (currentTheme === "dark") {
    setLightMode();
  } else {
    setDarkMode();
  }
}

function setDarkMode() {
  document.body.setAttribute("theme", "dark");
  localStorage.setItem("theme", "dark");

  themeIcons.forEach((icon) => {
    icon.src = icon.getAttribute("src-dark");
  });
}

function setLightMode() {
  document.body.removeAttribute("theme");
  localStorage.setItem("theme", "light");

  themeIcons.forEach((icon) => {
    icon.src = icon.getAttribute("src-light");
  });
}




 gsap.from("#profile .section__pic-container", { opacity: 0, y: 50, duration: 1, delay: 0.5 });
 gsap.from("#profile .section__text", { opacity: 0, x: -50, duration: 1, delay: 0.8 });
 gsap.from("#profile #role", { opacity: 0, y: 20, duration: 1, delay: 1.2 });
 gsap.from("#profile .btn-container", { opacity: 0, y: 20, duration: 1, delay: 1.5 });
 gsap.from("#profile #socials-container", { opacity: 0, y: 20, duration: 1, delay: 1.8 });



 gsap.registerPlugin(ScrollTrigger);

  // Navigation animation
  gsap.from("#desktop-nav", {
    scrollTrigger: {
      trigger: "#desktop-nav",
      start: "top 80%",
      end: "bottom top",
      toggleActions: "play none none reverse",
    },
    opacity: 0,
    y: -50,
    duration: 1,
    ease: "power2.inOut",
  });

  // Theme Toggler animation
  gsap.from("#modeToggle", {
    scrollTrigger: {
      trigger: "#modeToggle",
      start: "top 80%",
      end: "bottom top",
      toggleActions: "play none none reverse",
    },
    opacity: 0,
    x: 50,
    duration: 1,
    ease: "power2.inOut",
  });

 // Animation for the image
 gsap.from(".about-pic", {
   scrollTrigger: {
     trigger: "#about", // Start animation when #about section enters the viewport
     start: "top 80%", // Start animation 80% from the top of the viewport
     end: "bottom top", // End animation when #about section leaves the viewport
     toggleActions: "play none none reverse", // Play animation on enter, reverse on exit
   },
   opacity: 0,
   x: -50,
   duration: 1,
   ease: "power2.inOut",
 });


 // Animation for the text
 gsap.from(".text-container p", {
   scrollTrigger: {
     trigger: "#about", // Start animation when #about section enters the viewport
     start: "top 80%", // Start animation 80% from the top of the viewport
     end: "bottom top", // End animation when #about section leaves the viewport
     toggleActions: "play none none reverse",
   },
   opacity: 0,
   y: 50,
   duration: 1,
 });


  // Animation for the "Experience" section
  gsap.from("#experience", {
    scrollTrigger: {
      trigger: "#experience", // Start animation when #experience section enters the viewport
      start: "top 80%", // Start animation 80% from the top of the viewport
      end: "bottom top", // End animation when #experience section leaves the viewport
      toggleActions: "play none none reverse", // Play animation on enter, reverse on exit
    },
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power2.inOut",
  });

  // Animation for individual skill articles
  gsap.from(".article-container article", {
    scrollTrigger: {
      trigger: ".article-container", // Start animation when .article-container enters the viewport
      start: "top 80%", // Start animation 80% from the top of the viewport
      end: "bottom top", // End animation when .article-container leaves the viewport
      toggleActions: "play none none reverse",
    },
    opacity: 0,
    y: 20,
    stagger: 0.2,
    duration: 0.5,
  });

  // Animation for the arrow icon
  gsap.from(".arrow", {
    scrollTrigger: {
      trigger: "#experience", // Start animation when #experience section enters the viewport
      start: "top 80%", // Start animation 80% from the top of the viewport
      end: "bottom top", // End animation when #experience section leaves the viewport
      toggleActions: "play none none reverse",
    },
    opacity: 0,
    x: 50,
    duration: 1,
    ease: "power2.inOut",
  });


   // Animation for the "Projects" section
   gsap.from("#projects", {
    scrollTrigger: {
      trigger: "#projects", // Start animation when #projects section enters the viewport
      start: "top 80%", // Start animation 80% from the top of the viewport
      end: "bottom top", // End animation when #projects section leaves the viewport
      toggleActions: "play none none reverse", // Play animation on enter, reverse on exit
    },
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power2.inOut",
  });

  // Animation for individual project containers
  gsap.from(".details-container.color-container", {
    scrollTrigger: {
      trigger: ".details-container.color-container", // Start animation when .details-container.color-container enters the viewport
      start: "top 80%", // Start animation 80% from the top of the viewport
      end: "bottom top", // End animation when .details-container.color-container leaves the viewport
      toggleActions: "play none none reverse",
    },
    opacity: 0,
    y: 20,
    stagger: 0.2,
    duration: 0.5,
  });


  

