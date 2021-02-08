import React from "react";
import { Link } from 'react-router-dom'



function validate(email, password) {
    return {
        email: email.length === 0,
        password: password.length === 0,
    };
}

class login extends React.Component {
    constructor() {
        super();
        this.state = {
            email: 'a@gmail.com',
            password: 'password',
            everFocusedEmail: false,
            everFocusedPassword: false,
        };
    }

handleEmailChange = (evt) => {
    this.setState({ email: evt.target.value });
}

handlePasswordChange = (evt) => {
    this.setState({ password: evt.target.value });
}

handleSubmit = (evt) => {
    if (!this.canBeSubmitted()) {
        evt.preventDefault();
        return;
    }
}

canBeSubmitted() {
    const errors = validate(this.state.email, this.state.password);
    const isDisabled = Object.keys(errors).some(x => errors[x]);
    return !isDisabled;
}

render() {
    const errors = validate(this.state.email, this.state.password);
    const isDisabled = Object.keys(errors).some(x => errors[x]);
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-md-offset-4 vertical-center col-sm-8 col-sm-offset-2">
                        <div className="card loginFormDiv">
                            <h3> Admin Login</h3>
                            <form name="loginForm" onSubmit={this.handleSubmit}>
                                <div className="loginForm">
                                    <div className="input-group formInputDiv">
                                      <span className="input-group-addon">
                                        <span className="glyphicon glyphicon-envelope"></span>
                                      </span>
                                        <input type="text" className={`form-control loginForm ${errors.email ? "error" : ""}`} value={this.state.email}
                                               onChange={this.handleEmailChange} placeholder="Enter your email"></input>
                                    </div>
                                    <div className="input-group formInputDiv">
                                      <span className="input-group-addon">
                                          <span className="glyphicon glyphicon-filter"></span>
                                      </span>
                                        <input type="password" className={`form-control loginForm  ${errors.password ? "error" : ""}`}
                                               onChange={this.handlePasswordChange} placeholder="Enter your password"></input>
                                    </div>
                                    <div className="text-right">
                                        <Link to={'/home'}><button type="submit" className="btn btn-primary loginBtn" disabled={isDisabled}>Log In</button></Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
    }
}
    export default login;