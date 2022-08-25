import { useState } from "react";
import "./App.css";
import FormInput from "./components/FormInput";
import Papa from "papaparse";

const App = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    mobilenumber: "",
    password: "",
    department: "",
    collegeid: "",
  });

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
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      label: "Username",
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
      name: "collegeid",
      type: "number",
      placeholder: "collegeid",
      label: "College Id",
      pattern: "^[A-Za-z0-9]{3,16}$",
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
    <div className="app" >
      <form onSubmit={handleSubmit}>
        <button onClick={() => console.log("Response submitted")}className="btn">Submit</button>
        <h1>Add Staff</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}

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

export default App;