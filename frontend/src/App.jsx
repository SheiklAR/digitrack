import React from 'react'
import BranchTable from './components/BranchTable'
// import BranchForm from './components/BranchForm'
import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <div>
      {/* <BranchForm /> */}
      {/* <BranchTable /> */}
      <Outlet />
    </div>
  )
}

export default App