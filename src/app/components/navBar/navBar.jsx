import React from "react";
import { NavLink } from "react-router-dom";
import "./navBar.css";

const NavBar = () => {
    return (
        <div className="nav-container">
            <div className="nav-block block-1">
                <div className="nav-item item-1">
                    Logo
                </div>
                <div className="nav-item item-2">
                    <NavLink className="nav-link" to="/">Main</NavLink>
                </div>
                <div className="nav-item item-3">
                    <NavLink className="nav-link" to="/tasks">Tasks</NavLink>
                </div>
                <div className="nav-item item-4">
                    <NavLink className="nav-link" to="/important">Important</NavLink>
                </div>
            </div>
            <div className="nav-block block-2">
                <div className="nav-item item-5">Login</div>
            </div>
        </div>
    );
};

export default NavBar;
