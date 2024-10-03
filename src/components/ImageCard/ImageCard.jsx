import css from './ImageCard.module.css';

const ImageCard = ({ alt, small, regular }) => {
  return (
    <div>
      <img
        className={css.card}
        src={small}
        alt={alt}
        width={320}
        height={240}
      ></img>
    </div>
  );
};

export default ImageCard;
