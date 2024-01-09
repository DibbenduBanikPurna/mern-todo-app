import React, {useState} from 'react';
import axios from "axios";
import {useNavigate} from "react-router-dom";

const Login = () => {
    const [users,setVerifyUser]=useState({})
    const [userToken,setUserToken]=useState({})
    console.log(userToken)
    const navigate=useNavigate()
    const handleBlur=(e)=>{
        const field=e.target.name;
        const value=e.target.value;
        const newData={...users}
        newData[field]=value
        setVerifyUser(newData)

    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        axios.post("http://localhost:5000/api/userlogin",users).then(res=>{
            if(res.status===200)
            {
                setUserToken(res.data);
                //console.log(res.data)
                sessionStorage.setItem("token",res.data.token)
                sessionStorage.setItem("name",res.data.data.userName)

                alert("Logged in success")
                navigate("/addtodo")
            }
            else{
                alert("Loggin in failed!")
            }
        }).catch((err)=>console.log(err))
    }

    return (
        <div className="container">
            <div className="row">

                <div className="col-md-3 m-auto bg-light">
                    <h2>Log In</h2>
                    <form onSubmit={handleSubmit}>
                        <input className="form-control" name="userName" onBlur={handleBlur} type="text" placeholder="Enter userName"/>
                        <br/>
                        <input name="password"  className="form-control" onBlur={handleBlur} type="password" placeholder="*****"/>
                        <br/>
                        <input type="submit" value="submit" className="btn btn-success form-control"/>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default Login;