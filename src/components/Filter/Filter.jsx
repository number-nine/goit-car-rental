import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useFormik, Formik } from 'formik';
import Select from 'react-select';

import * as vehiclesAPI from 'redux/vehiclesOperations';
import * as filtersAPI from 'redux/filtersOperations';

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

// const MIN_PRICE = 11;
// const MAX_PRICE = 60;

// const createEnumOptions = (min, max, step) => {
//   const options = [];
//   const lowest = Math.trunc(min / step) * step;
//   const bigest = Math.ceil(max / step) * step;

//   for (let i = lowest; i <= bigest; i = i + step) {
//     options.push(i);
//   }
//   return options;
// };

// console.log(createEnumOptions(MIN_PRICE, MAX_PRICE, 10));

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  // const [prices, setPrices] = useState([])

   useEffect(() => {
     dispatch(filtersAPI.getPrices());
     dispatch(filtersAPI.getMakes());
   }, [dispatch]);

  const brands = [
    { value: 'all', label: 'All brands' },
    ...filter.makes.map(element => ({
      value: element,
      label: element,
    })),
  ];

  // console.log(prices);
  const prices = [
    { value: 'all', label: 'All prices' },
    ...filter.prices.map(element => ({
      value: element,
      label: element,
    })),
  ];

  // console.log(prices);

  const formik = useFormik({
    initialValues: {
      brand: 'all',
      price: 'all',
      mileageFrom: 0,
      mileageTo: 0,
    },
    // validate,
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      // dispatch(vehiclesAPI.getAll());
      resetForm();
    },
  });

  return (
    <FormStyled onSubmit={formik.handleSubmit}>
      <LabelStyled>
        Car brand
        <Select
          name="brand"
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
        <Select
          name="price"
          defaultValue={prices.find(price => price.value === 'all')}
          options={prices}
          // hideSelectedOptions={formik.values.price === 'all'}
          onChange={selectedOption => {
            formik.setFieldValue('price', selectedOption.value);
          }}
          value={prices.find(price => price.value === formik.values.price)}
          formatOptionLabel={({ value, label }, { context }) =>
            context === 'value' && value !== 'all' ? `To ${label}$` : label 
          }
        />
      </LabelStyled>

      {/* <LabelStyled>
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
      </LabelStyled> */}

      <Button type="submit">Search</Button>
    </FormStyled>
  );
};

export default Filter;
