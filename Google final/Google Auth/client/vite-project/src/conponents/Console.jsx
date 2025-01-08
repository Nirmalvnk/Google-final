import React from 'react'

const Console = () => {
  return (
    <div>
      <div className="flex flex-col h-screen w-64 bg-gray-900 text-white p-4">
      <h2 className="text-xl font-semibold mb-4 border-b border-gray-700 pb-2">
        Console
      </h2>
      <div className="flex-1 overflow-y-auto">
        {/* Add your console content here */}
        <p className="text-gray-300 mb-2">Log entry 1</p>
        <p className="text-gray-300 mb-2">Log entry 2</p>
        <p className="text-gray-300 mb-2">Log entry 3</p>
      </div>
    </div>
    </div>
  )
}

export default Console
