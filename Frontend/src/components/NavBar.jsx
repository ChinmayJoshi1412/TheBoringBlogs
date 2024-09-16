import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import { useSelector } from "react-redux";
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa6";
import { useLogoutUserMutation } from "../slices/authapiendpoints";
import { useDispatch } from "react-redux";
import { logout } from "../slices/localauthslice";
import { toast } from "react-toastify";
import Hamburger from 'hamburger-react'
const NavBar = () => {
  const {userInfo} = useSelector((state)=>state.auth);
  const [menu, setmenu] = useState(false);
  const [navmenu, setnavmenu] = useState(false)
  const [logoutApiCall,{isLoading}] = useLogoutUserMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutHandler = async(e)=>{
    e.preventDefault();
    const res = await logoutApiCall();
    dispatch(logout());
    toast.success('User Logged Out');
    setnavmenu(false);
    setmenu(false);
    navigate('/');
    console.log(res);
  }
  return (
    <nav className="flex flex-row w-full p-4 items-end bg-slate text-white">
      <Link to='/'>
        <span className=" text-5xl font-bold">T
          <span className="text-3xl">
            he
            </span>
            B
            <span className="text-3xl">
              oring
            </span>
            B
            <span className="text-3xl">
            logs
          </span>
        </span>
      </Link>
      <div className="xs:hidden md:flex flex-row justify-start items-center ml-auto space-x-2">
        <Link to='/'>
        <div className="block group p-2 rounded transition duration-200ms">
          Home
          <div className="ml-auto h-1 bg-white w-1/2 rounded transition-all duration-200 group-hover:w-full"></div>
        </div>
        </Link>
        <Link to='/blogs'>
        <div className="block group p-2 rounded transition duration-200ms">
          All Blogs
          <div className="ml-auto h-1 bg-white w-1/2 rounded transition-all duration-200 group-hover:w-full"></div>
        </div>
        </Link>
        {userInfo?<>
        <Link to='/myblogs'>
        <div className="block group p-2 rounded transition duration-200ms">
          My Blogs
          <div className="ml-auto h-1 bg-white w-1/2 rounded transition-all duration-200 group-hover:w-full"></div>
        </div>
        </Link>
        <Link to='/createblog'>
        <div className="block group p-2 rounded transition duration-200ms">
          Create a blog
          <div className="ml-auto h-1 bg-white w-1/2 rounded transition-all duration-200 group-hover:w-full"></div>
        </div>
        </Link>
        </>:''}
        {userInfo?
          <div className="flex flex-col items-end  transition-all duration-200ms">
            <button type="button"
            className="flex w-full justify-center items-center space-x-2 rounded-md bg-teal px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-lightTeal transition duration-200ms" 
            onClick={()=>setmenu(!menu)}><text>{userInfo.name}</text>{menu?<FaAngleUp></FaAngleUp>:<FaAngleDown></FaAngleDown>} </button>
            {menu && <ul className="absolute w-32 mt-10 bg-teal text-white justify-end items-end rounded">
              <li className="hover:bg-lightTeal p-4 hover:rounded cursor-pointer" onClick={logoutHandler}>Logout</li>
              </ul>}
          </div>
          :
          <Link to='/auth' className="flex max-w-1/4 justify-center rounded-md bg-teal p-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-lightTeal">
            Login / Register
          </Link>}
      </div>
      <div className="md:hidden ml-auto">
      <Hamburger toggled={navmenu} toggle={setnavmenu} />
      </div>

    {navmenu && (
      <div className="md:hidden absolute flex flex-col items-end top-16 right-0 bg-lightSlate text-white p-4 space-y-2 rounded-lg shadow-md w-1/3 transition-all duration-200ms">
        <Link to='/'>
        <div className="flex flex-col items-end justify-end group p-2 rounded transition duration-200ms bg-slate w-full" onClick={()=>setnavmenu(false)}>
          Home
          <div className="ml-auto h-1 bg-white w-1/2 rounded transition-all duration-200 group-hover:w-full"></div>
        </div>
        </Link>
        <Link to='/blogs'>
        <div className="block group p-2 rounded transition duration-200ms bg-slate w-full" onClick={()=>setnavmenu(false)}>
          All Blogs
          <div className="ml-auto h-1 bg-white w-1/2 rounded transition-all duration-200 group-hover:w-full"></div>
        </div>
        </Link>
        {userInfo?<>
        <Link to='/myblogs'>
        <div className="block group p-2 rounded transition duration-200ms bg-slate w-full" onClick={()=>setnavmenu(false)}>
          My Blogs
          <div className="ml-auto h-1 bg-white w-1/2 rounded transition-all duration-200 group-hover:w-full"></div>
        </div>
        </Link>
        <Link to='/createblog'>
        <div className="block group p-2 rounded transition duration-200ms bg-slate w-full" onClick={()=>setnavmenu(false)}>
          Create a blog
          <div className="ml-auto h-1 bg-white w-1/2 rounded transition-all duration-200 group-hover:w-full"></div>
        </div>
        </Link>
        </>:''}
        {userInfo?
          <div className="flex flex-col items-end  transition-all duration-200ms">
            <button type="button"
            className="flex w-full justify-center items-center space-x-2 rounded-md bg-teal px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-lightTeal transition duration-200ms" 
            onClick={()=>setmenu(!menu)}><text>{userInfo.name}</text>{menu?<FaAngleUp></FaAngleUp>:<FaAngleDown></FaAngleDown>} </button>
            {menu && <ul className="absolute w-32 mt-10 bg-teal text-white justify-end items-end rounded">
              <li className="hover:bg-lightTeal p-4 hover:rounded cursor-pointer" onClick={logoutHandler}>{ isLoading?'Loading..':'Logout'}</li>
              </ul>}
          </div>
          :
          <Link to='/auth' className="flex max-w-1/4 justify-center rounded-md bg-teal p-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-lightTeal" onClick={()=>setnavmenu(false)}>
            Login / Register
          </Link>}
      </div>
    )}
    </nav>
)
}

export default NavBar