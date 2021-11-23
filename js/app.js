/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 *
 */

const sectionsNode = document.querySelectorAll("section");
const ulNavBar = document.getElementById("navbar__list");

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  if (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  )
    return true;
  else return false;
}

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav

for (let i = 0; i < sectionsNode.length; i++) {
  const liElement = document.createElement("li");
  const anchorElement = document.createElement("a");

  anchorElement.textContent = sectionsNode[i].getAttribute("data-nav");
  liElement.style.cursor = "pointer";
  // anchorElement.setAttribute("href", `#${sectionsNode[i].getAttribute("id")}`);
  anchorElement.setAttribute("class", "menu__link");

  liElement.appendChild(anchorElement);
  ulNavBar.appendChild(liElement);
  // console.log(liElement);
}

// Add class 'active' to section when near top of viewport

document.addEventListener("scroll", function () {
  const sections = [];
  for (let i = 0; i < sectionsNode.length; i++) {
    sections[i] = isInViewport(sectionsNode[i]);
  }
  // console.log(sections);
  // const section1 = isInViewport(sectionsNode[0]);
  // const section2 = isInViewport(sectionsNode[1]);
  // const section3 = isInViewport(sectionsNode[2]);
  // const section4 = isInViewport(sectionsNode[3]);

  for (let i = 0; i < sectionsNode.length; i++) {
    if (sections[i]) {
      if (!sectionsNode[i].classList.contains("your-active-class"))
        sectionsNode[i].classList.add("your-active-class");
      for (let j = 0; j < sectionsNode.length; j++) {
        if (j == i) continue;
        if (sectionsNode[j].classList.contains("your-active-class")) {
          sectionsNode[j].classList.remove("your-active-class");
        }
      }
    }
  }

  // if (section1) {
  //   if (!sectionsNode[0].classList.contains("your-active-class")) {
  //     sectionsNode[0].classList.add("your-active-class");
  //   }
  //   for (let i = 1; i < sectionsNode.length; i++) {
  //     if (sectionsNode[i].classList.contains("your-active-class")) {
  //       sectionsNode[i].classList.remove("your-active-class");
  //     }
  //   }
  // }
  // if (section2) {
  //   if (!sectionsNode[1].classList.contains("your-active-class")) {
  //     sectionsNode[1].classList.add("your-active-class");
  //   }
  //   for (let i = 0; i < sectionsNode.length && i != 1; i++) {
  //     if (sectionsNode[i].classList.contains("your-active-class")) {
  //       sectionsNode[i].classList.remove("your-active-class");
  //     }
  //   }
  // }
});

// Scroll to anchor ID using scrollTO event
const liNode = document.querySelectorAll(".menu__link");
for (let i = 0; i < liNode.length; i++) {
  liNode[i].addEventListener("click", function (ev) {
    ev.preventDefault();
    document
      .getElementById(sectionsNode[i].getAttribute("id"))
      .scrollIntoView({ behavior: "smooth", block: "center" });
  });
}

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active
