import './App.css';
import React from 'react';
import GeneralInfo from './components/GeneralInfo'

class App extends React.Component{
  render(){
    return(
      <div className='app'>
        <GeneralInfo />
      </div>
    )
  }
}

export default App;
