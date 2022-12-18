import React from 'react';
import './dashboard.scss';
import SideBar from '../dashboardSideBar/SideBar';
import { FcBullish } from 'react-icons/fc';
import { FcBusiness } from 'react-icons/fc';
import { BsFillCartCheckFill } from 'react-icons/bs';

const Dashboard = () => {
  return (
    <main className='dashBoard'>
      <SideBar />
      <section className='dashboard-container'>
        <div className='flex-container'>
          <div className='flex-car'>
            {/* Card */}
            <div className='flex-card'>
              <div className='card'>
                <span>
                  <FcBullish />
                </span>
                <p>$2,345,000</p>
                <h4>product grow</h4>
              </div>
              <div className='card'>
                <span>
                  <BsFillCartCheckFill />
                </span>
                <p>€4,234,000</p>
                <h4>Product Sales</h4>
              </div>
              <div className='card'>
                <span>
                  <FcBusiness />
                </span>
                <p>€4,234,000</p>
                <h4>Product Sales</h4>
              </div>
            </div>
            {/* Trade Chart */}
            <div>
              <div>trade</div>
              <div>trade</div>
            </div>
          </div>
          {/* Product Ranking */}
          <aside>
            <h1>Product ranking</h1>
          </aside>
        </div>
        <div>
          {/* Last transaction */}
          <div>
            <h2>Last Transaction</h2>
          </div>
          <div>
            <h2>map</h2>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Dashboard;
