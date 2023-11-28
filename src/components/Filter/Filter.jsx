import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import Select from 'react-select';
import { createEnumOptions } from '../../helpers';

// import * as vehiclesAPI from 'redux/vehiclesOperations';
import * as filtersAPI from 'redux/filtersOperations';

import {
  selectFilterDataMakes,
  selectFilterDataRentalPrice,
  selectFilterDataMileage,
} from 'redux/selectors';

import { FormStyled, LabelStyled, Error } from './Filter.styled';
import { Button } from 'components/common.styled';


const Filter = () => {
  const dispatch = useDispatch();
  const dataMakes = useSelector(selectFilterDataMakes);
  const dataRentalPrice = useSelector(selectFilterDataRentalPrice);
  const dataMileage = useSelector(selectFilterDataMileage);


  const [brandOptions, setBrandOptions] = useState([]);
  const [priceOptions, setPriceOptions] = useState([]);
  const [mileageMinOptions, setMileageMinOptions] = useState([]);
  const [mileageMaxOptions, setMileageMaxOptions] = useState([]);

  useEffect(() => {
    dispatch(filtersAPI.getFilters());
  }, [dispatch]);

  useEffect(() => {
    const brandOptions = [
      { value: 'all', label: 'All brands' },
      ...dataMakes.map(element => ({
        value: element,
        label: element,
      })),
    ];
    setBrandOptions(brandOptions);
  }, [dataMakes]);

  useEffect(() => {
    const priceOptions = [
      { value: 'all', label: 'All prices' },
      ...createEnumOptions(dataRentalPrice.min, dataRentalPrice.max, 10).map(
        element => ({
          value: element,
          label: element,
        })
      ),
    ];
    setPriceOptions(priceOptions);
  }, [dataRentalPrice]);

  useEffect(() => {
    const milageOptions = [
      { value: 'all', label: 'any mileage' },
      ...createEnumOptions(dataMileage.min, dataMileage.max, 500).map(
        element => ({
          value: element,
          label: element,
        })
      ),
    ];
    setMileageMinOptions(milageOptions);
    setMileageMaxOptions(milageOptions);
  }, [dataMileage]);

  function limitMaxMileage(value) {
    const limitedOptions = [
      { value: 'all', label: 'any mileage' },
      ...createEnumOptions(dataMileage.min, dataMileage.max, 500)
        .map(element => ({
          value: element,
          label: element,
        }))
        .filter(element => value ==="all" ? true : element.value <= value),
    ];
      setMileageMinOptions(limitedOptions);  
  }

   function limitMinMileage(value) {
     const limitedOptions = [
       { value: 'all', label: 'any mileage' },
       ...createEnumOptions(dataMileage.min, dataMileage.max, 500)
         .map(element => ({
           value: element,
           label: element,
         }))
         .filter(element => (value === 'all' ? true : element.value >= value)),
     ];
     setMileageMaxOptions(limitedOptions);
   }
  

  const formik = useFormik({
    initialValues: {
      brand: 'all',
      price: 'all',
      mileageFrom: 'all',
      mileageTo: 'all',
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
          defaultValue={brandOptions.find(brand => brand.value === 'all')}
          options={brandOptions}
          // hideSelectedOptions={formik.values.brand === 'all'}
          onChange={selectedOption => {
            formik.setFieldValue('brand', selectedOption.value);
          }}
          value={brandOptions.find(
            brand => brand.value === formik.values.brand
          )}
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
          defaultValue={priceOptions.find(price => price.value === 'all')}
          options={priceOptions}
          // hideSelectedOptions={formik.values.price === 'all'}
          onChange={selectedOption => {
            formik.setFieldValue('price', selectedOption.value);
          }}
          value={priceOptions.find(
            price => price.value === formik.values.price
          )}
          formatOptionLabel={({ value, label }, { context }) =>
            context === 'value' && value !== 'all' ? `To ${label}$` : label
          }
        />
      </LabelStyled>
      <LabelStyled>
        Сar mileage / km
        <Select
          name="mileageFrom"
          defaultValue={mileageMinOptions.find(
            mileage => mileage.value === 'all'
          )}
          options={mileageMinOptions}
          // hideSelectedOptions={formik.values.price === 'all'}
          onChange={selectedOption => {
            formik.setFieldValue('mileageFrom', selectedOption.value);
            limitMinMileage(selectedOption.value);
          }}
          value={mileageMinOptions.find(
            mileage => mileage.value === formik.values.mileageFrom
          )}
          formatOptionLabel={({ value, label }, { context }) =>
            context === 'value'
              ? `From ${label}`
              : value === 'all'
              ? label.charAt(0).toUpperCase() + label.slice(1)
              : label
          }
        />
      </LabelStyled>
      <LabelStyled>
        &nbsp;
        <Select
          name="mileageTo"
          defaultValue={mileageMaxOptions.find(
            mileage => mileage.value === 'all'
          )}
          options={mileageMaxOptions}
          // hideSelectedOptions={formik.values.price === 'all'}
          onChange={selectedOption => {
            formik.setFieldValue('mileageTo', selectedOption.value);
            limitMaxMileage(selectedOption.value);
          }}
          value={mileageMaxOptions.find(
            mileage => mileage.value === formik.values.mileageTo
          )}
          formatOptionLabel={({ value, label }, { context }) =>
            context === 'value'
              ? `To ${label}`
              : value === 'all'
              ? label.charAt(0).toUpperCase() + label.slice(1)
              : label
          }
        />
      </LabelStyled>
      <Button type="submit">Search</Button>
    </FormStyled>
  );
};

export default Filter;
