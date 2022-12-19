import React from 'react';
import { BarChart, XAxis, CartesianGrid, Tooltip, Bar } from 'recharts';

const data = [
  {
    name: 'January',
    uv: 4000,
    pv: 2400,
  },
  {
    name: 'February',
    uv: 3000,
    pv: 1398,
  },
  {
    name: 'March',
    uv: 2000,
    pv: 9800,
  },
  {
    name: 'April',
    uv: 2780,
    pv: 3908,
  },
  {
    name: 'May',
    uv: 1890,
    pv: 4800,
  },
  {
    name: 'June',
    uv: 2390,
    pv: 3800,
  },
  {
    name: 'July',
    uv: 2000,
    pv: 9800,
  },
];

const SaleChart = () => {
  return (
    <div>
      <BarChart width={280} height={230} data={data}>
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='name' />
        <Tooltip />
        <Bar dataKey='pv' fill='#8884d8' />
        <Bar dataKey='uv' fill='#82ca9d' />
      </BarChart>
    </div>
  );
};

export default SaleChart;
