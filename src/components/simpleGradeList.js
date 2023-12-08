import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './navbar';

export default function SimpleGradeList() {
    const [grades, setGradesList] = useState([]);

    useEffect(() => {
        axios
            .get('http://localhost:5001/grade/')
            .then((response) => {
                console.log(response);
                setGradesList(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const deleteGrade = (id) => {
        axios
            .delete(`http://localhost:5001/grade/delete/${id}`)
            .then((response) => {
                console.log(response.data);
                setGradesList(grades.filter((el) => el._id !== id));
            })
            .catch((error) => {
                console.error('Error deleting grade:', error);
            });
    };

    return (
        <div>
            <Navbar />

            <h3>Logged grade</h3>
            <table className="table">
                <thead>
                    <tr className="d-flex">
                        <th className="col-2">Firstname</th>
                        <th className="col-2">Lastname</th>
                        <th className="col-2">Score</th>
                        <th className="col-2">Letter Grade</th>
                        <th className="col-2">DELETE</th>
                    </tr>
                </thead>
                <tbody>
                    {grades.map((grade) => (
                        <tr key={grade._id} className="d-flex">
                            <td className="col-2">{grade.firstName}</td>
                            <td className="col-2">{grade.lastName}</td>
                            <td className="col-2">{grade.score}</td>
                            <td className="col-2">{grade.letterGrade}</td>
                            <td className="col-2">
                                <button onClick={() => deleteGrade(grade._id)}> Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
