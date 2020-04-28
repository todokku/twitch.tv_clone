import React from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom';

const GlobalNav = () => {
    return (
        <div>
            <Router>
                <nav className="navbar navbar-light bg-light">
                    <Link to="/">C-G-StreamLab</Link>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Index</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/streamshow">Watch</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/streamnew">Create</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/streamedit">Edit</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/streamdelete">Delete</Link>
                        </li>
                    </ul>
                </nav>
            </Router>
        </div>
    )
}

export default GlobalNav;