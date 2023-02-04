import SimpleLightbox from 'simplelightbox';

const modalGalleryOptions = {
  captionsData: 'alt',
  captionDelay: 250,
  overlay: true,
};
const modalGallery = new SimpleLightbox('.image-slider a', modalGalleryOptions);
