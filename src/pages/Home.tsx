import React from 'react'
import Bottom from '../components/Bottom'
import Content from '../components/Content'
import Sidebar from '../components/Sidebar'

function Home() {
  return (
    <div>
      <div className="flex flex-col h-screen">
        <div className="flex-1 flex overflow-y-hidden">
          <Sidebar />
          <Content />
        </div>
        <Bottom />
      </div>
    </div>
  )
}

export default Home
