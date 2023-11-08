import React from 'react'


function SideBar() {
  return (
    <div>
      <div className="fixed top-0 left-0 z-50 w-64 h-full p-4 bg-gray-900">
        <a href="#" className="flex items-center pb-4 border-b border-b-gray-600">
          <span className="ml-3 text-lg font-bold text-white">DAD USS</span>
        </a>
        <ul className="mt-4">
          <li className="mb-1 group active">
            <a href="#" className="flex items-center px-4 py-2
             text-gray-300 bg-gray-800 rounded-md hover:bg-gray-950
              hover:text-gray-100">
              <span className="text-sm">Dashboard</span>
            </a>
          </li>
          <li className="mb-1 group active">
            <a href="#" className="flex items-center px-4 py-2 text-gray-300 bg-gray-800 rounded-md hover:bg-gray-950 hover:text-gray-100">
              <span className="text-sm">Propiedades</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}


export default SideBar