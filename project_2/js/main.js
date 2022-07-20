// hero slide
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
// news slide
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

// map
const displayMap = document.getElementById("map");

function initMap(newLat, newLng) {
  const myLatLng = { lat: newLat, lng: newLng };

  const map = new google.maps.Map(displayMap, {
    zoom: 13,
    center: myLatLng,
    disableDefaultUI: true,
    styles: [
      {
        stylers: [
          {
            saturation: -90,
          },
        ],
      },
    ],
  });

  const image = new google.maps.MarkerImage(
    "..//assets/image/main_map.png",
    null, // size
    null, // origin
    new google.maps.Point(8, 8), // anchor (move to center of marker)
    new google.maps.Size(25, 25) // scaled size (required for Retina display icon)
  );

  const marker = new google.maps.Marker({
    flat: true,
    optimized: false,
    position: myLatLng,
    map: map,
    icon: image,
    title: "We are here!",
  });
  marker.setMap(map);
}

window.initMap = initMap(50.458309842219066, 30.46494879270167);

/*let submitBtn = document.querySelector(".contacts__form");
let submitBtn = document.querySelector(".contacts__btn");
let nameInput = document.querySelector(".contacts__nameinput");
let mailInput = document.querySelector(".contacts__mailinput");

submitBtn.addEventListener("click", function () {
  let mail;
  mail = mailInput.value;
  let name;
  name = nameInput.value;
  alert("Your name: " + name);
  alert("Your email: " + mail);
});*/
