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
  };

  editQuery = data => {
    if (data.query.trim() !== '' && this.state.query !== data.query) {
      this.setState({
        query: data.query,
      });
    }
  };

  render() {
    const { query, render } = this.state;

    return (
      <>
        <SearchBar onSubmit={this.editQuery} />
        {render && <ImageGallery query={query} />}
      </>
    );
  }
}
