import css from './LoadMore.module.css';

import { MdExpandMore } from 'react-icons/md';

const LoadMore = ({ handleLoadMore }) => {
  return (
    <button className={css['more-btn']} type="button" onClick={handleLoadMore}>
      <MdExpandMore className={css['more-icon']} size={32} />
    </button>
  );
};

export default LoadMore;
