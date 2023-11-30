import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import * as vehiclesAPI from 'redux/vehiclesOperations';
import { selectVehicles } from 'redux/selectors';

import SmallCard from 'components/SmallCard';

import { FlexGrid } from './CardsGrid.styled';

const CardsGrid = () => {
  const dispatch = useDispatch();
  const vehicles = useSelector(selectVehicles);


  useEffect(() => {
    dispatch(vehiclesAPI.getFiltered());
  }, [dispatch]);

  return (
    <FlexGrid>
      {vehicles.map(vehicle => (
        <SmallCard key={vehicle._id} vehicle={vehicle} />
      ))}
    </FlexGrid>
  );
};

// CardsGrid.propTypes = {
//   children: PropTypes.node,
// };

export default CardsGrid;
