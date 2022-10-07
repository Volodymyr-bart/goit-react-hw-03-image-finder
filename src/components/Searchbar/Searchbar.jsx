// import { Formik } from 'formik';
// import * as yup from 'yup';
// import PropTypes from 'prop-types';
// export default async function fetchSearchQuery(query, currentPage) {
//   const API_KEY = `29486928-40983179e54322116410ec482`;
//   // axios.defaults.baseURL =
//   //   'https://pixabay.com/api/?key=29486928-40983179e54322116410ec482';
//   return await axios.get(
//     `https://pixabay.com/api/?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${currentPage}`
//   );
// }

import {
  Searchbar,
  SearchForm,
  SearchFormButton,
  SearchFormInput,
  // SearchFormSpan,
} from './Searchbar.styled';

import { GoSearch } from 'react-icons/go';

// export const API_KEY = `29486928-40983179e54322116410ec482`;
// const schema = yup.object().shape({
//   name: yup.string().required(),
// });
// const initialValues = {
//   name: '',
// };

export const SearchBar = () => {
  return (
    <Searchbar>
      <SearchForm>
        <SearchFormButton type="submit">
          <GoSearch />
          {/* <SearchFormSpan>Search</SearchFormSpan> */}
        </SearchFormButton>

        <SearchFormInput
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </SearchForm>
    </Searchbar>
  );
};

// <header class="searchbar">
//       <Formik initialValues={initialValues} validationSchema={schema}>
//         <Formik autoComplete="off">
//           <button type="submit" class="button">
//             <span class="button-label">Search</span>
//           </button>
//           <label htmlFor="name">
//             Name
//             <input
//               // class="input"
//               type="text"
//               name="name"
//               autocomplete="off"
//               placeholder="Search images and photos"
//               pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//               title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//             />
//             {/* <Error name="name" /> */}
//           </label>
//         </Formik>
//       </Formik>
//     </header>
