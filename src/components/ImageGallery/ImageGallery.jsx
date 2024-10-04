import css from './ImageGallery.module.css';

import ImageCard from '../ImageCard/ImageCard';

import { nanoid } from 'nanoid';

const ImageGallery = ({ images, openModal }) => {
  return (
    <ul className={css.gallery}>
      {images.map(image => (
        // For some reason there are none-unique ids in unsplash images
        // that generates a lot of errors.
        // Add workaround with nanoid which ids are not persistent across sessions
        // but they are unique and it fits for this educational project
        <li key={nanoid()}>
          <ImageCard
            alt={image.alt_description}
            small={image.urls.small}
            regular={image.urls.regular}
            openModal={openModal}
          />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
