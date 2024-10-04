import css from './ImageCard.module.css';

const ImageCard = ({ alt, small, regular, openModal }) => {
  return (
    <div>
      <img
        onClick={event => {
          event.preventDefault();
          openModal(regular, alt);
        }}
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
