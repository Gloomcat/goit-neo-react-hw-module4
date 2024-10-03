import css from './App.module.css';

import { useEffect, useState } from 'react';

import toast from 'react-hot-toast';

import fetchPhotos from '../../api/unsplash-api';

import ImageGallery from '../ImageGallery/ImageGallery';

const App = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchPhotos({
          query: 'nature',
          page: 1,
        });

        console.log(response.data);
        setImages(response.data);
      } catch (error) {
        toast.error(error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={css.container}>
      <ImageGallery images={images} />
    </div>
  );
};

export default App;
