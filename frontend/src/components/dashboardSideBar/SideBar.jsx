import React from 'react';
import { BsShop } from 'react-icons/bs';
import { BsFolder2Open } from 'react-icons/bs';
import { FiPlusCircle } from 'react-icons/fi';
import { BsCloudArrowUpFill } from 'react-icons/bs';
import { BsPersonCircle } from 'react-icons/bs';
import { BiLogOut } from 'react-icons/bi';

import './sidebar.scss';
import { Link } from 'react-router-dom';

const SideBar = () => {
  return (
    <aside className='aside'>
      <div className='center'>
        <ul>
          <li>
            <BsShop className='icon' />
            <span>DashBoard</span>
          </li>
          <div className='product'>
            <p>Product</p>
            <li>
              <BsFolder2Open className='icon' />
              <span>Show All Product</span>
            </li>
            <Link
              to='/profile/new-product'
              style={{ textDecoration: 'none', color: 'black' }}
            >
              <li>
                <FiPlusCircle className='icon' />
                <span>Add Product</span>
              </li>
            </Link>
            <li>
              <BsCloudArrowUpFill className='icon' />
              <span>Update Product</span>
            </li>
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
