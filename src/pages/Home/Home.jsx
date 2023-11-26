import Section from 'components/Section';
import Banner from 'components/Banner';
import { Container } from 'pages/Pages.styled';

export default function Home() {
  return (
    <Container>
      <Section title="Best Car Rental Worldwide">
        <Banner />
      </Section>
    </Container>
  );
}
