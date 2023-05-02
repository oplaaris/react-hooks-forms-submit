import React, { useState } from "react";

function Form(props) {
  const [firstName, setFirstName] = useState("Sylvia");
  const [lastName, setLastName] = useState("Woods");

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }
  function handleSubmit(event) {
  event.preventDefault();
  const formData = {firstName: e.target[0].value,lastName: e.target[1].value,};
  const dataArray =[...submittedData, formData];
  setSubmittedData(dataArray);

  props.sendFormDataSomewhere(formData);
  setFirstName("");
  setLastName("");
}
const listOfSubmissions = submittedData.map((data,index)=>{
  return(
    <div key={index}>{data.firstName}{data.lastName}</div>
  );
});

  return (
    <>
    <form onSubmit = {handleSubmit}>
      <input type="text" onChange={handleFirstNameChange} value={firstName} />
      <input type="text" onChange={handleLastNameChange} value={lastName} />
      <button type="submit">Submit</button>
    </form>
    
    {errors.length>0 ? errors.map((error,index )=>(<p key={index} style={{color:"red"}}>{error}</p>)):null}
     <h3> Submissions</h3>
    {listOfSubmissions}
    </>
  );
}

export default Form;
