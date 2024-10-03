import css from './ImageGallery.module.css';

import ImageCard from '../ImageCard/ImageCard';

const ImageGallery = ({ images }) => {
  return (
    <ul className={css.gallery}>
      {images.map(image => (
        <li key={image.id}>
          <ImageCard
            alt={image.alt_description}
            small={image.urls.small}
            regular={image.urls.regular}
          />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
