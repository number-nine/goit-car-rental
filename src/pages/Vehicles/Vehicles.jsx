import { useSelector } from 'react-redux';

import Filter from 'components/Filter';
import SmallCard from 'components/SmallCard';
import FullCard from 'components/FullCard';
import Section from 'components/Section';
import CardsGrid from 'components/CardsGrid';
import { Container } from 'pages/Pages.styled';

export default function Vehicles() {
  return (
    <Container>
      <Section>
        <Filter />
      </Section>
      <Section>
        <CardsGrid>
         
          {/* <SmallCard />
          <SmallCard />
          <SmallCard />
          <SmallCard />
          <SmallCard />
          <SmallCard /> */}
        </CardsGrid>
      </Section>
      {/* <FullCard /> */}
    </Container>
  );
}
