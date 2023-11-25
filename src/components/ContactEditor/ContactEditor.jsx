import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';

import * as contactsAPI from 'redux/contactOperations';

import {
  FormStyled,
  LabelStyled,
  LabelStyledChk,
  FieldStyled,
  Error,
} from './ContactEditor.styled';
import { Button } from 'components/common.styled';

const validate = values => {
  const errors = {};
  if (!values.name) {
    errors.name = 'Required';
  } else if (
    !/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/i.test(
      values.name
    )
  ) {
    errors.name =
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan";
  }

  if (!values.phone) {
    errors.phone = 'Required';
  } else if (
    !/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/i.test(
      values.phone
    )
  ) {
    errors.phone =
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +';
  }

  return errors;
};

const ContactEditor = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: '',
      phone: '',
      isPrivate: true,
    },
    validate,
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: (values, { resetForm }) => {
      dispatch(contactsAPI.addContact(values));
      resetForm();
    },
  });

  return (
    <FormStyled onSubmit={formik.handleSubmit}>
      <LabelStyled>
        Name
        <FieldStyled
          type="text"
          name="name"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
      </LabelStyled>
      {formik.touched.name && formik.errors.name ? (
        <Error>{formik.errors.name}</Error>
      ) : null}

      <LabelStyled>
        Phone number
        <FieldStyled
          type="tel"
          name="phone"
          onChange={formik.handleChange}
          value={formik.values.phone}
        />
      </LabelStyled>
      {formik.touched.phone && formik.errors.phone ? (
        <Error>{formik.errors.phone}</Error>
      ) : null}

      <LabelStyledChk>
        Private contact
        <input
          type="checkbox"
          name="isPrivate"
          onChange={formik.handleChange}
          checked={formik.values.isPrivate}
        />
      </LabelStyledChk>
      <Button type="submit">Add contact</Button>
    </FormStyled>
  );
};

export default ContactEditor;
