import React,{useState} from "react";

function GeneralInfo(){
  const [state, setState] = useState({
    name: '',
    email: '',
    phone: '',
    edit: true,
  })

  let nameIp; let emailIp; let phoneIp;

  const domCache = () => {
    nameIp = document.querySelector('#name_ip');
    emailIp = document.querySelector('#email_ip');
    phoneIp = document.querySelector('#phone_ip');
  }

  const submitClk = (e) => {
    e.preventDefault();
    domCache();
    const {edit} = state;
    if(edit){
      setState({
        name:nameIp.value,
        email:emailIp.value,
        phone:phoneIp.value,
        edit:false,
      })
    }else{
      setState({
        ...state,
        edit:true
      })
    }
  }

  const input = () => {
    return(
      <div className="general">
        <h1 className="heading">GENERAL INFORMATION:</h1>
        <form className="info ip" onSubmit={submitClk}>
          <label htmlFor='name_ip'>Name: </label>
          <input type='text' id='name_ip' defaultValue={state.name}></input>
          <label htmlFor='email_ip'>Email: </label>
          <input type='text' id='email_ip' defaultValue={state.email}></input>
          <label htmlFor='phone_ip'>Phone: </label>
          <input type='number' id='phone_ip' defaultValue={state.phone}></input>
          <button className="submit btn">SUBMIT</button>
        </form>
      </div>
    )
  }
  const output= () => {
    return(
      <div className="general">
        <h1 className="heading">GENERAL INFORMATION:</h1>
        <form className="info op" onSubmit={submitClk}>
          <label htmlFor='name_op'>Name: </label>
          <div className='name_op'>{state.name}</div>
          <label htmlFor='email_op'>Email: </label>
          <div className='email_op'>{state.email}</div>
          <label htmlFor='phone_op'>Phone: </label>
          <div className='phone_op'>{state.phone}</div>
          <button className="edit btn">EDIT</button>
        </form>
      </div>
    )
  }

  return (state.edit)? input(): output();
}

export default GeneralInfo;