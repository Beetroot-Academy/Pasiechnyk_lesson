document.addEventListener("DOMContentLoaded", function () {
  let splide = new Splide("#splide-banner", {
    arrows: false,
    paginationDirection: "ttb",
    type: "loop",
    autoplay: true,
    fixedHeigth: "100vh",
    interval: 2500,
  });
  splide.mount();
});

document.addEventListener("DOMContentLoaded", function () {
  let splide = new Splide("#splide-news", {
    type: "loop",
    perPage: 3,
    perMove: 1,
    focus: "center",
    interval: 3000,
    pauseOnFocus: true,
    rewind: true,
    fixedHeigth: "100vh",
  });
  splide.mount();
});
