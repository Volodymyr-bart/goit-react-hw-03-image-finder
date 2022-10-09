import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Component } from 'react';
import { ImageGalleryStyled } from './ImageGallery.styled';

export class ImageGallery extends Component {
  state = {
    currentPage: 1,
    gallery: [],
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.query !== this.props.query) {
      const API_KEY = `29486928-40983179e54322116410ec482`;
      const currentPage = 1;
      fetch(
        `https://pixabay.com/api/?key=${API_KEY}&q=${this.props.query}&image_type=photo&orientation=horizontal&safesearch=true&per_page=12&page=${currentPage}`
      )
        .then(res => res.json())
        .then(res => {
          const { hits } = res;
          this.setState({ gallery: hits });
        });
      //   const response = await axios
      //     .get(
      //       `https://pixabay.com/api/?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&per_page=12&page=${currentPage}`
      //     )
      //     .then(response => response.json());
    }
  }
  render() {
    const { gallery } = this.state;
    // const {
    //   item: { id },
    // } = gallery;
    // console.log(gallery);

    return (
      <ImageGalleryStyled>
        {gallery.map((item, id) => (
          <ImageGalleryItem key={id} item={item} />
        ))}
      </ImageGalleryStyled>
    );
  }
}
