import { Assets } from '../assets/Assets';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='w-full bg-green-900 px-6 py-4 box-border'>
      <div className='flex items-center justify-start py-5 gap-5 px-10 text-white bg-black text-xl h-15 font-merriweather'>
        {/* Logo */}
        <img src={Assets.logo} alt="Logo" className='h-12 w-auto' />

        {/* Navigation Links */}
        <ul className='flex flex-row items-center justify-strt py-5 font-medium gap-8 w-full'>
          <NavLink to='/' className='flex flex-col gap-1 items-center hover:text-green-500'>
            <p>Home</p>
          </NavLink>
          <NavLink to='/about' className='flex flex-col gap-1 items-center hover:text-green-500'>
            <p>About</p>
          </NavLink>
          <NavLink to='/incomeTracker' className='flex flex-col gap-1 items-center hover:text-green-500'>
            <p>Income Tracker</p>
          </NavLink>
          <NavLink to='/expenseTracker' className='flex flex-col gap-1 items-center hover:text-green-500'>
            <p>Expense Tracker</p>
          </NavLink> 
        </ul>

        {/* Right-side Links */}
        <ul className='flex flex-row items-center justify-end py-5 font-medium gap-8 w-full'>
          <div className='flex gap-8'>
            <NavLink to='/startAChallenge' className='flex flex-col items-center gap-1 justify-around hover:text-green-500'>
              <p>Start A Challenge</p>
            </NavLink>
            <NavLink to='/login' className='flex flex-col items-center gap-1 justify- hover:text-green-500'>
              <p>Login</p>
            </NavLink>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
