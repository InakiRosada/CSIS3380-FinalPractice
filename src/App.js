import 'bootstrap/dist/css/bootstrap.min.css';
import SimpleGradeList from './components/simpleGradeList';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import AddStudent from './components/addStudent';

export default function App() {
    return (

        <BrowserRouter>
        <Routes>
            <Route path="/" exact element={<SimpleGradeList />} />
            <Route path="/create" element={<AddStudent />} />
        </Routes>
        </BrowserRouter>
        // <div className='App'>
        //     <SimpleGradeList />
        // </div>
    );
}