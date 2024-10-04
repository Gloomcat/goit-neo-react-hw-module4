import css from './App.module.css';

import { useEffect, useState } from 'react';

import { Toaster } from 'react-hot-toast';
import toast from 'react-hot-toast';

import fetchPhotos from '../../api/unsplash-api';

import ImageGallery from '../ImageGallery/ImageGallery';
import SearchBar from '../SearchBar/SearchBar';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import ImageModal from '../ImageModal/ImageModal';

const App = () => {
  const [images, setImages] = useState([]);

  const [query, setQuery] = useState('');
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  const [isLoading, setIsLoading] = useState(false);

  const [error, setError] = useState('');

  const [modalOpen, setModalOpen] = useState(false);
  const [modalSrc, setModalSrc] = useState('');
  const [modalAlt, setModalAlt] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      if (!query) {
        return;
      }

      setError('');
      setIsLoading(true);

      try {
        const perPage = 12;
        const response = await fetchPhotos({
          query: query,
          page: page,
          perPage: perPage,
        });

        if (response.status !== 200) {
          throw new Error(
            'There is a problem with loading images for you request. Please try again.'
          );
        }

        setIsLoading(false);
        setTotalPages(Math.ceil(response.headers['x-total'] / perPage));
        setImages(prevImages => [...prevImages, ...response.data]);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [query, page]);

  const handleSubmit = event => {
    event.preventDefault();

    const form = event.target;
    const { search } = form.elements;
    const searchValue = search.value;

    setError('');
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

  const openModal = (src, alt) => {
    setModalOpen(true);
    setModalSrc(src);
    setModalAlt(alt);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalSrc('');
    setModalAlt('');
  };

  useEffect(() => {
    const handleEscKey = e => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };

    document.addEventListener('keydown', handleEscKey);
    return () => {
      document.removeEventListener('keydown', handleEscKey);
    };
  }, []);

  return (
    <div className={css.container}>
      <Toaster position="top-right" />
      <SearchBar handleSubmit={handleSubmit} />
      <ImageGallery images={images} openModal={openModal} />
      {page < totalPages && !isLoading && (
        <LoadMoreBtn handleLoadMore={handleLoadMore} />
      )}
      {isLoading && <Loader />}
      {error && <ErrorMessage error={error} />}
      {modalOpen && (
        <ImageModal alt={modalAlt} src={modalSrc} closeModal={closeModal} />
      )}
    </div>
  );
};

export default App;
