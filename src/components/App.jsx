import { Component } from 'react';
import { SearchBar } from './Searchbar/Searchbar';
// import { getGalleryItems } from '../api';
// import { ModalWindow } from './Modal/Modal';
// import { ButtonLoadMore } from './Button/Button';
import { ImageGallery } from './ImageGallery/ImageGallery';

export class App extends Component {
  state = {
    query: '',

    render: true,
    // status: 'idle',
    showModal: false,
  };

  editQuery = data => {
    if (data.query.trim() !== '' && this.state.query !== data.query) {
      this.setState({
        query: data.query,
      });
    }
  };

  // toggleModal = () => {
  //   this.setState(({ showModal }) => ({
  //     showModal: !showModal,
  //   }));
  // };
  render() {
    const { query, render } = this.state;

    return (
      <>
        <SearchBar onSubmit={this.editQuery} />
        {render && <ImageGallery query={query} />}
        {/*  */}
        <button type="button" onClick={this.toggleModal}>
          Open Modal
        </button>
        {/* {showModal && (
          <ModalWindow onClose={this.toggleModal}>
            <h1>This is modal</h1>
            <button type="button" onClick={this.toggleModal}>
              Close Modal
            </button>
          </ModalWindow>
        )} */}
      </>
    );
  }
}
