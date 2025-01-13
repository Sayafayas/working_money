export const getComparisonData = async () => {
    // Mock data simulating API response
    return [
        {
            name: 'Broker',
            liquidity: 'High',
            fees: 'Low',
            taxes: 'Medium',
            risk: 'High',
        },
        {
            name: 'BeToBank',
            liquidity: 'Medium',
            fees: 'Medium',
            taxes: 'Low',
            risk: 'Low',
        },
        {
            name: 'Blink',
            liquidity: 'High',
            fees: 'High',
            taxes: 'Medium',
            risk: 'Medium',
        },
        {
            name: 'Insurance Programs',
            liquidity: 'Low',
            fees: 'Low',
            taxes: 'Low',
            risk: 'Low',
        },
    ];
};
