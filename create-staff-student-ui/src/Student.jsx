import { useState } from "react";
import "./student.css";
import FormInput from "./components/FormInput";
import Papa from "papaparse";

const Student = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    mobilenumber: "",
    password: "",
    department: "",
    rollnumber: "",
    parentnumber: "",
    batch:"",
  });

  // const navigate = useNavigate();

  //   const navigateToStudent = () => {
  //       navigate('/Student');
  //   };


  const [file, setFile] = useState();

  const fileReader = new FileReader();

  const handleOnChange = (e) => {
    setFile(e.target.files[0]);
  };

  const changeHandler = (event) => {
    Papa.parse(event.target.files[0], {
      header: true,
      skipEmptyLines: true,
      complete: function (results) {
        console.log(results.data)
      },
    });
    // console.log(event.target.files[0])
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (file) {
      fileReader.onload = function (event) {
        const csvOutput = event.target.result;

      };

      fileReader.readAsText(file);
    }
  };


  const inputs = [
    {
      id: 1,
      name: "name",
      type: "text",
      placeholder: "Username",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      label: "Name",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },
    {
      id: 3,
      name: "mobilenumber",
      type: "number",
      placeholder: "mobilenumber",
      label: "MobileNumber",
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 5,
      name: "department",
      type: "text",
      placeholder: "department",
      label: "Department",
      required: true,
    },
    {
      id: 6,
      name: "rollnumber",
      type: "number",
      placeholder: "rollnumber",
      label: "RollNumber",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
        id: 7,
        name: "parentnumber",
        type: "number",
        placeholder: "Mobilenumber",
        label: "Parent's Mobile",
        required: true,
      },
      {
        id: 8,
        name: "batch",
        type: "number",
        placeholder: "batch",
        label: "Batch",
        required: true,
      },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="Student">
      <form onSubmit={handleSubmit}>
        <button onClick={()=> console.log("Response submitted")} className="btn">Submit</button><br/>
        <h1>Add Student</h1><br/>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        {/* <div onChange={this.onChangeValue}> */}
        <label>Type</label><br/>
        <input type="radio" value="Hosteller" name="type" /> Hosteller <br/>
        <input type="radio" value="DayScholar" name="type" /> DayScholar <br/>
      
      
        <button onClick={() => console.log("CSV uploaded successfully")}>Upload CSV</button><br />
        <input
          type={"file"}
          id={"csvFileInput"}
          accept={".csv"}
          onChange={changeHandler}
        />
      </form>
    </div>
    
    
  );
};


export default Student;
