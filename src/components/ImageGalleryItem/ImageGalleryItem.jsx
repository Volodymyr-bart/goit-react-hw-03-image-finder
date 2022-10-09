import {
  ImageGalleryItemImageStyled,
  ImageGalleryItemStyled,
} from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ item }) => {
  console.log(item);
  const { webformatURL, tags } = item;
  // webformatURL;
  // largeImageURL;
  return (
    <ImageGalleryItemStyled>
      <ImageGalleryItemImageStyled src={webformatURL} alt={tags} />
    </ImageGalleryItemStyled>
  );
};
