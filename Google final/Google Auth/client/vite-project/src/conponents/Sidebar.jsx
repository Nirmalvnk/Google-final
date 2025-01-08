
import React, { useState } from "react";
import { FaCloud, FaCog, FaDatabase, FaFile, FaListUl, FaTasks, FaBars } from "react-icons/fa";
import { GiCircuitry } from "react-icons/gi";
import { AiOutlineCloudSync } from "react-icons/ai";
import { Link, Outlet } from "react-router-dom";
import CloudMasaLogo from '../assets/cloudmasa.png';


const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle Sidebar visibility for small screens
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex w-full">
      {/* Toggle Button for Small Screens */}
      <button
        onClick={toggleSidebar}
        className="lg:hidden text-white p-2 m-2 bg-gray-800 rounded-md"
      >
        <FaBars />
      </button>

      {/* Main Sidebar */}
      <div className={`${isOpen ? "block" : "hidden"} lg:block flex`}>
        <div className="flex flex-col h-screen w-64 bg-gray-800 text-white p-4 relative">
          <div className="flex items-center mb-8">
          <img 
  src={CloudMasaLogo} 
  alt="CloudMasa Logo" 
  style={{ borderRadius: '50%' }} 
  className="w-8 h-8 mr-2" 
/>

  <h1 className="text-xl font-semibold text-white-500 hover:text-blue-400">
    CloudMasa
  </h1>
</div>

          <nav className="flex flex-col space-y-4 flex-grow">
            <SidebarItem
              title="Control Center"
              icon={<FaTasks />}
              to="/control-center"
            />
            <SidebarItem
              title="Modules"
              icon={<FaListUl />}
              to="/modules"
            />
            <SidebarItem
              title="Executer"
              icon={<FaListUl />}
              to="/sidebar/executer"
            />
            <SidebarItem
              title="Resources"
              icon={<FaDatabase />}
              to="/resources"
            />
            <SidebarItem
              title="Policies"
              icon={<FaFile />}
              to="/policies"
            />
            <SidebarItem
              title="Config"
              icon={<FaCog />}
              to="/config"
            />
            <SidebarItem
              title="SCM Connector"
              icon={<GiCircuitry />}
              to="/sidebar/scm-connector"
            />
            <SidebarItem
              title="Cloud Connector"
              icon={<AiOutlineCloudSync />}
              to="/sidebar/cloud-connector"
            />
          </nav>

          {/* Settings Icon at the Bottom-Left */}
          <div className="absolute bottom-4 left-0 group">
  <div className="flex items-center justify-center hover:bg-gray-700 rounded-full p-4 cursor-pointer transition duration-200 relative">
    <FaCog className="text-3xl text-white" />
    {/* Tooltip on hover */}
    <span className="absolute left-full ml-3 flex items-center justify-center w-20 h-12 bg-gray-700 text-white text-md rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200">
      Settings
    </span>
  </div>
</div>

         
        </div>
       
      </div>
      <div className="flex-1">
          <Outlet />
        </div>
    </div>
  );
};

const SidebarItem = ({ title, icon, to }) => (
  <Link
    to={to}
    className="flex items-center space-x-2 hover:bg-gray-700 rounded-md p-2 cursor-pointer transition duration-200"
  >
    <span className="text-lg">{icon}</span>
    <span className="text-md font-medium">{title}</span>
  </Link>
);

export default Sidebar;

