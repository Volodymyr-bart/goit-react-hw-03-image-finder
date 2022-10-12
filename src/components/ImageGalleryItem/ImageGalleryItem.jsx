import {
  ImageGalleryItemImageStyled,
  ImageGalleryItemStyled,
} from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ item, onClick }) => {
  const { webformatURL, tags, largeImageURL } = item;

  return (
    <ImageGalleryItemStyled>
      <ImageGalleryItemImageStyled
        src={webformatURL}
        alt={tags}
        onClick={() => {
          onClick(largeImageURL, tags);
        }}
      />
    </ImageGalleryItemStyled>
  );
};
