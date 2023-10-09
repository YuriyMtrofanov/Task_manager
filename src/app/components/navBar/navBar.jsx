import React from "react";
import "./navBar.css";

const NavBar = () => {
    return (
        // <nav className="navbar">
        //     <div className="nav-container">
        //         <ul className="nav">
        //             <li className="nav-item">First</li>
        //             <li className="nav-item">Second</li>
        //             <li className="nav-item">Third</li>
        //         </ul>
        //     </div>
        // </nav>
        <div className="nav-container">
            <div className="nav-block block-1">
                <div className="nav-item item-1">Logo</div>
                <div className="nav-item item-2">Main</div>
                <div className="nav-item item-3">Tasks</div>
                <div className="nav-item item-4">Important</div>
            </div>
            <div className="nav-block block-2">
                <div className="nav-item item-5">Login</div>
            </div>
            {/* <aside className="nav-item item-1">
                <nav>
                    <div className="nav-item item-2">Main</div>
                    <div className="nav-item item-3">Tasks</div>
                    <div className="nav-item item-4">Important</div>
                </nav>
                <nav>
                    <div className="nav-item item-5">Login</div>
                </nav>
            </aside> */}
        </div>
    );
};

export default NavBar;
