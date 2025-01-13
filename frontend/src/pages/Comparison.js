import React, { useEffect, useState } from 'react';
import { getComparisonData } from '../api/investments';

const Comparison = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await getComparisonData();
            setData(result);
        };
        fetchData();
    }, []);

    return (
        <div className="container">
            <h2>Comparison of Investment Options</h2>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Option</th>
                        <th>Liquidity</th>
                        <th>Fees</th>
                        <th>Taxes</th>
                        <th>Risk</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((option, index) => (
                        <tr key={index}>
                            <td>{option.name}</td>
                            <td>{option.liquidity}</td>
                            <td>{option.fees}</td>
                            <td>{option.taxes}</td>
                            <td>{option.risk}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Comparison;
