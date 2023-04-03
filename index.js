const form = document.querySelector("form");

let zipcode = form.zip.value;
let bikeInfo;
let variable;
let url;

const regex = /\d{5}/g;

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

const contain = document.querySelector("div.image_container");
const bod = document.querySelector("body");
const image = document.createElement("img");
const bikes = document.querySelector(".next");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let zipcode = e.target.zip.value;
  fetch(
    `https://bikeindex.org:443/api/v3/search?page=1&per_page=25&query=image&location=${zipcode}&distance=50&stolenness=proximity`
  )
    .then((response) => response.json())

    .then((bike) => {
      bikeInfo = bike;
    });
});

bikes.addEventListener("mouseover", (e) => {
  bikes.style.cursor = "default";
});

bikes.addEventListener("click", (e) => {
  console.log("hello");
  variable = getRandomInt(1, 25);

  image.src = bikeInfo.bikes[variable].large_img;
  contain.append(image);
});
