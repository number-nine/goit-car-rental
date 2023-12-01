import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import * as favoritesAPI from 'redux/favoritesOperations';

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
     dispatch(favoritesAPI.getFavorites());
   }, [dispatch]);

   const onLoadMore = values => {
     dispatch(favoritesAPI.getFavorites({ page: Number(values.page) + 1 }));
   };

  return (
    <Container>
      <Section></Section>
      <Section>
        <CardsGrid
          onClick={() => onLoadMore()}
          collection={favorites}
          metadata={metadata}
        />
      </Section>
    </Container>
  );
}
