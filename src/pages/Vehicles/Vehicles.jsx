import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import * as vehiclesAPI from 'redux/vehiclesOperations';
import { update } from 'redux/filtersSlice';


import { selectVehiclesList } from 'redux/selectors';
import { selectFilterValues } from 'redux/selectors';
import { selectVehiclesMetadata } from 'redux/selectors';


import Filter from 'components/Filter';
import Section from 'components/Section';
import CardsGrid from 'components/CardsGrid';
import { Container } from 'pages/Pages.styled';


export default function Vehicles() {

   const dispatch = useDispatch();
   const vehicles = useSelector(selectVehiclesList);
   const values = useSelector(selectFilterValues);
   const metadata = useSelector(selectVehiclesMetadata);

    useEffect(() => {
      dispatch(
        update({
          brand: 'all',
          price: 'all',
          mileageFrom: 'all',
          mileageTo: 'all',
        })
      );
      dispatch(vehiclesAPI.getFiltered());
    }, [dispatch]);
  
   const onLoadMore = values => {
     dispatch(
       vehiclesAPI.getFiltered({ ...values, page: Number(values.page) + 1 })
     );
   };

  return (
    <Container>
      <Section>
        <Filter />
      </Section>
      <Section>
        <CardsGrid
          onClick={() => onLoadMore(values)}
          collection={vehicles}
          metadata={metadata}
        />
      </Section>
    </Container>
  );
}
