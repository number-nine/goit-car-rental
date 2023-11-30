import Banner from 'components/Banner';
import { Container } from 'pages/Pages.styled';

export default function Home() {
  return (
    <Container>
      <section>
        some text
        <Banner />
      </section>
    </Container>
  );
}
