import css from './ImageCard.module.css';

const ImageCard = ({ alt, small, regular }) => {
  return (
    <img
      className={css.card}
      src={small}
      alt={alt}
      width={320}
      height={240}
    ></img>
  );
};

export default ImageCard;
