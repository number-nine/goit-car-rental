import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
// import { Notify } from 'notiflix';

import SharedLayout from 'components/SharedLayout';
import Home from 'pages/Home';
import Vehicles from 'pages/Vehicles';
import Favorites from 'pages/Favorites';

// import * as vehiclesAPI from 'redux/vehiclesOperations';
import { selectIsLoading } from 'redux/selectors';
import SplashScreen from 'components/SplashScreen';



export default function App() {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsLoading);
  // const error = useSelector(selectError);


  

  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="catalog" element={<Vehicles />} />
          <Route path="favorites" element={<Favorites />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace={true} />} />
      </Routes>
      {isLoading && <SplashScreen />}
      {/* {error && Notify.info(error)} */}
    </>
  );
}
