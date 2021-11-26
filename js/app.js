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
  const mobile = window.matchMedia("(max-width: 400px)");
  if (mobile.matches) {
    if (
      rect.top >= 0 &&
      rect.bottom > 0 &&
      rect.top < (window.innerHeight || document.documentElement.clientHeight)
    )
      return true;
    else return false;
  } else {
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
}

function isInViewport2(element) {
  const rect = element.getBoundingClientRect();
  return rect.top >= 0 && rect.top <= 300;
}
// functuion adds active class
function addActiveClass() {
  const sections = [];
  for (let i = 0; i < sectionsNode.length; i++) {
    sections[i] = isInViewport2(sectionsNode[i]);
  }
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
}

// function scrolls to a specific section
function scrollToMySection(ev) {
  ev.preventDefault();
  document
    .getElementById(sectionsNode[i].getAttribute("id"))
    .scrollIntoView({ behavior: "smooth", block: "center" });
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
}

// Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click
const liNode = document.querySelectorAll(".menu__link");
for (let i = 0; i < liNode.length; i++)
  liNode[i].addEventListener("click", scrollToMySection);
// Set sections as active
document.addEventListener("scroll", addActiveClass);
