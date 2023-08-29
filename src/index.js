import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './pages/navbar';
import MainCard from './pages/card/main';
import reportWebVitals from './reportWebVitals';
import NextCard from './pages/card/next';
import AboutCard from './pages/card/about';
import MemberCard from './pages/card/member';
import PastCard from './pages/card/past';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar/>
    <MainCard/>
    <NextCard/>
    <AboutCard/>
    <MemberCard/>
    <PastCard/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
