import React from 'react';
import {Bar} from 'react-chartjs-2';

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [65, 59, 80, 81, 56, 55, 40]
    },
    {
      label: 'My Second dataset',
      backgroundColor: 'rgba(25,99,122,0.2)',
      borderColor: 'rgba(25,99,122,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(26,99,123,0.4)',
      hoverBorderColor: 'rgba(25,99,122,1)',
      data: [17, 29, 90, 100, 68, 54, 78]
    }
  ]
};

export default function BarChart (){
    return (
      <div>
        <h2>Bar Example (custom size)</h2>
        <Bar
          data={data}
          width={100}
          height={300}
          options={{
            maintainAspectRatio: false
          }}
        />
      </div>
    );
  }
