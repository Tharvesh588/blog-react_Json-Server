import React from 'react'
import Sidebar from './components/Sidebar/Sidebar'
import Feed from './components/Feed/Feed'
import Recom from './components/Recomend/Recom'

function App() {
  return (
    <div className='d-flex  vh-100'>
        <div className='w-20'><Sidebar/></div>
        <div className='w-50'><Feed/></div>
        <div className='w-30'><Recom/></div>
    </div>
  )
}

export default App