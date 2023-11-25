import PropTypes from 'prop-types';

import { TitleStyled } from './Section.styled';

const Section = ({ title, children }) => {
  return (
    <section>
      <TitleStyled>{title}</TitleStyled>
      {children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default Section;
