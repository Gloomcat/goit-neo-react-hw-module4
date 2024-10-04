import css from './SearchBar.module.css';

import { useId } from 'react';

import { IoIosSearch } from 'react-icons/io';

const SearchBar = ({ handleSubmit }) => {
  const searchFieldId = useId();

  return (
    <header>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          className={css.search}
          id={searchFieldId}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="search"
        />
        <button
          type="submit"
          className={css['search-btn']}
          onClick={() => {
            console.log('click');
          }}
        >
          <IoIosSearch size={22} />
          Search
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
