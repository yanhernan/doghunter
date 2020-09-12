import React, {useEffect, useCallback, useState} from 'react';
import GalleryGrid from '../../../components/gallery/grid';
import BreedApi from '../../../api/breed';
const GalleryScreen = ({navigation, route}) => {
  const [images, setImages] = useState([]);
  const onInitGallery = useCallback(() => {
    BreedApi.fetchImagesByBreed(route.params?.name).then((imageArray) => {
      if (imageArray) {
        setImages(imageArray);
      }
    });
  }, []);
  useEffect(() => {
    onInitGallery();
  }, [route]);
  return <GalleryGrid data={images} />;
};

export default GalleryScreen;
