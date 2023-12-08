import React from 'react';
import {Link} from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
            <Link to="/" className="navbar-brand">
                Grades adder
            </Link>{' '}
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav mr-auto">
                    <li className="navbar-item">
                        <Link to="/" className="nav-link">
                            Grades
                        </Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/create" className="nav-link">
                            Add a Grade
                        </Link>    
                    </li>"
                </ul>
            </div>
        </nav>
    );
}