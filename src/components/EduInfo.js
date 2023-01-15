import React from "react";

export default class EduInfo extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      schoolName: '',
      titleOfStudy: '',
      passedYear: '',
      edit: true,
    }
  }

  domCache(){
    this.schoolNameIp = document.querySelector('#school_name_ip');
    this.passedYearIp = document.querySelector('#passed_year_ip');
    this.titleOfStudyIp = document.querySelector('#title_of_study_ip');
  }

  submitClk = (e) => {
    e.preventDefault();
    this.domCache();
    const {edit} = this.state;
    if(edit){
      this.setState({
        schoolName:this.schoolNameIp.value,
        titleOfStudy:this.titleOfStudyIp.value,
        passedYear:this.passedYearIp.value,
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
      <div className="educational">
        <h1 className="heading">EDUCATIONAL INFORMATION:</h1>
        <form className="info ip" onSubmit={this.submitClk}>
          <label htmlFor='school_name_ip'>School Name: </label>
          <input
            type='text' id='school_name_ip' defaultValue={this.state.schoolName}
          ></input>
          <label htmlFor='title_of_study_ip' defaultValue={this.state.titleOfStudy}>Title of Study: </label>
          <input type='text' id='title_of_study_ip' defaultValue={this.state.titleOfStudy}></input>
          <label htmlFor='passed_year_ip'>Passed Year: </label>
          <input
            type='number' min='1900' max='2030' step='1' id='passed_year_ip' defaultValue={this.state.passedYear}
          ></input>
          <button className="submit btn">SUBMIT</button>
        </form>
      </div>
    )
  }

  output(){
    return(
      <div className="educational">
        <h1 className="heading">EDUCATIONAL INFORMATION:</h1>
        <form className="info op" onSubmit={this.submitClk}>
          <label htmlFor='school_name_op'>School Name: </label>
          <div id='school_name_op'>{this.state.schoolName}</div>
          <label htmlFor='title_of_study_op'>Title of Study: </label>
          <div id='title_of_study_op'>{this.state.titleOfStudy}</div>
          <label htmlFor='passed_year_op'>Passed Year: </label>
          <div id='paseed_year_op'>{this.state.passedYear}</div>
          <button className="edit btn">EDIT</button>
        </form>
      </div>
    )
  }
}