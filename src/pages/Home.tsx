import React from 'react'

function Home() {
  return (
    <div>
      <div className="flex flex-col h-screen">
        <div className="bg-blue-500 flex-1 flex">
          <div className="sidebar">Sidebar</div>
          <div className="content-area">Content</div>
        </div>
        <div className="bg-blue-300">bot</div>
      </div>
    </div>
  )
}

export default Home
