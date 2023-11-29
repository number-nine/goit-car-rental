import Filter from 'components/Filter';
import SmallCard from 'components/SmallCard'
// import Section from 'components/Section';

import { Container } from 'pages/Pages.styled';

export default function Dashboard() {
  return (
    <Container>
      <Filter />
      <SmallCard />
    </Container>
  );
}
