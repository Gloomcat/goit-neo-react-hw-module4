import css from './LoadMoreBtn.module.css';

import { MdExpandMore } from 'react-icons/md';

const LoadMoreBtn = ({ handleLoadMore }) => {
  return (
    <button className={css['more-btn']} type="button" onClick={handleLoadMore}>
      <MdExpandMore className={css['more-icon']} size={32} />
      Load More
    </button>
  );
};

export default LoadMoreBtn;
