import React, {useState} from 'react';
import axios from "axios";

const UpdateProfile = () => {
    const [profile,setProfile]=useState({})
    const  handleChange=(e)=>{
        const field=e.target.name;
        const value=e.target.value
        const newData={...profile}
        newData[field]=value
        setProfile(newData)
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        axios.post("http://localhost:5000/api/updateProfile",profile,{
            headers:{
                token:sessionStorage.getItem('token')
            }
        }).then(res=>{
            if(res.status===200)
            {
                alert("Updated Success!")
            }
            else{
                alert("Update Failed!")
            }
        }).catch((err)=>console.log(err))
    }
    return (
        <div className="row ">

            <div className="col-md-3 m-auto bg-light">
                <h2 className="text-muted">Update Profile</h2>
                <form onSubmit={handleSubmit} className="">
                    <input name="firstName" className="form-control" onBlur={handleChange} type="text" placeholder="Enter Your First Name"/>
                    <br/>
                    <input name="lastName" onBlur={handleChange}  className="form-control"  type="text" placeholder="Enter Your Last Name"/>
                    <br/>

                    <input name="mobile" onBlur={handleChange}    className="form-control"  type="text" placeholder="Enter Your Contact No."/>
                    <br/>
                    <input name="city" onBlur={handleChange}  className="form-control"  type="text" placeholder="Enter Your City"/>
                    <br/>



                    <input className="btn btn-success form-control"   type="submit" value="Update"/>
                </form>
            </div>


        </div>
    );
};

export default UpdateProfile;