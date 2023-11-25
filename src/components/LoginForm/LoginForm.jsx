import { useDispatch, useSelector } from 'react-redux';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { selectAuth } from 'redux/selectors';

import { FormStyled, ButtonStyled, LabelStyled } from './LoginForm.styled';
import { login, logout } from 'redux/authSlice';

const LoginForm = () => {
  const dispatch = useDispatch();
  const { userName: currentUser, isLoggedIn } = useSelector(selectAuth);
  const handleSubmit = e => {
    e.preventDefault();
    if (isLoggedIn) {
      dispatch(logout());
      return;
    }

    const userName = e.target.elements?.login.value.trim();
    if (!userName) {
      Notify.failure('Enter valid username');
      return;
    }
    dispatch(login({ userName }));
    e.target.reset();
    return;
  };
  return (
    <FormStyled onSubmit={handleSubmit}>
      <LabelStyled htmlFor="loginField">
        {isLoggedIn ? `Welcome, ${currentUser}` : 'Enter login'}
      </LabelStyled>
      {!isLoggedIn && (
        <input type="text" name="login" id="loginField" required />
      )}
      {!isLoggedIn && <ButtonStyled type="submit">Log In</ButtonStyled>}
      {isLoggedIn && <ButtonStyled type="submit">Log out</ButtonStyled>}
    </FormStyled>
  );
};

export default LoginForm;
