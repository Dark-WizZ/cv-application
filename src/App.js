import './App.css';
import React from 'react';
import GeneralInfo from './components/GeneralInfo'
import EduInfo from './components/EduInfo';
import PracInfo from './components/PracInfo';

function App(){
  return(
    <div className='app'>
      <GeneralInfo/>
      <EduInfo />
      <PracInfo />
    </div>
  )
}

export default App;
