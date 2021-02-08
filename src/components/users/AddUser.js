import React, { useState } from "react";
import axios from 'axios'
import { useHistory } from "react-router-dom";

const AddUser = () => {
  let history = useHistory();
  const [user, setUser] = useState({
    name : "",
    fname: "",
    mname: "",  
    score: "",
    dob  : "",
    category:"",
    domicile:"",
    bcertificate:"",
    marksheet:"",
    police:"",
    passport:"",
    declaration:""
  });

  const { name, fname, mname, score, dob,category,domicile,bcertificate,marksheet,police,passport,declaration  } = user;
  
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    await axios.post("http://localhost:3003/users", user);

    history.push("/");
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Onboarding Form </h2>
        <form onSubmit={e => onSubmit(e)}>

        <div class="form-group row">
          <label for="inputPassword" class="col-sm-2 col-form-label">Student Name :</label>
          <div class="col-sm-10">
            <input
              type="text"
              className="form-control "
              placeholder="Enter Student Name"
              name="name"
              value={name}
              onChange={e => onInputChange(e)}
               required

               />
          </div>
          </div>

          <div class="form-group row">
          <label for="inputPassword" class="col-sm-2 col-form-label">Father's Name :</label>
          <div class="col-sm-10">
            <input
              type="text"
              className="form-control "
              placeholder="Father's Name "
              name="fname"
              value={fname}
              onChange={e => onInputChange(e)}
              required
            />
          </div>
          </div>

          <div class="form-group row">
          <label for="inputPassword" class="col-sm-2 col-form-label">Mother's Name :</label>
          <div class="col-sm-10">
            <input
              type="text"
              className="form-control"
              placeholder="Mother's Name"
              name="mname"
              value={mname}
              onChange={e => onInputChange(e)}
              required
            />
          </div>
          </div>

          <div class="form-group row">
          <label for="inputPassword" class="col-sm-2 col-form-label">Last Class Score :</label>
          <div class="col-sm-10">
            <input
              type="text"
              className="form-control "
              placeholder="Last Class Score.."
              name="score"
              value={score}
              onChange={e => onInputChange(e)}
              required
            />
          </div>
          </div>


          <div class="form-group row">
          <label for="inputPassword" class="col-sm-2 col-form-label"> DOB:</label>
          <div class="col-sm-10">
            <input
              type="text"
              className="form-control "
              placeholder="Enter Your  Date of Birth .."
              name="dob"
              value={dob}
              onChange={e => onInputChange(e)}
              required 
            />
          </div>
          </div>


          <div class="form-group row">
            <label for="inputState" class="col-sm-2 col-form-label">Category: </label>
            <div class="col-sm-10">
            <select
             id="inputState" 
             className="form-control " 
             name="category" 
             value={category}
             onChange={e => onInputChange(e)}
             required >

            <option selected>Select</option>
            <option >International</option>
            <option>Domestic</option>
             </select>
             </div>
          </div>
            

          <p>Documents Available  :</p>

          <div class="form-group row">
            <label for="inputState" class="col-sm-2 col-form-label">Domicile: </label>
            <div class="col-sm-10">
            <select
             id="inputState"
             className="form-control "
             name="domicile" 
             value={domicile}
             onChange={e => onInputChange(e)}
             required pattern="Yes"
              >
            <option selected>Select</option>
            <option >Yes</option>
            <option>No</option>
             </select>
             </div>
          </div>

          <div class="form-group row">
            <label for="inputState" class="col-sm-2 col-form-label">Birth Certificate: </label>
            <div class="col-sm-10">
            <select 
            id="inputState" 
            className="form-control "
            name="bcertificate" 
             value={bcertificate}
             onChange={e => onInputChange(e)}
             required pattern="Yes"
            > 
            <option selected>Select</option>        
            <option >Yes</option>
            <option>No</option>
             </select>
             </div>
          </div>

          <div class="form-group row">
            <label for="inputState" class="col-sm-2 col-form-label">Marksheet: </label>
            <div class="col-sm-10">
            <select 
            id="inputState" 
            className="form-control "
            name="marksheet" 
            value={marksheet}
            onChange={e => onInputChange(e)}
            required pattern="Yes"
            >
            <option selected>Select</option>
            <option >Yes</option>
            <option>No</option>
             </select>
             </div>
          </div>

          <div class="form-group row">
            <label for="inputState" class="col-sm-2 col-form-label">police clearance: </label>
            <div class="col-sm-10">
            <select
             id="inputState" 
             className="form-control "
             name="police" 
             value={police}
             onChange={e => onInputChange(e)}
             required pattern="Yes"
             >
            <option selected>Select</option>
            <option >Yes</option>
            <option>No</option>
             </select>
             </div>
          </div>

          <div class="form-group row">
            <label for="inputState" class="col-sm-2 col-form-label">Passport: </label>
            <div class="col-sm-10">
            <select
             id="inputState"
            className="form-control "
            name="passport" 
            value={passport}
            onChange={e => onInputChange(e)}
            required pattern="Yes"
            >
            <option selected>Select</option>
            <option >Yes</option>
            <option>No</option>
             </select>
             </div>
          </div>

          <div class="form-group row">
            <label for="inputState" class="col-sm-2 col-form-label">Declaration : </label>
            <div class="col-sm-10">
            <select
             id="inputState"
            className="form-control "
            name="declaration" 
            value={declaration}
            onChange={e => onInputChange(e)}
            required pattern="Yes"
            >
            <option selected>Select</option>
            <option >Yes</option>
            <option>No</option>
             </select>
             </div>
          </div>




          <button className="btn btn-primary btn-block"> OnBoard</button>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
