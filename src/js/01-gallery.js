// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

console.log(galleryItems);

const listEl = document.querySelector('.gallery');

const renderList = (arr, container) => {
    const markup = arr.map((item) => `<li class="gallery__item" style="list-style:none">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"                             
      alt="${item.description}"
    />
  </a>
</li>`
    )
    .join("");
    container.insertAdjacentHTML("beforeend", markup);
}

renderList(galleryItems, listEl);

 // SimpleLightbox
let galleryLightBox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});