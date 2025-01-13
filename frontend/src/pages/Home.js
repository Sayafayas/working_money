import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="container">
            <h1>Welcome to Investment Comparison</h1>
            <p>Compare investment options and choose the best for your needs.</p>
            <nav>
                <Link to="/comparison" className="btn btn-primary">Compare Options</Link>
                <Link to="/calculator/broker" className="btn btn-secondary">Broker Calculator</Link>
            </nav>
        </div>
    );
};

export default Home;
