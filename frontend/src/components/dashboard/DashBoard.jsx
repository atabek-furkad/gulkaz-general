import React from 'react';
import './dashboard.scss';
import SideBar from '../dashboardSideBar/SideBar';

const Dashboard = () => {
  return (
    <main className='dashBoard'>
      <SideBar />
      <section className='dashboard-container'>Dashboard</section>
    </main>
  );
};

export default Dashboard;
