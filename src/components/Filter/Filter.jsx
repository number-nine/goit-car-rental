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
        .filter(element => (value === 'all' ? true : element.value <= value)),
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

  const customStyles = {
    control: styles => ({
      ...styles,
      borderRadius: '14px',
      border: 'none',
      padding: '6px 6px',

      backgroundColor: '#F7F7FB',

      fontSize: '18px',
      fontWeight: '500',
    }),
    dropdownIndicator: styles => ({
      ...styles,
      color: '#121417',
    }),
    menuList: styles => ({
      ...styles,
      color: '#12141732',

      fontSize: '16px',
      fontWeight: '500',

      marginRight: '8px',
      '::-webkit-scrollbar': {
        width: '8px',
        height: '130px',
      },
      '::-webkit-scrollbar-track': {
        background: 'transparent',
        marginTop: '20px',
        marginBottom: '20px',
      },
      '::-webkit-scrollbar-thumb': {
        background: '#12141710',
        borderRadius: '10px',
      },
      '::-webkit-scrollbar-thumb:hover': {
        background: '#12141732',
      },
    }),
    option: (styles, { isSelected }) => ({
      ...styles,
      color: isSelected ? '#121417' : '#12141732',
      padding: '4px 18px',
      background: isSelected ? 'none' : 'transparent',
      fontWeight: isSelected ? '500' : '400',
      '&:hover': {
        background: '#0087FB14',
      },
    }),
    menu: styles => ({
      ...styles,
      border: '1px solid #12141710',
      boxShadow: 'none',
      borderRadius: '14px',
      overflow: 'hidden',
    }),
  };

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
          components={{
            IndicatorSeparator: () => null,
          }}
          styles={customStyles}
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
          components={{
            IndicatorSeparator: () => null,
          }}
          styles={customStyles}
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
          // formatOptionLabel={({ value, label }, { context }) =>
          //   context === 'value'
          //     ? `From ${label}`
          //     : value === 'all'
          //     ? label.charAt(0).toUpperCase() + label.slice(1)
          //     : label
          // }
          formatOptionLabel={({ value, label }, { context }) =>
            context === 'value'
              ? value === 'all'
                ? 'From'
                : `From ${label}`
              : value === 'all'
              ? label.charAt(0).toUpperCase() + label.slice(1)
              : label
          }
          components={{
            DropdownIndicator: () => null,
            IndicatorSeparator: () => null,
          }}
          styles={customStyles}
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
              ? value === 'all'
                ? 'To'
                : `To ${label}`
              : value === 'all'
              ? label.charAt(0).toUpperCase() + label.slice(1)
              : label
          }
          components={{
            DropdownIndicator: () => null,
            IndicatorSeparator: () => null,
          }}
          styles={customStyles}
        />
      </LabelStyled>
      <Button type="submit">Search</Button>
    </FormStyled>
  );
};

export default Filter;
