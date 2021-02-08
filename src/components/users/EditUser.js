import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

const EditUser = () => {
  let history = useHistory();
  const { id } = useParams();
  const [user, setUser] = useState({
    name: "",
    fname: "",
    mname: "",
    score: "",
    dob: "",
    category: "",
    domicile: "",
    bcertificate: "",
    marksheet: "",
    police: "",
    passport: "",
    declaration: ""
  });

  const { name, fname, mname, score, dob, category, domicile, bcertificate, marksheet, police, passport, declaration } = user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async e => {
    e.preventDefault();
    await axios.put(`http://localhost:3003/users/${id}`, user);
    history.push("/home");
  };

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:3003/users/${id}`);
    setUser(result.data);
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Edit A User</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Name"
              name="name"
              value={name}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Father's Name "
              name="fname"
              value={fname}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Mother's Name "
              name="mname"
              value={mname}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Your last Score in %"
              name="score"
              value={score}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Date of Birth  "
              name="dob"
              value={dob}
              onChange={e => onInputChange(e)}
            />
          </div>

          <div class="form-group row">
            <label for="inputState" class="col-sm-2 col-form-label">Category: </label>
            <div class="col-sm-10">
              <select
                id="inputState"
                className="form-control "
                name="category"
                value={category}
                onChange={e => onInputChange(e)} >

                <option selected>International</option>
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
              >
                <option selected>Select</option>
                <option>Yes</option>
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
              >
                <option selected>Select</option>
                <option >Yes</option>
                <option>No</option>
              </select>
            </div>
          </div>


          <button className="btn btn-warning btn-block">Update User</button>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
