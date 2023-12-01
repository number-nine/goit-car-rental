
import SmallCard from 'components/SmallCard';
import { FlexGrid } from './CardsGrid.styled';
import TextButton from 'components/TextButton';


const CardsGrid = ({ collection, metadata, onLoadClick, onFavoriteClick }) => {

  return (
    <>
      <FlexGrid>
        {collection.map(vehicle => (
          <SmallCard
            key={vehicle._id}
            vehicle={vehicle}
            handleFavoriteClick={onFavoriteClick}
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
