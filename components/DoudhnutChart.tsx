"use client"
import { ArcElement, Legend, Tooltip, Chart as ChartJS } from 'chart.js';
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({ accounts }: DoughnutChartProps) => {
    const data = {
        datasets: [{
            label: 'Banks',
            data: [1250, 2500, 3700],
            backgroundColor: ['#0747b6', '#2265d8', '#2f91fa'],
            borderWidth: 1
        }],
        labels: ['Bank One', 'Bank Two', 'Bank Three']
    };

    return (
        <>
            <Doughnut 
                 data={data}
                 options={{
                    cutout:'60%',
                    plugins:{
                        legend:{
                            display:false
                        }
                    }
                 }} 
            />
        </>
    );
};

export default DoughnutChart;
