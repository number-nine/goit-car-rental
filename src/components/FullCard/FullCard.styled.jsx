import styled from '@emotion/styled';
import carMockupImage from 'images/car-mokup.jpg';

export const WrapperStyled = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 541px;

  row-gap: 14px;

  padding: 0;
  padding-left: 40px;
  padding-right: 40px;
  margin: 0;
  margin-bottom: 40px;

  border: 1px solid grey;
  border-radius: 24px;

  overflow: hidden;
`;

export const PhotoStyled = styled.img`
  display: block;
  width: 100%;
  height: 248px;

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
  margin-top: 40px;

  border-radius: 14px;

  overflow: hidden;
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

export const AccessoriesWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  row-gap: 4px;
`;

export const ConditionsWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  row-gap: 8px;
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
`;

export const AnnotationStyled = styled.p`
   color: #121417;
   padding: 0;
   margin: 0;
   margin-top:10px;

  font-size: 14px;
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
