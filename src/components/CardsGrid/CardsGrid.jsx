import PropTypes from 'prop-types';

import SmallCard from 'components/SmallCard';
import { FlexGrid } from './CardsGrid.styled';
import TextButton from 'components/TextButton';
import { useState } from 'react';

const CardsGrid = ({ collection, metadata, onLoadClick, onFavoriteClick }) => {
  const [isDetailsShown, setIsDetailsShown] = useState(false)

  return (
    <>
      <FlexGrid>
        {collection.map(vehicle => (
          <SmallCard
            key={vehicle._id}
            vehicle={vehicle}
            handleFavoriteClick={onFavoriteClick}
            onLoadMoreClick={setIsDetailsShown}
          />
        ))}
      </FlexGrid>
      {metadata.page * 12 < metadata.total && (
        <TextButton title={'Load more'} handleClick={onLoadClick} />
      )}
    </>
  );
};

// CardsGrid.propTypes = {
//   children: PropTypes.node,
// };

export default CardsGrid;
