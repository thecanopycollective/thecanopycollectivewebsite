document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll("nav a");
  const sections = document.querySelectorAll("section");

  function updateActiveSection() {
    const scrollPosition = window.scrollY;
    let currentSectionId = null;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (
        scrollPosition >= sectionTop &&
        scrollPosition < sectionTop + sectionHeight
      ) {
        currentSectionId = section.id;
        section.classList.add("is-current-page");
      } else {
        section.classList.remove("is-current-page");
      }
    });

    // Update navigation links (optional)
    navLinks.forEach((link) => {
      const href = link.getAttribute("href").substring(1);
      if (href === currentSectionId) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  }

  navLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
        });
      }
    });
  });

  // Initial update and add scroll listener
  updateActiveSection();
  window.addEventListener("scroll", updateActiveSection);
});