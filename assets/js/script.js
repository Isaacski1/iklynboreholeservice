// LightGallery Initialization
document.addEventListener("DOMContentLoaded", function () {
  const gallery = document.querySelector(".gallery");
  if (gallery) {
    lightGallery(gallery, {
      selector: "a",
      download: false,
    });
  }
});

// Go to Top Button Functionality
const goToTopBtn = document.getElementById("goToTop");
goToTopBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
window.addEventListener("scroll", function () {
  if (window.scrollY > 300) {
    goToTopBtn.classList.add("show");
  } else {
    goToTopBtn.classList.remove("show");
  }
});
// End of Go to Top Button Functionality
