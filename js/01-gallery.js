import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galeryEl = document.querySelector(".gallery");
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
