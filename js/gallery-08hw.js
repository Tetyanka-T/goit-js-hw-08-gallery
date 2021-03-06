import galleryItems from "./gallery-items.js";
const galleryList = document.querySelector(".js-gallery");
const lightbox = document.querySelector(".lightbox");
const btn = document.querySelector('button[data-action="close-lightbox"]');
console.log(btn);
const modal = document.querySelector(".lightbox__content");
const lightboxImage = document.querySelector(".lightbox__image");
const makeGallery = ({ preview, original, description }) => {
  return `<li class="gallery__item"><a class="gallery__link" href=${original}><img class="gallery__image" src=${preview} data-source=${original}
      alt=${description}/></a>
    </li>`;
};
const markup = galleryItems.map(makeGallery).join("");
console.log(markup);
galleryList.insertAdjacentHTML("afterbegin", markup);
galleryList.addEventListener("click", openGallery);
modal.addEventListener("click", closeModal);
btn.addEventListener("click", onBtnClick);
function openGallery(e) {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return;
  }
  if (e.target.nodeName === "IMG") {
    lightbox.classList.add("is-open");
    onClicklightboxImage(e);
  }
  window.addEventListener("keydown", clickKey);
}
function closeModal(e) {
  lightbox.classList.remove("is-open");
  updatePopupImage();
  
  window.removeEventListener("keydown", clickKey);
}
function onClicklightboxImage(e) {
  const t = e.target;
  updatePopupImage(t.dataset.source, t.alt);
  }
function updatePopupImage(src = '', alt = '') {
  lightboxImage.src = src;
  lightboxImage.alt = alt;
  }
function onBtnClick(e) {
  if (e.target === e.currentTarget) {
    closeModal();
  }
}
function clickKey(e) {
  if (e.code === "Escape") {
    closeModal();
  }
}


