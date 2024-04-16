import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galeryEl = document.querySelector(".gallery");
const body = document.querySelector("body");
const createGalery = getImgOriginal(galleryItems);

galeryEl.insertAdjacentHTML("beforeend", createGalery);

function getImgOriginal(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
        <li class="gallery__item">
          <a class="gallery__link" href="${original}">
            <img
               class="gallery__image"
               src="${preview}"
               data-source="${original}"
               alt="${description}"
            />
          </a>
        </li>`;
    })
    .join("");
}

galeryEl.addEventListener("click", createModal);

function createModal(event) {
  event.preventDefault();

  const imgCurent = event.target.dataset.source;

  const instance = basicLightbox.create(
    `<img src="${imgCurent}" width="800" height="600">`
  );
  instance.show();

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      instance.close();
    }
  });
}
