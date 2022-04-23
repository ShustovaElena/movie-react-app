import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../../pages/Home/Home';
import AboutUs from '../../pages/About/About';
import Profile from '../../pages/Profile/Profile';
import NotFound from '../../pages/NotFound/NotFound';
import { AppContext } from '../../contexts';
import CardPage from '../../pages/CardPage/CardPage';

function AppRouts() {
  const { state, dispatch } = useContext(AppContext);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="film" element={<CardPage {...state.userSelect} />} />
      <Route path="about" element={<AboutUs />} />
      <Route path="profile" element={<Profile />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRouts;
