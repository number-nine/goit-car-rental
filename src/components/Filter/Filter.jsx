import { useDispatch, useSelector } from 'react-redux';
import { useFormik, Formik } from 'formik';
import Select, { AriaOnFocus } from 'react-select';

import * as vehiclesAPI from 'redux/vehiclesOperations';

import { selectFilter } from 'redux/selectors';

import { FormStyled, LabelStyled, FieldStyled, Error } from './Filter.styled';
import { Button } from 'components/common.styled';

// const validate = values => {
//   const errors = {};
//   if (!values.name) {
//     errors.name = 'Required';
//   } else if (
//     !/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/i.test(
//       values.name
//     )
//   ) {
//     errors.name =
//       "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan";
//   }

//   return errors;
// };

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const brands = [
    { value: 'all', label: 'All brands' },
    ...filter.makes.map(element => ({
      value: element,
      label: element,
    })),
  ];

  const formik = useFormik({
    initialValues: {
      brand: 'all',
      price: 30,
      mileageFrom: 0,
      mileageTo: 0,
    },
    // validate,
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: (values, { resetForm }) => {
      console.log(formik);
      // dispatch(vehiclesAPI.getAll());
      resetForm();
    },
  });

  return (
    <FormStyled onSubmit={formik.handleSubmit}>
      <LabelStyled>
        Car brand
        <Select
          name="band"
          defaultValue={brands.find(brand => brand.value === 'all')}
          options={brands}
          // hideSelectedOptions={formik.values.brand === 'all'}
          onChange={selectedOption => {
            formik.setFieldValue('brand', selectedOption.value);
          }}
          value={brands.find(brand => brand.value === formik.values.brand)}
          formatOptionLabel={({ value, label }, { context }) =>
            context === 'value' && value === 'all' ? 'Enter the text' : label
          }
        />
      </LabelStyled>
      {formik.touched.name && formik.errors.name ? (
        <Error>{formik.errors.name}</Error>
      ) : null}

      <LabelStyled>
        Price/ 1 hour
        <FieldStyled
          as="select"
          name="price"
          onChange={formik.handleChange}
          // value={formik.values.price}
        >
          <option value="red">Red</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
        </FieldStyled>
      </LabelStyled>

      <LabelStyled>
        Сar mileage / km
        <FieldStyled
          type="select"
          name="price"
          onChange={formik.handleChange}
          value={formik.values.price}
        ></FieldStyled>
        <FieldStyled
          type="select"
          name="price"
          onChange={formik.handleChange}
          value={formik.values.price}
        ></FieldStyled>
      </LabelStyled>

      <Button type="submit">Search</Button>
    </FormStyled>
  );
};

export default Filter;
