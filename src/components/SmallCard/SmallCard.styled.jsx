import styled from '@emotion/styled';
import carMockupImage from 'images/car-mokup.jpg';

export const WrapperStyled = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 274px;

  row-gap: 14px;

  padding: 0;
  margin: 0;

  border: none;

  overflow: hidden;
`;

export const PhotoStyled = styled.img`
  display: block;
  width: 100%;
  min-height: 268px;

  padding: 0;
  margin: 0;

  object-fit: cover;
`;

PhotoStyled.defaultProps = {
  src: carMockupImage,
};

export const PhotoWrapperStyled = styled.div`
  position: relative;
  width: 100%;

  border-radius: 14px;

  overflow: hidden;
  object-fit: cover;

  &::after {
    content: '';
    position: absolute;
    display: block;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, #12141732 0%, #12141700 30%);
  }
`;

export const ThumbStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;

  row-gap: 24px;

  padding: 0;
  margin: 0;
`;

export const DescriptionWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  row-gap: 4px;
`;

export const HeaderStyled = styled.h2`
  display: flex;
  justify-content: space-between;
  width: 100%;

  padding: 0;
  margin: 0;
  margin-bottom: 4px;

  font-size: 16px;
  font-weight: 500;
`;

export const SpecificationStyled = styled.ul`
  display: flex;
  justify-content: flex-start;
  width: 100%;

  padding: 0;
  margin: 0;

  color: #12141750;

  font-size: 12px;
  font-weight: 400;
`;

export const SpecificationItemsStyled = styled.li`
  flex: 0 0 auto;
  padding: 0;
  margin: 0;

  list-style: none;
  &:not(:first-of-type) {
    border-left: 1px solid;
    padding-left: 6px;
  }

  &:not(:last-child) {
    padding-right: 6px;
  }
`;
