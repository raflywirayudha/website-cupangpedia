const jenisImage = document.querySelectorAll(".jenisImage");
const image = document.querySelectorAll(".image");
const morfologi1 = document.querySelectorAll(".morfologiAnimate1");
const morfologi2 = document.querySelectorAll(".morfologiAnimate2");
const paragraf = document.querySelectorAll("p");
const card = document.querySelectorAll(".card");
const heading2 = document.querySelectorAll("h2");
const heading3 = document.querySelectorAll("h3");

jenisImage.forEach((img) => {
  img.dataset.aos = "zoom-in";
});

image.forEach((img) => {
  img.dataset.aos = "zoom-in";
});

morfologi1.forEach((box) => {
  box.dataset.aos = "fade-right";
});

morfologi2.forEach((box) => {
  box.dataset.aos = "fade-left";
});

paragraf.forEach((paragraf) => {
  paragraf.dataset.aos = "fade-up";
});

card.forEach((card) => {
  card.dataset.aos = "flip-left";
});

heading2.forEach((text) => {
  text.dataset.aos = "fade-down";
});

heading3.forEach((text) => {
  text.dataset.aos = "fade-right";
});

AOS.init({ once: true });
