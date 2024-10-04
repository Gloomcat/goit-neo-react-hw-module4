import css from './ImageModal.module.css';

import ReactModal from 'react-modal';

ReactModal.setAppElement('#root');

const ImageModal = ({ alt, src, closeModal }) => {
  return (
    <ReactModal
      isOpen={!!src}
      onRequestClose={closeModal}
      overlayClassName={css['modal-overlay']}
      className={css['modal-content']}
    >
      <img
        src={src}
        alt={alt}
        className={css['modal-image']}
        onClick={e => {
          e.stopPropagation(); // Prevent closing when clicking inside the modal content
        }}
      />
    </ReactModal>
  );
};

export default ImageModal;
