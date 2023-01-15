import './App.css';
import React from 'react';
import GeneralInfo from './components/GeneralInfo'
import EduInfo from './components/EduInfo';
import PracInfo from './components/PracInfo';

class App extends React.Component{

  submitClk = (e) => {
    e.preventDefault();
    this.state.edit? this.setState({edit:false}): this.setState({edit:true})
  }

  render(){
    return(
      <div className='app'>
        <GeneralInfo submitClk={this.submitClk}/>
        <EduInfo />
        <PracInfo />
      </div>
    )
  }
}

export default App;
