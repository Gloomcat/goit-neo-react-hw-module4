import css from './App.module.css';

import { useEffect, useState } from 'react';

import { Toaster } from 'react-hot-toast';
import toast from 'react-hot-toast';

import fetchPhotos from '../../api/unsplash-api';

import ImageGallery from '../ImageGallery/ImageGallery';
import SearchBar from '../SearchBar/SearchBar';
import LoadMore from '../LoadMore/LoadMore';

const App = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      if (!query) {
        return;
      }

      try {
        setIsLoading(true);

        const perPage = 12;
        const response = await fetchPhotos({
          query: query,
          page: page,
          perPage: perPage,
        });

        if (response.status !== 200) {
          throw new Error(
            `Failed to load images, error code: ${response.status}`
          );
        }

        setIsLoading(false);
        setTotalPages(Math.ceil(response.headers['x-total'] / perPage));
        setImages(prevImages => [...prevImages, ...response.data]);
      } catch (error) {
        toast.error(error.message);
      }
    };

    fetchData();
  }, [query, page]);

  const handleSubmit = event => {
    event.preventDefault();

    const form = event.target;
    const { search } = form.elements;
    const searchValue = search.value;

    setTotalPages(0);
    setImages([]);

    if (!searchValue) {
      toast.error('Please enter your search request.');
    } else {
      setQuery(search.value);
      setPage(1);
    }

    form.reset();
  };

  const handleLoadMore = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  return (
    <div className={css.container}>
      <SearchBar handleSubmit={handleSubmit} />
      <ImageGallery images={images} />
      {page < totalPages && !isLoading && (
        <LoadMore handleLoadMore={handleLoadMore} />
      )}
      <Toaster />
    </div>
  );
};

export default App;
