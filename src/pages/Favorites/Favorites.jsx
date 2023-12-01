import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import * as favoritesAPI from 'redux/favoritesOperations';
import { deleteFavorite } from 'redux/favoritesSlice';

import { selectFavoritesList } from 'redux/selectors';
import { selectFavoritesMetadata } from 'redux/selectors';

import Section from 'components/Section';
import CardsGrid from 'components/CardsGrid';
import { Container } from 'pages/Pages.styled';

export default function Favorites() {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavoritesList);
  const metadata = useSelector(selectFavoritesMetadata);

  useEffect(() => {
    dispatch(favoritesAPI.getFavorites({}));
  }, [dispatch]);

  const onLoadMore = () => {
    console.log(metadata);
    dispatch(favoritesAPI.getFavorites({ page: Number(metadata.page) + 1 }));
  };

  const onFavoriteClick = (_, id) => {
    dispatch(deleteFavorite(id));
    // refactor with asyncDispatch
    dispatch(favoritesAPI.removeFavorite(id));


    
  };

  return (
    <Container>
      <Section></Section>
      <Section>
        <CardsGrid
          onLoadClick={() => onLoadMore()}
          onFavoriteClick={onFavoriteClick}
          collection={favorites}
          metadata={metadata}
        />
      </Section>
    </Container>
  );
}
