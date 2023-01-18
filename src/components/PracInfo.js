import React, {useState} from "react";

function PracInfo(){
  const [state, setState] = useState({
    companyName: '',
    positionTitle: '',
    mainTask: '',
    startDate: '',
    endDate: '',
    edit: true,
  });

  let companyNameIp, positionTitleIp, mainTaskIp, startDateIp, endDateIp;

  const domCache = () => {
    companyNameIp = document.querySelector('#company_name_ip');
    positionTitleIp = document.querySelector('#position_title_ip');
    mainTaskIp = document.querySelector('#main_task_ip');
    startDateIp = document.querySelector('#start_date_ip');
    endDateIp = document.querySelector('#end_date_ip');
  }

  const submitClk = (e) => {
    e.preventDefault();
    domCache();
    const {edit} = state;
    if(edit){
      setState({
        companyName: companyNameIp.value,
        positionTitle: positionTitleIp.value,
        mainTask: mainTaskIp.value,
        startDate: startDateIp.value,
        endDate: endDateIp.value,
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
      <div className="practical">
        <h1 className="heading">PRACTICAL INFORMATION:</h1>
        <form className="info ip" onSubmit={submitClk}>
          <label htmlFor='company_name_ip'>Comapany Name: </label>
          <input type='text' id='company_name_ip' 
            defaultValue={state.companyName}
          ></input>
          <label htmlFor='position_title_ip'>Position Title: </label>
          <input type='text' id='position_title_ip'
            defaultValue={state.positionTitle}
          ></input>
          <label htmlFor='main_task_ip'>Main Task: </label>
          <input type='text' id='main_task_ip'
            defaultValue={state.mainTask}
          ></input>
          <label htmlFor='start_date_ip'>Start Date: </label>
          <input type='date' id='start_date_ip'
            defaultValue={state.startDate}
          ></input>
          <label htmlFor='end_date_ip'>End Date: </label>
          <input type='date' id='end_date_ip'
            defaultValue={state.endDate}
          ></input>
          <button className="submit btn">SUBMIT</button>
        </form>
      </div>
    )
  }

  const output = () => {
    return(
      <div className="practical">
        <h1 className="heading">PRACTICAL INFORMATION:</h1>
        <form className="info op" onSubmit={submitClk}>
          <label htmlFor='company_name_op'>Comapany Name: </label>
          <div id='company_name_op'>{state.companyName}</div>
          <label htmlFor='position_title_op'>Position Title: </label>
          <div id='position_title_op'>{state.positionTitle}</div>
          <label htmlFor='main_task_op'>Main Task: </label>
          <div id='main_task_op'>{state.mainTask}</div>
          <label htmlFor='start_date_op'>Start Date: </label>
          <div id='start_date_op'>{state.startDate}</div>
          <label htmlFor='end_date_op'>End Date: </label>
          <div id='end_date_op'> {state.endDate}</div>
          <button className="edit btn">EDIT</button>
        </form>
      </div>
    )
  }

  return (state.edit)? input(): output();

}

export default PracInfo;