import React from "react";

export default class PracInfo extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      companyName: '',
      positionTitle: '',
      mainTask: '',
      startDate: '',
      endDate: '',
      edit: true,
    }
  }

  domCache(){
    this.companyNameIp = document.querySelector('#company_name_ip');
    this.positionTitleIp = document.querySelector('#position_title_ip');
    this.mainTaskIp = document.querySelector('#main_task_ip');
    this.startDateIp = document.querySelector('#start_date_ip');
    this.endDateIp = document.querySelector('#end_date_ip');
  }

  submitClk = (e) => {
    e.preventDefault();
    this.domCache();
    const {edit} = this.state;
    if(edit){
      this.setState({
        companyName: this.companyNameIp.value,
        positionTitle: this.positionTitleIp.value,
        mainTask: this.mainTaskIp.value,
        startDate: this.startDateIp.value,
        endDate: this.endDateIp.value,
        edit:false,
      })
    }else{
      this.setState({edit:true})
    }
  }

  render(){
    return (this.state.edit)? this.input(): this.output();
  }

  input(){
    return(
      <div className="practical">
        <h1 className="heading">PRACTICAL INFORMATION:</h1>
        <form className="info ip" onSubmit={this.submitClk}>
          <label htmlFor='company_name_ip'>Comapany Name: </label>
          <input type='text' id='company_name_ip' 
            defaultValue={this.state.companyName}
          ></input>
          <label htmlFor='position_title_ip'>Position Title: </label>
          <input type='text' id='position_title_ip'
            defaultValue={this.state.positionTitle}
          ></input>
          <label htmlFor='main_task_ip'>Main Task: </label>
          <input type='text' id='main_task_ip'
            defaultValue={this.state.mainTask}
          ></input>
          <label htmlFor='start_date_ip'>Start Date: </label>
          <input type='date' id='start_date_ip'
            defaultValue={this.state.startDate}
          ></input>
          <label htmlFor='end_date_ip'>End Date: </label>
          <input type='date' id='end_date_ip'
            defaultValue={this.state.endDate}
          ></input>
          <button className="submit btn">SUBMIT</button>
        </form>
      </div>
    )
  }

  output(){
    return(
      <div className="practical">
        <h1 className="heading">PRACTICAL INFORMATION:</h1>
        <form className="info op" onSubmit={this.submitClk}>
          <label htmlFor='company_name_op'>Comapany Name: </label>
          <div id='company_name_op'>{this.state.companyName}</div>
          <label htmlFor='position_title_op'>Position Title: </label>
          <div id='position_title_op'>{this.state.positionTitle}</div>
          <label htmlFor='main_task_op'>Main Task: </label>
          <div id='main_task_op'>{this.state.mainTask}</div>
          <label htmlFor='start_date_op'>Start Date: </label>
          <div id='start_date_op'>{this.state.startDate}</div>
          <label htmlFor='end_date_op'>End Date: </label>
          <div id='end_date_op'> {this.state.endDate}</div>
          <button className="edit btn">EDIT</button>
        </form>
      </div>
    )
  }
}