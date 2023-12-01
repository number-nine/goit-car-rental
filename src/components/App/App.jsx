import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


import SharedLayout from 'components/SharedLayout';
import Home from 'pages/Home';
import Vehicles from 'pages/Vehicles';
import Favorites from 'pages/Favorites';

import { selectIsLoading } from 'redux/selectors';
import SplashScreen from 'components/SplashScreen';



export default function App() {

  const isLoading = useSelector(selectIsLoading);


  

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
