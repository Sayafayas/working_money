import React, { useState } from 'react';

const CalculatorBroker = () => {
    const [investment, setInvestment] = useState('');
    const [duration, setDuration] = useState('');
    const [result, setResult] = useState(null);

    const handleCalculate = () => {
        const calculatedValue = investment * Math.pow(1 + 0.07, duration); // Example formula
        setResult(calculatedValue.toFixed(2));
    };

    return (
        <div className="container">
            <h2>Broker Investment Calculator</h2>
            <div className="form-group">
                <label>Investment Amount (ILS):</label>
                <input
                    type="number"
                    className="form-control"
                    value={investment}
                    onChange={(e) => setInvestment(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label>Duration (years):</label>
                <input
                    type="number"
                    className="form-control"
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                />
            </div>
            <button className="btn btn-primary" onClick={handleCalculate}>
                Calculate
            </button>
            {result && <div className="alert alert-success mt-3">Projected Value: {result} ILS</div>}
        </div>
    );
};

export default CalculatorBroker;
