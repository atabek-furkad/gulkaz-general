import React from 'react';
import {
  XAxis,
  CartesianGrid,
  Tooltip,
  Bar,
  Area,
  ComposedChart,
  Line,
} from 'recharts';

const data = [
  {
    name: 'January',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'February',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'March',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'April',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'May',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'June',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'July',
    uv: 2000,
    pv: 9800,
    amt: 2100,
  },
];

const SaleRevenue = () => {
  return (
    <div>
      <ComposedChart width={280} height={230} data={data}>
        <XAxis dataKey='name' />
        <Tooltip />
        <CartesianGrid stroke='#f5f5f5' />
        <Area type='monotone' dataKey='amt' fill='#8884d8' stroke='#8884d8' />
        <Bar dataKey='pv' barSize={20} fill='#413ea0' />
        <Line type='monotone' dataKey='uv' stroke='#ff7300' />
      </ComposedChart>
    </div>
  );
};

export default SaleRevenue;
