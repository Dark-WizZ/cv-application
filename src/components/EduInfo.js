import React, {useState} from "react";

function EduInfo(){

  const [state, setState] = useState({
    schoolName: '',
    titleOfStudy: '',
    passedYear: '',
    edit: true,
  })

  let schoolNameIp;
  let passedYearIp;
  let titleOfStudyIp;

  const domCache = () => {
    schoolNameIp = document.querySelector('#school_name_ip');
    passedYearIp = document.querySelector('#passed_year_ip');
    titleOfStudyIp = document.querySelector('#title_of_study_ip');
  }

  const submitClk = (e) => {
    e.preventDefault();
    domCache();
    const {edit} = state;
    if(edit){
      setState({
        schoolName:schoolNameIp.value,
        titleOfStudy:titleOfStudyIp.value,
        passedYear:passedYearIp.value,
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
      <div className="educational">
        <h1 className="heading">EDUCATIONAL INFORMATION:</h1>
        <form className="info ip" onSubmit={submitClk}>
          <label htmlFor='school_name_ip'>School Name: </label>
          <input
            type='text' id='school_name_ip' defaultValue={state.schoolName}
          ></input>
          <label htmlFor='title_of_study_ip' defaultValue={state.titleOfStudy}>Title of Study: </label>
          <input type='text' id='title_of_study_ip' defaultValue={state.titleOfStudy}></input>
          <label htmlFor='passed_year_ip'>Passed Year: </label>
          <input
            type='number' min='1900' max='2030' step='1' id='passed_year_ip' defaultValue={state.passedYear}
          ></input>
          <button className="submit btn">SUBMIT</button>
        </form>
      </div>
    )
  }

  const output = ()=> {
    return(
      <div className="educational">
        <h1 className="heading">EDUCATIONAL INFORMATION:</h1>
        <form className="info op" onSubmit={submitClk}>
          <label htmlFor='school_name_op'>School Name: </label>
          <div id='school_name_op'>{state.schoolName}</div>
          <label htmlFor='title_of_study_op'>Title of Study: </label>
          <div id='title_of_study_op'>{state.titleOfStudy}</div>
          <label htmlFor='passed_year_op'>Passed Year: </label>
          <div id='paseed_year_op'>{state.passedYear}</div>
          <button className="edit btn">EDIT</button>
        </form>
      </div>
    )
  }

  return (state.edit)? input(): output(); 
}

export default EduInfo;