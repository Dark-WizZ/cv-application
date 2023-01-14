import React from "react";

export default class GeneralInfo extends React.Component{
  render(){
    return(
      <form className="general info">
        <label for='name_ip'>Name: </label>
        <input type='text' id='name_ip'></input>
        <label for='email_ip'>Email: </label>
        <input type='text' id='email_ip'></input>
        <label for='phone_no_ip'>Phone: </label>
        <input type='text' id='phone_no_ip'></input>
        <button className='edit'>Edit</button>
        <button className="sunmit">Submit</button>
      </form>
    )
  }
}