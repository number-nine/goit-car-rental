import { Header, Wrapper } from './Banner.styled';
import { useNavigate } from 'react-router-dom';




import Button from 'components/Button';

const Banner = () => {
  const navigate = useNavigate();

  function forwardToCatalog() {
    navigate('/catalog');
  }
  return (
    <Wrapper>
      <Header>Best rental service at Neverland!</Header>
      <p>
        <span>Book Now, Pay Later</span> for car rentals, and have the
        flexibility to cancel or reschedule anytime. Rent where you land or
        stay. Pick up from the airports, hotels, or anywhere convenient.
      </p>
      <Button
        title={'Book online now'}
        size="fit-content"
        handleClick={forwardToCatalog}
      />
    </Wrapper>
  );
};

export default Banner;
