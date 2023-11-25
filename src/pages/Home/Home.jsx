import { useSelector } from 'react-redux';
import Section from 'components/Section';
import ContactsList from 'components/ContactsList';
import Filter from 'components/Filter';
import ContactEditor from 'components/ContactEditor';
import { selectAuth } from 'redux/selectors';

import { Container } from 'pages/Pages.styled';

export default function Home() {
  const { isLoggedIn } = useSelector(selectAuth);

  return (
    <Container>
      {isLoggedIn && (
        <Section title="Add Contact">
          <ContactEditor />
        </Section>
      )}
      <Section title="Filter Contacts">
        <Filter />
      </Section>
      <Section title="Contacts List">
        <ContactsList />
      </Section>
    </Container>
  );
}
