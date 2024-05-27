import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './page/Home';
import Hotel from './page/Hotel';
import Pension from './page/Pension';
import Residence from './page/Residence';
import Motel from './page/Motel';
import CulturalFacilities from './page/CulturalFacilities';
import PerformanceEvent from './page/PerformanceEvent';
import TourCourse from './page/TourCourse';
import Leisure from './page/Leisure';
import Main from './Main';
import Mypage from './page/Mypage';
import Area from './page/Area';
import Around from './page/Around';
import Wishlist from './page/Wishlist';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App />  */}
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main/>}>
          <Route path='area' element={<Area/>} />
          <Route path='Around' element={<Around/>} />
          <Route path='wishlist' element={<Wishlist/>}/>
          <Route path='mypage' element={<Mypage/>}/>
          <Route path='home' element={<Home/>} as="/"/>
        </Route>
        <Route path='/hotel' element={<Hotel/>}/>
        <Route path='/pension' element={<Pension/>}/>
        <Route path='/residence' element={<Residence/>}/>
        <Route path='/motel' element={<Motel/>}/>
        <Route path='/cultural-facilities' element={<CulturalFacilities/>}/>
        <Route path='/performance-event' element={<PerformanceEvent/>}/>
        <Route path='/tour-course' element={<TourCourse/>}/>
        <Route path='/leisure' element={<Leisure/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
