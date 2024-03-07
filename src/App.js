import logo from './logo.svg';
import './App.css';
import Main from './components/Main';

import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Github from './components/Github';
import Demo from './components/Demo';
import Contributors from './components/Contributors';
import Advancements from './components/Advancements';
import Achievements from './components/Achievements';
import Document from "./components/Documents";




function App() {
  return (
    
  
    <Router>
        <Navbar/>
       <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/github" element={<Github/>}/>
        <Route path="/demo" element={<Demo/>}/>
        <Route path="/contributors" element={<Contributors/>}/>
        <Route path="/advancements" element={<Advancements/>}/>
        <Route path="/achievements" element={<Achievements/>}/>
        <Route path="/documents" element={<Document/>}/>
       </Routes>
        
    </Router>


  );
}


export default App;
