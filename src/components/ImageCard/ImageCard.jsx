import css from './ImageCard.module.css';

const ImageCard = ({ alt, small, regular, openModal }) => {
  return (
    <a
      href="#"
      onClick={event => {
        event.preventDefault();
        openModal(regular, alt);
      }}
    >
      <img
        className={css.card}
        src={small}
        alt={alt}
        width={320}
        height={240}
      ></img>
    </a>
  );
};

export default ImageCard;
