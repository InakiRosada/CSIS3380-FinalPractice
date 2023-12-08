import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from './navbar';


export default function AddStudent() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [score, setScore] = useState('');
    const [letterGrade, setLetterGrade] = useState('');

    // variable to hold redirection
    const navigate = useNavigate();


    const onSubmit = (e) => {
        e.preventDefault();

        const data = {
            firstName,
            lastName,
            score,
            letterGrade,
        };

        

        axios.post('http://localhost:5001/grade/add', data)
            .then((res) => {
                console.log(res.data);
                // You might want to handle the success case, e.g., redirect or show a message.

                // sends the user back to the main page to show the data.
                navigate('/');
            })
            .catch((error) => {
                console.error('Error creating new grade:', error);
            });
    };

    return (
        <div>
          <Navbar />
    
          <h3>Create New Grade for Student</h3>
          <form onSubmit={onSubmit}>
            <div className="form-group">
              <label>First Name:</label>
              <input
                type="text"
                required
                className="form-control"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
    
            <div className="form-group">
              <label>Last Name:</label>
              <input
                type="text"
                required
                className="form-control"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
    
            <div className="form-group">
              <label>Score:</label>
              <input
                type="text"
                required
                className="form-control"
                value={score}
                onChange={(e) => setScore(e.target.value)}
              />
            </div>
    
            <div className="form-group">
              <label>Letter Grade:</label>
              <input
                type="text"
                required
                className="form-control"
                value={letterGrade}
                onChange={(e) => setLetterGrade(e.target.value)}
              />
            </div>
    
            <br />
    
            <div className="form-group">
            <input type="submit" value="Create New Grade" className="btn btn-primary" />
            </div>
          </form>
        </div>
      );
}
