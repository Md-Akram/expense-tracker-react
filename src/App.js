import React from 'react'
import './App.css'
import { Balance } from './components/Balance.js'
import { Header } from './components/Header.js'
import { IncomeExpanses } from './components/IncomeExpanses.js'
import { TransectionList } from './components/TransectionList.js'
import { AddTransection } from './components/AddTransection.js'

function App() {
  return (
    <div className='App'>
      <Header />
      <div className='container'>
        <Balance />
        <IncomeExpanses />
        <TransectionList />
        <AddTransection />
      </div>
    </div>
  )
}

export default App
