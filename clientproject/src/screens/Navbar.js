import React from 'react'
// import PropTypes from 'prop-types'
import { Link, useHistory, useLocation } from "react-router-dom";


const Navbar = (props) => {
    let history = useHistory();
    const handleLogout = () => {
        localStorage.removeItem('token');
        history.push('/login');
    }

    let location = useLocation();
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Diagnosis</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname==="/"? "active" : ""}`} aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname==="/about"? "active" : ""}`} to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname==="/diseases"? "active" : ""}`} to="/diseases">Diseases</Link>
                        </li>

                    </ul>
                    {/* <div className="d-flex">
                        <div className="bg-primary rounded mx-2" style={{height: '30px', width: '30px'}}></div>
                    </div> */}
                    <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault" />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
                    </div>
                    {!localStorage.getItem('token')?<form className="d-flex">
                    <Link className="btn btn-outline-info mx-2" to="/login" role="button">Login</Link>
                    <Link className="btn btn-outline-info mx-2" to="/signup" role="button">Signup</Link>

                    </form>: <button onClick={handleLogout} className="btn btn-outline-info mx-2">Logout</button>}
                </div>
            </div>
        </nav>
    )
}

export default Navbar
