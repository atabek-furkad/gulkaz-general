import React from 'react';
import { BsShop } from 'react-icons/bs';
import { BsFolder2Open } from 'react-icons/bs';
import { FiPlusCircle } from 'react-icons/fi';
import { BsCloudArrowUpFill } from 'react-icons/bs';
import { BsPersonCircle } from 'react-icons/bs';
import { BiLogOut } from 'react-icons/bi';

import './sidebar.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const SideBar = () => {
  const [isActive, setActive] = useState(false);

  const toggleIsActive = () => {
    setActive(!isActive);
  };

  return (
    <aside className='aside'>
      <div className='center'>
        <ul>
          <Link
            to='/profile/dashboard'
            style={{ textDecoration: 'none', color: 'black' }}
          >
            <li className={isActive ? 'active' : null} onClick={toggleIsActive}>
              <BsShop className='icon' />
              <span>DashBoard</span>
            </li>
          </Link>
          <div className='product'>
            <p>Product</p>
            <Link
              to='/profile'
              style={{ textDecoration: 'none', color: 'black' }}
            >
              <li>
                <BsFolder2Open className='icon' />
                <span>Show All Product</span>
              </li>
            </Link>
            <Link
              to='/profile/new-product'
              style={{ textDecoration: 'none', color: 'black' }}
            >
              <li>
                <FiPlusCircle className='icon' />
                <span>Add Product</span>
              </li>
            </Link>
            <Link
              to='/profile'
              style={{ textDecoration: 'none', color: 'black' }}
            >
              <li>
                <BsCloudArrowUpFill className='icon' />
                <span>Update Product</span>
              </li>
            </Link>
          </div>

          <div className='user'>
            <p>User</p>
            <li>
              <BsPersonCircle className='icon' />
              <span>Profile</span>
            </li>
            <li>
              <BiLogOut className='icon' />
              <span>Logout</span>
            </li>
          </div>
        </ul>
      </div>
    </aside>
  );
};

export default SideBar;
