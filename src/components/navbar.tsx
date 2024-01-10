"use client"
import Image from "next/image"
import { useEffect, useState } from "react"

export default function Navabar(){
  const [isCollapsed, setIsCollapsed] = useState(true)
  
  const handleClick = () => {
    setIsCollapsed(!isCollapsed)
  }
  
  return (
    <nav className="flex items-center z-[100] justify-between flex-wrap bg-[#ac476c] p-6  top-0 w-full">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
      <Image
    src="/assets/logo.png"
    alt="Logo"
    width={54}
    height={54}
    className="fill-current h-8 w-8 mr-2"
  />
        <span className="font-semibold text-xl tracking-tight">The Golden Tent</span>
      </div>
      <div className="block lg:hidden">
        <button onClick={handleClick} className="flex items-center px-3 py-2 border rounded text-gray-200 border-gray-300 hover:text-white hover:border-white">
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
        </button>
      </div>
      <div className={`w-full flex-grow lg:flex lg:items-center lg:w-auto ${isCollapsed ? 'hidden' : 'block'}`}>
        <div className="text-sm lg:flex-grow">
          <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-300 mr-4">
            Vendors
          </a>
          <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-300 mr-4">
            Wedding Packages
          </a>
          <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-300 mr-4">
            About
          </a>
          <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-300 mr-4">
            Terms and Condtions
          </a>
        </div>
        <div>
          <a href="#" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-[#ac476c] hover:bg-white mt-4 lg:mt-0">Sign in</a>
        </div>
      </div>
    </nav>
  )
}
