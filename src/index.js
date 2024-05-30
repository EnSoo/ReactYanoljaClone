import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Main from './Main';
import {legacy_createStore as createStore} from 'redux';
import Mypage from './tap/Mypage';
import Area from './tap/Area';
import Around from './tap/Around';
import Wishlist from './tap/Wishlist';
import Search from './page/Search';
import rootReducer from './redux/RootReducer';
import { Provider } from 'react-redux';
import LodgmentDetail from './page/LodgmentDetail';
// 보통 앱 전체에서 사용할 state를 store에 저장하기에.. 최상위.js에서 store를 생성함
const store=createStore( rootReducer ) //store에는 리듀서를 1개만 등록할 수 있음. 그래서 여러 리듀서를 묶어주는 기능이 존재함 combine


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    {/* <React.StrictMode> */}
      {/* <App />  */}
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path='/' element={<Main/>}>
            <Route path='area' element={<Area/>} />
            <Route path='Around' element={<Around/>} />
            <Route path='wishlist' element={<Wishlist/>}/>
            <Route path='mypage' element={<Mypage/>}/>
          </Route>
          <Route path='/search' element={<Search/>}/>
          <Route path='/lodgment' element={<LodgmentDetail/>}/>
        </Routes>
      </BrowserRouter>
    {/* </React.StrictMode> */}
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
