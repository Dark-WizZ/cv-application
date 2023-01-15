import React from "react";

export default class GeneralInfo extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      name: '',
      email: '',
      phone: '',
      edit: true,
    }
  }

  domCache(){
    this.nameIp = document.querySelector('#name_ip');
    this.emailIp = document.querySelector('#email_ip');
    this.phoneIp = document.querySelector('#phone_ip');
  }

  submitClk = (e) => {
    e.preventDefault();
    this.domCache();
    const {edit} = this.state;
    if(edit){
      this.setState({
        name:this.nameIp.value,
        email:this.emailIp.value,
        phone:this.phoneIp.value,
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
      <div className="general">
        <h1 className="heading">GENERAL INFORMATION:</h1>
        <form className="info ip" onSubmit={this.submitClk}>
          <label htmlFor='name_ip'>Name: </label>
          <input type='text' id='name_ip' defaultValue={this.state.name}></input>
          <label htmlFor='email_ip'>Email: </label>
          <input type='text' id='email_ip' defaultValue={this.state.email}></input>
          <label htmlFor='phone_ip'>Phone: </label>
          <input type='number' id='phone_ip' defaultValue={this.state.phone}></input>
          <button className="submit btn">SUBMIT</button>
        </form>
      </div>
    )
  }
  output(){
    return(
      <div className="general">
        <h1 className="heading">GENERAL INFORMATION:</h1>
        <form className="info op" onSubmit={this.submitClk}>
          <label htmlFor='name_op'>Name: </label>
          <div className='name_op'>{this.state.name}</div>
          <label htmlFor='email_op'>Email: </label>
          <div className='email_op'>{this.state.email}</div>
          <label htmlFor='phone_op'>Phone: </label>
          <div className='phone_op'>{this.state.phone}</div>
          <button className="edit btn">EDIT</button>
        </form>
      </div>
    )
  }
}