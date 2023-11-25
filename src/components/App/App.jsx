import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Notify } from 'notiflix';

import SharedLayout from 'components/SharedLayout';
import Home from 'pages/Home';
import Dashboard from 'pages/Dashboard';
import * as contactsAPI from 'redux/contactOperations';
import { selectAuth, selectIsLoading, selectError } from 'redux/selectors';
import SplashScreen from 'components/SplashScreen';



export default function App() {
  const dispatch = useDispatch();

  const { isLoggedIn } = useSelector(selectAuth);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);


   useEffect(() => {
     dispatch(contactsAPI.getAllContacts());
   }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route
            path="dashboard"
            element={isLoggedIn ? <Dashboard /> : <Navigate to="/" />}
          />
        </Route>
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
      {isLoading && <SplashScreen />}
      {error && Notify.info(error)}
    </>
  );
}
