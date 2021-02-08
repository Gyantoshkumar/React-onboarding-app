import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const User = () => {
  const [user, setUser] = useState({
    name: "",
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

const { id } = useParams();
useEffect(() => {
  loadUser();
}, []);

  
  const loadUser = async () => {
    const res = await axios.get(`http://localhost:3003/users/${id}`);
    setUser(res.data);
  };



  
  return (
    <div className="container py-4">
      <Link className="btn btn-primary" to="/home">
        back to Home
      </Link>
      <h1 className="display-3">Student Onboarding Details </h1>
      <h1> Student Id : {id}</h1>
      <hr />
      <div class="d-flex">
      <ul className="list-group w-50">
        <li className="list-group-item">Student Name: {user.name}</li>
        <li className="list-group-item">Father's Name: {user.fname}</li>
        <li className="list-group-item">Mother's Name: {user.mname}</li>
        <li className="list-group-item">Last Class Score : {user.score}</li>
        <li className="list-group-item">DOB: {user.dob}</li>
        <li className="list-group-item">Category: {user.category}</li>
      </ul>
      
        <ul className="list-group w-50" >
        <li className="list-group-item">Domicile: {user.domicile}</li>
        <li className="list-group-item">Birth Certificate: {user.bcertificate}</li>
        <li className="list-group-item">Marksheet: {user.marksheet}</li>
        <li className="list-group-item">Police clearance: {user.police}</li>
        <li className="list-group-item">Passport: {user.passport}</li>
        <li className="list-group-item">Declaration: {user.declaration}</li>
      </ul>
      </div>
    </div>
  );
};

export default User;
