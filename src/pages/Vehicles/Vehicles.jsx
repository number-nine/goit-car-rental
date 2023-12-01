import { useSelector } from 'react-redux';

import Filter from 'components/Filter';
import SmallCard from 'components/SmallCard';
import FullCard from 'components/FullCard';
import Section from 'components/Section';
import CardsGrid from 'components/CardsGrid';
import TextButton from 'components/TextButton';
import { Container } from 'pages/Pages.styled';
import { selectFilterValues } from 'redux/selectors';

export default function Vehicles() {
  const  values  = useSelector(selectFilterValues);
  return (
    <Container>
      <Section>
        <Filter />
      </Section>
      <Section>
        <CardsGrid />
        <TextButton
          title={'Load more'}
          handleClick={() => console.log('load more:', values)}
        />
      </Section>
      {/* <FullCard /> */}
    </Container>
  );
}
