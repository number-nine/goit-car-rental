import { Container } from 'pages/Pages.styled';
import Section from 'components/Section';
import Banner from 'components/Banner';

export default function Home() {
  return (
    <Container>
      <Section>
        <Banner/>
      </Section>
    </Container>
  );
}
