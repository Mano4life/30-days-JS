let galleryWrapper = document.getElementById("gallery-wrapper");
let back = document.getElementById("back");
let next = document.getElementById("next");

galleryWrapper.addEventListener("wheel", (e) => {
  galleryWrapper.style.scrollBehavior = "auto";
  e.preventDefault();
  galleryWrapper.scrollLeft += e.deltaY;
});

back.addEventListener("click", () => {
  galleryWrapper.scrollLeft -= 900;
  galleryWrapper.style.scrollBehavior = "smooth";
});

next.addEventListener("click", () => {
  galleryWrapper.scrollLeft += 900;
  galleryWrapper.style.scrollBehavior = "smooth";
});
