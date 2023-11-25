import { useSelector, useDispatch } from 'react-redux';
import { selectFilter } from 'redux/selectors';

import { update } from 'redux/filterSlice';
import { Button } from '../common.styled';
import { FilterWrapper } from './Filter.styled';

const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  return (
    <FilterWrapper>
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={e => {
          dispatch(update(e.target.value));
        }}
      />
      <Button
        type="button"
        onClick={() => {
          dispatch(update(''));
        }}
      >
        Clear field
      </Button>
    </FilterWrapper>
  );
};

export default Filter;
