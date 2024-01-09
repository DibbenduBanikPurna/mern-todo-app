import React from 'react';
import {Link, Outlet} from "react-router-dom";

const Navbar = () => {
    const name=sessionStorage.getItem("name")
    console.log(name);
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to="/">BASIC_TO_DO</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home <span className="sr-only">Registration</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={"/login"}>Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/addtodo">Create-to-do</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link " to={"/todo"}> Todo</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link " to={"/profile"}><p className="text-primary">{name}</p> </Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <Outlet/>
        </>

    );
};

export default Navbar;