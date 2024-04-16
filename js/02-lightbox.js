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
               alt="${description}"
            />
          </a>
        </li>`;
    })
    .join("");
}

galeryEl.addEventListener("click", handleClick);

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});

function handleClick(event) {
  event.preventDefault();

  const targetImg = event.target;
  lightbox.open(targetImg);
}
