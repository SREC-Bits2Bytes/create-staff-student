import { useState } from "react";
import "./student.css";
import FormInput from "./components/FormInput";
import Papa from "papaparse";

const Student = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone_number: "",
    password: "",
    parent_contact_number: "",
    types:"", 
    department: "", 
    batch:"",
    rollno: "",
    tutor:"",
    image:"",
  });



<script src="https://js.stripe.com/v3/"></script>


const api = 'https://p2nzd3xj7i.execute-api.ap-south-1.amazonaws.com/dev/student-create';
async function postData(url = '', data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Access-Token': 'eyJraWQiOiJ0eU9LVHFIV1J2UDlNOGRVNDVQaHhRZkZDTndqRDQ4R3ltbVg4RDhmVmpFPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiI5OTg5NzAzYi1mYmIzLTQxYjEtOTk1NS1lNjU2M2Y0YTVjMDMiLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuYXAtc291dGgtMS5hbWF6b25hd3MuY29tXC9hcC1zb3V0aC0xX1ZiTUN4V1VxbyIsInZlcnNpb24iOjIsImNsaWVudF9pZCI6IjVkaDBpM3NjODh0N2Jwa2Q4b3FsMzMxYWVqIiwiZXZlbnRfaWQiOiIwZWJlNmY1Mi05NDhmLTQ0OTYtOTFlZS0wMGY0ODJhYTQ5ZTMiLCJ0b2tlbl91c2UiOiJhY2Nlc3MiLCJzY29wZSI6Im9wZW5pZCBlbWFpbCIsImF1dGhfdGltZSI6MTY2MTE2MDg3OSwiZXhwIjoxNjYxMjQ3Mjc5LCJpYXQiOjE2NjExNjA4NzksImp0aSI6IjkzNmZjNTJjLTg4OGEtNDU2NS1iYjMwLTVjYjY1MTFlMjI2ZiIsInVzZXJuYW1lIjoiOTk4OTcwM2ItZmJiMy00MWIxLTk5NTUtZTY1NjNmNGE1YzAzIn0.tboMmzP_acHTPibSmI2HBmK5J7kXpylCbqe_gr7vL0QTlA0i7nW2dtmEljDVmjby67CvF_32O5tFzVQ54wpPz_MOJ-Th_BUkgmDoOcoRbDyzW6y74vR89H4pPgF69UxCtW5GjMOan1Mmrvna8Da5Eh9E96iTL8SbrjwP7w-n04qEgd8-EoUKBF7PEqj4vs5Xc8Hm94SdK6egd9sx7G6aidG8P22lxG8eEFr5h0hqejOOgbXxSJ0zmx8CqKp48dAN6bvC1Y7Wq3CuVtlMGAhYAPtRxt4y1AS5YsWDJu-FS_KijAXqtkaIdq1DaizVBggy-o65DCxo4r7P8D5b3KzWfA',
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}


// export default function AxPostCreateStaff() {
  async function fetchData() {
    try {
      
      values.phone_number = "+91"+values.phone_number;
      
      console.log("dfh"+JSON.stringify(values));
      const data = await postData(api, values)
      // const response = await axios.post(api ,{values}, {
        //   headers: {
      //     "Access-Token": 'eyJraWQiOiJ0eU9LVHFIV1J2UDlNOGRVNDVQaHhRZkZDTndqRDQ4R3ltbVg4RDhmVmpFPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiI5OTg5NzAzYi1mYmIzLTQxYjEtOTk1NS1lNjU2M2Y0YTVjMDMiLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuYXAtc291dGgtMS5hbWF6b25hd3MuY29tXC9hcC1zb3V0aC0xX1ZiTUN4V1VxbyIsInZlcnNpb24iOjIsImNsaWVudF9pZCI6IjVkaDBpM3NjODh0N2Jwa2Q4b3FsMzMxYWVqIiwiZXZlbnRfaWQiOiIwZWJlNmY1Mi05NDhmLTQ0OTYtOTFlZS0wMGY0ODJhYTQ5ZTMiLCJ0b2tlbl91c2UiOiJhY2Nlc3MiLCJzY29wZSI6Im9wZW5pZCBlbWFpbCIsImF1dGhfdGltZSI6MTY2MTE2MDg3OSwiZXhwIjoxNjYxMjQ3Mjc5LCJpYXQiOjE2NjExNjA4NzksImp0aSI6IjkzNmZjNTJjLTg4OGEtNDU2NS1iYjMwLTVjYjY1MTFlMjI2ZiIsInVzZXJuYW1lIjoiOTk4OTcwM2ItZmJiMy00MWIxLTk5NTUtZTY1NjNmNGE1YzAzIn0.tboMmzP_acHTPibSmI2HBmK5J7kXpylCbqe_gr7vL0QTlA0i7nW2dtmEljDVmjby67CvF_32O5tFzVQ54wpPz_MOJ-Th_BUkgmDoOcoRbDyzW6y74vR89H4pPgF69UxCtW5GjMOan1Mmrvna8Da5Eh9E96iTL8SbrjwP7w-n04qEgd8-EoUKBF7PEqj4vs5Xc8Hm94SdK6egd9sx7G6aidG8P22lxG8eEFr5h0hqejOOgbXxSJ0zmx8CqKp48dAN6bvC1Y7Wq3CuVtlMGAhYAPtRxt4y1AS5YsWDJu-FS_KijAXqtkaIdq1DaizVBggy-o65DCxo4r7P8D5b3KzWfA'
      //   },
      // });
    //   if (response.data) {
    //     console.log(response.data);
    //   } else {
    //     console.error("error");
    //   }
    } catch (error) {
      console.error(error);
    }
  }

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
      {
        id: 8,
        name: "tutor",
        type: "string",
        placeholder: "tutor",
        label: "Tutor",
        pattern: "^[A-Za-z0-9]{3,16}$",
        required: true,
      },
      {
        id: 8,
        name: "image",
        type: "string",
        placeholder: "Insert link",
        pattern: "^[A-Za-z0-9]{3,16}$",
        label: "Image",
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
      <button className="btn" onClick={fetchData}>Submit</button><br/>
        <h1>Add Student</h1>
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
      
      
        <button>Upload CSV</button><br />
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
