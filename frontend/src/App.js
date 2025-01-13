import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Comparison from './pages/Comparison';
import CalculatorBroker from './pages/CalculatorBroker';

function App() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/comparison" element={<Comparison />} />
                    <Route path="/calculator/broker" element={<CalculatorBroker />} />
                    <Route path="*" element={<h1>404 - Page Not Found</h1>} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
