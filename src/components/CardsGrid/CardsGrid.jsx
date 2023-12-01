import PropTypes from 'prop-types';

import SmallCard from 'components/SmallCard';
import { FlexGrid } from './CardsGrid.styled';
import TextButton from 'components/TextButton';

const CardsGrid = ({ collection, metadata, onClick }) => {
  return (
    <>
      <FlexGrid>
        {collection.map(vehicle => (
          <SmallCard key={vehicle._id} vehicle={vehicle} />
        ))}
      </FlexGrid>
      {metadata.page * 12 < metadata.total && (
        <TextButton title={'Load more'} handleClick={onClick} />
      )}
    </>
  );
};

// CardsGrid.propTypes = {
//   children: PropTypes.node,
// };

export default CardsGrid;
