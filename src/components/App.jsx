import { Component } from 'react';
import { SearchBar } from './Searchbar/Searchbar';
import { ModalWindow } from './Modal/Modal';

export class App extends Component {
  state = {
    showModal: false,
  };

  async componentDidMount() {
    // async function fetchSearchQuery(query, currentPage) {
    //   const API_KEY = `29486928-40983179e54322116410ec482`;
    //   // axios.defaults.baseURL =
    //   //   'https://pixabay.com/api/?key=29486928-40983179e54322116410ec482';
    //   return await axios.get(
    //     `https://pixabay.com/api/?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${currentPage}`
    //   );
  }

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };
  render() {
    const { showModal } = this.state;
    return (
      <>
        <SearchBar />
        <button type="button" onClick={this.toggleModal}>
          Open Modal
        </button>
        {showModal && (
          <ModalWindow onClose={this.toggleModal}>
            <h1>This is modal</h1>
            {/* <img src="" alt="" /> */}
            <button type="button" onClick={this.toggleModal}>
              Close Modal
            </button>
          </ModalWindow>
        )}
      </>
    );
  }
}
