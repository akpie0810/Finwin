import { useState } from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import About from './pages/About'
import IncomeTracker from './pages/IncomeTracker'
import ExpenseTracker from './pages/ExpenseTracker'
import StartAChallenge from'./pages/StartAChallenge'
import Login from './pages/Login'
import React from 'react'
function App() {
  return (  
      <div className='px-0 sm:px-[3vw] md:px-[3vw] lg:px-[3vw]'>
          <Navbar/>
          <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/about' element={<About/>} />
              <Route path='/incomeTracker' element={<IncomeTracker/>} />
              <Route path='/expenseTracker' element={<ExpenseTracker/>} />
              <Route path='/startAChallenge' element={<StartAChallenge/>} />
              <Route path='/login' element={<Login/>} />
          </Routes>
      </div>
    
  )
}

export default App
