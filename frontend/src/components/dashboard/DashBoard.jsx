import React from 'react';
import './dashboard.scss';
import SideBar from '../dashboardSideBar/SideBar';
import { FcBullish } from 'react-icons/fc';
import { FcBusiness } from 'react-icons/fc';
import { BsFillCartCheckFill } from 'react-icons/bs';
import { BiChevronDown } from 'react-icons/bi';
import SaleChart from '../chart/SaleChart';
import SaleRevenue from '../chart/SaleRevenue';
import user from '../../images/user-transparent.png';
import map from '../../images/world-map-color.png';

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
                  <FcBullish className='icon' />
                </span>
                <div className='details'>
                  <p>$2,345,000</p>
                  <h4>product grow</h4>
                </div>
              </div>

              <div className='card'>
                <span>
                  <BsFillCartCheckFill className='icon' />
                </span>
                <div className='details'>
                  <p>€4,234,000</p>
                  <h4>Product Sales</h4>
                </div>
              </div>

              <div className='card'>
                <span>
                  <FcBusiness className='icon' />
                </span>
                <div className='details'>
                  <p>€4,234,000</p>
                  <h4>Product Sales</h4>
                </div>
              </div>
            </div>
            {/* Trade Chart */}
            <div className='chart'>
              <div className='sale-chart'>
                <span>
                  <p>Your Sale Analytics</p>
                  <p>
                    Monthly <BiChevronDown />
                  </p>
                </span>
                <SaleChart />
              </div>
              {/* Sale Revenue */}
              <div className='sale-chart'>
                <span>
                  <p>Your Revenue Analytics</p>
                  <p>
                    Monthly <BiChevronDown />
                  </p>
                </span>
                <SaleRevenue />
              </div>
            </div>
          </div>
          {/* Product Ranking */}
          <aside className='prod-ranking'>
            <span>
              <h1>Product ranking</h1>
              <p>
                Sort By <BiChevronDown />
              </p>
            </span>
            <div>
              <table>
                <tr>
                  <th>Name</th>
                  <th>Total Sale</th>
                  <th>Status</th>
                </tr>
                <tr>
                  <td>A Product</td>
                  <td>€20,000</td>
                  <td>On Sale</td>
                </tr>
                <tr>
                  <td>A Product</td>
                  <td>€20,000</td>
                  <td>On Sale</td>
                </tr>
                <tr>
                  <td>A Product</td>
                  <td>€20,000</td>
                  <td>On Sale</td>
                </tr>
                <tr>
                  <td>A Product</td>
                  <td>€20,000</td>
                  <td>On Sale</td>
                </tr>
                <tr>
                  <td>A Product</td>
                  <td>€20,000</td>
                  <td>On Sale</td>
                </tr>
                <tr>
                  <td>A Product</td>
                  <td>€20,000</td>
                  <td>On Sale</td>
                </tr>
              </table>
            </div>
          </aside>
        </div>
        <div className='transaction-container'>
          {/* Last transaction */}
          <div className='transaction'>
            <p>Last Transaction</p>
            <table>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Date</th>
                <th>Amount</th>
              </tr>
              <tr>
                <td>
                  <img src={user} alt='' />
                </td>
                <td>King</td>
                <td>05/1/23</td>
                <td>€23.00</td>
              </tr>
              <tr>
                <td>
                  <img src={user} alt='' />
                </td>
                <td>Queen</td>
                <td>05/1/23</td>
                <td>€23.00</td>
              </tr>
              <tr>
                <td>
                  <img src={user} alt='' />
                </td>
                <td>Princess</td>
                <td>05/1/23</td>
                <td>€23.00</td>
              </tr>
            </table>
          </div>
          <div className='map'>
            <span>
              <img src={map} alt='' />
            </span>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Dashboard;
