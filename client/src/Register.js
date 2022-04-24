import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './Login.css';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

export default function Register (){
        let navigate = useNavigate();
    const [data, setData] = useState({
        username: "",
        password: "",
        name: "",
        phone: "",
    });
    const { username, password, name, phone } = data;
    const onChangeField = (e) => {
        setData({
        ...data,
        [e.target.name]: e.target.value,
        });
    };
    const handleRegister = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("username", data.username);
        formData.append("password", data.password);
        formData.append("name", data.name);
        formData.append("phone", data.phone);
        axios.post("http://localhost:5000/user", formData).then((res) => {
        console.log(res.data.user);
        if (res.data.user !== null) {
            console.log("??????");
            localStorage.setItem("userId", res.data.user._id);
        }
        });
        navigate("../", { replace: true });
        alert("Resgiter done");
    };
    return (
     
       <div className="maincontainer">
        <div class="container-fluid">
            <div class="row no-gutter">
               
                <div class="col-md-6 d-none d-md-flex bg-image"></div>
                <div class="col-md-6 bg-light">
                    <div class="login d-flex align-items-center py-5">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-10 col-xl-7 mx-auto">
                                    <h3 class="display-4 mb-3">Sign Up Page!</h3>
                                    {/* <p class="text-muted mb-4">Create a login split page using Reactjs & Bootstrap 5.</p> */}
                                    <form>
                                        <div class="mb-3">
                                            <input id="inputEmail" type="text" placeholder="Username" required="" autofocus="" class="form-control rounded-pill border-0 shadow-sm px-4"  
                                            value={username}
                                            name="username"
                                            onChange={onChangeField}/>
                                        </div>
                                        <div class="mb-3">
                                            <input id="inputPassword" type="password" placeholder="Password" required="" class="form-control rounded-pill border-0 shadow-sm px-4 text-primary" 
                                            value={password}
                                            name="password"
                                            onChange={onChangeField}/>
                                        </div>
                                        <div class="mb-3">
                                            <input id="inputEmail" type="text" placeholder="Name" required="" autofocus="" class="form-control rounded-pill border-0 shadow-sm px-4"  
                                            value={name}
                                            name="name"
                                            onChange={onChangeField}/>
                                        </div>
                                        <div class="mb-3">
                                            <input id="inputPassword" type="text" placeholder="Phone Number" required="" class="form-control rounded-pill border-0 shadow-sm px-4 text-primary" 
                                            value={phone}
                                            name="phone"
                                            onChange={onChangeField}/>
                                        </div>
                                        <div class="d-grid gap-2 mt-2">
                                        <button type="submit" class="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm" onClick={(e) => handleRegister(e)}>Sign Up</button>
                                        </div>
                                        <p className="forgot-password text-right">
                                            Already registered <a href="/login">Sign In?</a>
                                        </p>
                                    </form>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
      </div>
      
)
}
