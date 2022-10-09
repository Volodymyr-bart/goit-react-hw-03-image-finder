import axios from 'axios';

// axios.defaults.baseURL = 'https://api.thedogapi.com/v1';
// axios.defaults.headers.common['x-api-key'] = process.env.REACT_APP_API_KEY;

export const getGalleryItems = async (query, currentPage) => {
  const API_KEY = `29486928-40983179e54322116410ec482`;
  const response = await axios
    .get(
      `https://pixabay.com/api/?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&per_page=12&page=${currentPage}`
    )
    .then(response => response.json());
  console.log(response);
  return response;
};

// export const getGalleryItems = async (query, currentPage) => {
//   const API_KEY = `29486928-40983179e54322116410ec482`;
//   // axios.defaults.baseURL =
//   //   'https://pixabay.com/api/?key=29486928-40983179e54322116410ec482';
//   return await axios
//     .get(
//       `https://pixabay.com/api/?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&per_page=12&page=${currentPage}`
//     )
//     .then(response => response.json());
// };
