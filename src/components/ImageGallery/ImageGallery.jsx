import { ButtonLoadMore } from 'components/Button/Button';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Component } from 'react';
import { ImageGalleryStyled } from './ImageGallery.styled';
import axios from 'axios';
import { ModalWindow } from 'components/Modal/Modal';

export class ImageGallery extends Component {
  state = {
    perPage: 12,
    totalPages: 0,
    showModal: false,
    imgData: null,
    isLoading: false,
    render: true,
  };

  // async componentDidMount(prevProps, _) {
  //   console.log('mount');

  //   try {
  //     console.log('mount try');
  //     const { query, currentPage } = this.props;

  //     this.setState({ render: false });
  //     const { perPage } = this.state;
  //     // const { query, currentPage } = this.props;
  //     const API_KEY = `29486928-40983179e54322116410ec482`;
  //     const response = await axios.get(
  //       `https://pixabay.com/api/?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&per_page=${perPage}&page=${currentPage}`
  //     );
  //     const { hits, totalHits } = response.data;
  //     const pages = Math.ceil(totalHits / this.state.perPage);

  //     this.setState({
  //       totalPages: pages,
  //     });
  //     this.updateGallery(hits);
  //     this.setState({ render: true });
  //   } catch (error) {
  //     console.log(error);
  //   } finally {
  //   }
  // }
  async componentDidUpdate(prevProps, _) {
    console.log('update');
    try {
      const { perPage } = this.state;
      const { query, currentPage } = this.props;
      if (prevProps.query !== query || prevProps.currentPage !== currentPage) {
        console.log('update');
        this.setState({ render: false });

        const API_KEY = `29486928-40983179e54322116410ec482`;
        const response = await axios.get(
          `https://pixabay.com/api/?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&per_page=${perPage}&page=${currentPage}`
        );
        const { hits, totalHits } = response.data;
        const pages = Math.ceil(totalHits / this.state.perPage);
        this.setState({
          totalPages: pages,
        });
        this.updateGallery(hits);
        this.setState({ render: true });
      }
    } catch (error) {
      console.log(error);
    } finally {
    }
  }

  updateGallery = data => {
    console.log(data);
    this.props.onChange(data);
  };

  // handleClickLoadMore = () => {
  //   console.log('its plus one');
  //   // this.setState(prevState => ({ currentPage: prevState.currentPage + 1 }));
  // };

  // toggleLoading = () => {
  //   this.setState(({ isLoading }) => ({
  //     isLoading: !isLoading,
  //   }));
  // };

  toggleModal = (largeImageURL, tags) => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
      imgData: { largeImageURL, tags },
    }));
  };

  render() {
    const { showModal, imgData, totalPages, render } = this.state;
    const { currentPage, gallery } = this.props;
    console.log('Render gallery', gallery);

    return (
      <>
        {render && (
          <ImageGalleryStyled>
            {gallery.map((item, id) => (
              <ImageGalleryItem
                key={id}
                item={item}
                onClick={this.toggleModal}
              />
            ))}

            {showModal && (
              <ModalWindow onClose={this.toggleModal}>
                <img alt={imgData.tags} src={imgData.largeImageURL} />
              </ModalWindow>
            )}
          </ImageGalleryStyled>
        )}

        {/* {render && gallery.length > 0 && currentPage < totalPages && (
          <ButtonLoadMore
            onClick={() => {
              this.props.loadMore();
            }}
          />
        )} */}
      </>
    );
  }
}
