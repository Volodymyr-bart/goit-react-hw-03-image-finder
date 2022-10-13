import { Component } from 'react';
import { SearchBar } from './Searchbar/Searchbar';
// import { getGalleryItems } from '../api';
// import { ModalWindow } from './Modal/Modal';
// import { ButtonLoadMore } from './Button/Button';
import { ImageGallery } from './ImageGallery/ImageGallery';

export class App extends Component {
  state = {
    query: '',
    currentPage: 1,
    gallery: [],
    render: false,
  };

  editQuery = data => {
    if (data.query.trim() !== '' && this.state.query !== data.query) {
      this.setState({
        query: data.query,
        gallery: data.gallery,
        currentPage: data.currentPage,
        render: data.render,
      });
    }
  };

  // addGalerry = data => {
  //   this.setState({ gallery: [...this.state.gallery, ...data] });
  // };
  addGalerry = data => {
    this.setState(prevState => ({ gallery: [...prevState.gallery, ...data] }));
  };

  handleClickLoadMore = () => {
    console.log('its plus one');
    this.setState(prevState => ({ currentPage: prevState.currentPage + 1 }));
  };

  render() {
    const { query, currentPage, gallery, render } = this.state;

    return (
      <>
        <SearchBar onSubmit={this.editQuery} />
        {render && (
          <ImageGallery
            query={query}
            currentPage={currentPage}
            gallery={gallery}
            onChange={this.addGalerry}
            loadMore={this.handleClickLoadMore}
          />
        )}
      </>
    );
  }
}
