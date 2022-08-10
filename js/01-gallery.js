import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryEl = document.querySelector(".gallery");

const makeGallery = ({ preview, original, description} = {}) => {
   return `
   <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
   `; 
};

const galleryCardArr = galleryItems.map((el) => {
   return makeGallery(el);
});

galleryEl.insertAdjacentHTML("beforeend", galleryCardArr.join(""));

//-----------------------------------------------------------

const onGalleryImgClick = event => {
   event.preventDefault();

   if(event.target.nodeName !== 'IMG') {
      return;
   }
   





   const bannerUrl = event.target.dataset.source;

   const instance = basicLightbox.create(`
      <img src="${bannerUrl}" width="800" height="600">
   `)

instance.show()
}

galleryEl.addEventListener('click', onGalleryImgClick);



