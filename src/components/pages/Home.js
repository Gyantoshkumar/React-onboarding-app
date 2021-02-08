import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import SearchPage from "./Searchpage";


const Home = () => {
  const [users, setUser] = useState([]);


  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:3003/users");
    setUser(result.data.reverse());
  };

  const deleteUser = async id => {
    await axios.delete(`http://localhost:3003/users/${id}`);
    loadUsers();
  };

  // let condition =  user.category === 'International';

  return (
    <div className="container">
      <div className="py-4">
        <h1>Student List </h1>
        <SearchPage />

        <div class="form-group row">
            <div class="col-sm-10">
            <select
             id="inputState" 
             className="form-control " 
             >

            <option selected>All</option>
            <option >International</option>
            <option>Domestic</option>
             </select>
             </div>
          </div>

        <table class="table border shadow">
          <thead class="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col"> Student Name</th>
              <th scope="col">Father Name</th>
              <th scope="col">Mother Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>


            {users.map((user, index) => (

              <tr>
                <th scope="row">{index + 1}</th>

                <td style={{ backgroundColor: user.category == "International" ? "blue" : "orange" }} >{user.name}</td>
                <td>{user.fname}</td>
                <td>{user.mname}</td>
                <td>
                  <Link class="btn btn-primary mr-2" to={`/users/${user.id}`}>
                    View
                  </Link>
                  <Link
                    class="btn btn-outline-primary mr-2"
                    to={`/users/edit/${user.id}`}
                  >
                    Edit
                  </Link>
                  <Link
                    class="btn btn-danger"
                    onClick={() => deleteUser(user.id)}
                  >
                    Delete
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
    </div>
  );
};

export default Home;
