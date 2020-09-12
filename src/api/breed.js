import Wrapper from './fetch_wrapper';
import {Endpoints} from './constant';

const processingData = async (response) => {
  if (response.ok) {
    const data = await response.json();
    if (data.status === 'success') {
      return data.message;
    }
  }
  return undefined;
};

export const fetchBreedList = async () => {
  const resp = await Wrapper.get(Endpoints.breed.list);
  const data = await processingData(resp);
  if (data) {
    const breedNames = Object.keys(data);
    return breedNames.map((name) => ({name, data: data[name]}));
  }
  return undefined;
};

export const fetchImagesByBreed = async (breed) => {
  const resp = await Wrapper.get(`${Endpoints.breed.image}/${breed}/images`);
  return await processingData(resp);
};

export default {
  fetchBreedList,
  fetchImagesByBreed,
};
