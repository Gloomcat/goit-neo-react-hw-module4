import css from './ImageModal.module.css';

const ImageModal = ({ alt, src, closeModal }) => {
  if (!src) {
    return null;
  }

  return (
    <div className={css['modal-overlay']} onClick={closeModal}>
      <div
        className={css['modal-content']}
        onClick={e => {
          e.stopPropagation();
        }}
      >
        <img src={src} alt={alt} className={css['modal-image']} />
      </div>
    </div>
  );
};

export default ImageModal;
