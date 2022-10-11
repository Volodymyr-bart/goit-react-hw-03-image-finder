import { ButtonLoadMore } from 'components/Button/Button';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Component } from 'react';
import { ImageGalleryStyled } from './ImageGallery.styled';

const INITIAL_STATE = {
  currentPage: 1,
  gallery: [],
  render: false,
};

export class ImageGallery extends Component {
  state = {
    // query: '',
    currentPage: 1,
    gallery: [],
    render: false,
    // status: 'idle',
    // showModal: false,
    totalPages: null,
  };

  componentDidUpdate(prevProps, prevState) {
    const API_KEY = `29486928-40983179e54322116410ec482`;
    if (
      prevProps.query !== this.props.query ||
      prevState.currentPage !== this.state.currentPage
    ) {
      if (prevProps.query !== this.props.query) {
        this.reset();
        fetch(
          `https://pixabay.com/api/?key=${API_KEY}&q=${this.props.query}&image_type=photo&orientation=horizontal&safesearch=true&per_page=12&page=${this.state.currentPage}`
        )
          .then(res => res.json())
          .then(res => {
            const { hits } = res;
            this.setState({ gallery: [...hits] });
          });
      } else {
        fetch(
          `https://pixabay.com/api/?key=${API_KEY}&q=${this.props.query}&image_type=photo&orientation=horizontal&safesearch=true&per_page=12&page=${this.state.currentPage}`
        )
          .then(res => res.json())
          .then(res => {
            const { hits } = res;
            this.setState({ gallery: [...prevState.gallery, ...hits] });
          });
      }
    }
  }

  // this.setState({ gallery: [prevProps.gallery, ...hits] });
  reset = () => {
    console.log('doneeeeeeeeeeeeeeeeeeeeeee??????');
    this.setState({ ...INITIAL_STATE });
  };

  handleClickLoadMore = () => {
    this.setState(prevState => ({ currentPage: prevState.currentPage + 1 }));
    console.log(this.state);
  };

  render() {
    console.log('Render');
    console.log(this.state);
    const { gallery, currentPage } = this.state;
    console.log(gallery);
    // console.log(gallery);
    // console.log(gallery);

    return (
      <>
        <ImageGalleryStyled>
          {gallery.map((item, id) => (
            <ImageGalleryItem key={id} item={item} />
          ))}
        </ImageGalleryStyled>
        <ButtonLoadMore onClick={this.handleClickLoadMore} />
      </>
    );
  }
}

//   const response = await axios
//     .get(
//       `https://pixabay.com/api/?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&per_page=12&page=${currentPage}`
//     )
//     .then(response => response.json());
