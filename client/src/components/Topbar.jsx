import React from 'react'
import logo from "@/assets/logo-white.png"
import { Button } from './ui/button'
import { Link } from 'react-router-dom'
import { MdLogin } from "react-icons/md";
import SearchBox from './SearchBox';
import { RouteSignIn } from '@/helpers/RouteName';

const Topbar = () => {
  return (
    <div className='flex justify-between items-center fixed w-full h-16 z-20 bg-gray-50 px-5 border-b'>
      <div>
        <img src={logo} alt="" />
      </div>

      <div className='w-[500px]'>
        <SearchBox />
      </div>

      <div>
        <Button asChild>
          
          <Link to={RouteSignIn}> <MdLogin />Sign In</Link>
        </Button>
      </div>
    </div>
  )
}

export default Topbar
