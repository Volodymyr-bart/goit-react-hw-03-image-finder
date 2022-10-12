import { ButtonLoadMore } from 'components/Button/Button';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Component } from 'react';
import { ImageGalleryStyled } from './ImageGallery.styled';
import axios from 'axios';
import { ModalWindow } from 'components/Modal/Modal';

const INITIAL_STATE = {
  currentPage: 1,
  gallery: [],
  render: false,
  loadMore: false,
};

export class ImageGallery extends Component {
  state = {
    currentPage: 1,
    gallery: [],
    perPage: 12,
    totalPages: 0,
    showModal: false,
    imgData: null,
  };

  async componentDidUpdate(prevProps, prevState) {
    const API_KEY = `29486928-40983179e54322116410ec482`;
    if (
      prevProps.query !== this.props.query ||
      prevState.currentPage !== this.state.currentPage
    ) {
      if (prevProps.query !== this.props.query) {
        this.reset();
        const response = await axios.get(
          `https://pixabay.com/api/?key=${API_KEY}&q=${this.props.query}&image_type=photo&orientation=horizontal&safesearch=true&per_page=${this.state.perPage}&page=${this.state.currentPage}`
        );
        const { hits, totalHits } = response.data;
        const pages = Math.ceil(totalHits / this.state.perPage);
        this.setState({ totalPages: pages, gallery: [...hits] });
      } else {
        const response = await axios.get(
          `https://pixabay.com/api/?key=${API_KEY}&q=${this.props.query}&image_type=photo&orientation=horizontal&safesearch=true&per_page=${this.state.perPage}&page=${this.state.currentPage}`
        );
        const { hits } = response.data;
        this.setState({ gallery: [...prevState.gallery, ...hits] });
      }
    }
  }

  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  handleClickLoadMore = () => {
    this.setState(prevState => ({ currentPage: prevState.currentPage + 1 }));
  };

  toggleModal = (largeImageURL, tags) => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
      imgData: { largeImageURL, tags },
    }));
  };

  render() {
    const { gallery, showModal, imgData, currentPage, totalPages } = this.state;

    return (
      <>
        <ImageGalleryStyled>
          {gallery.map((item, id) => (
            <ImageGalleryItem key={id} item={item} onClick={this.toggleModal} />
          ))}

          {showModal && (
            <ModalWindow onClose={this.toggleModal}>
              <img alt={imgData.tags} src={imgData.largeImageURL} />
              {/* <h1>This is modal</h1>
              <button type="button" onClick={this.toggleModal}>
                Close Modal
              </button> */}
            </ModalWindow>
          )}
        </ImageGalleryStyled>

        {gallery.length > 0 && currentPage < totalPages && (
          <ButtonLoadMore onClick={this.handleClickLoadMore} />
        )}
      </>
    );
  }
}

// await fetch(
//   `https://pixabay.com/api/?key=${API_KEY}&q=${this.props.query}&image_type=photo&orientation=horizontal&safesearch=true&per_page=12&page=${this.state.currentPage}`
// )
//   .then(res => res.json())
//   .then(res => {
//     const { hits } = res;
//     this.setState({ gallery: [...hits] });
//   });

//   const response = await axios
//     .get(
//       `https://pixabay.com/api/?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&per_page=12&page=${currentPage}`
//     )
//     .then(response => response.json());

// await fetch(
//   `https://pixabay.com/api/?key=${API_KEY}&q=${this.props.query}&image_type=photo&orientation=horizontal&safesearch=true&per_page=${this.state.perPage}&page=${this.state.currentPage}`
// )
//   .then(res => res.json())
//   .then(res => {
//     const { hits } = res;
//     this.setState({ gallery: [...prevState.gallery, ...hits] });
//   });

// console.log('pages', pages);
// console.log('cur', this.state.currentPage);
// console.log(this.state.currentPage < pages);
