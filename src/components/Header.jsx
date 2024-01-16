import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';

const Header = ()=>{

    const [btn,setBtn] = useState('Login');
    const clickHandle = ()=>{
        btn==="Login" ? setBtn("Logout") : setBtn("Login")
    }
    const status = useOnlineStatus();
    return (
        <div className='flex justify-between bg-slate-200'>
            <div className='logo'>
                <img className='w-16 mx-5 my-2' src="https://png.pngtree.com/png-clipart/20200727/original/pngtree-restaurant-logo-design-vector-template-png-image_5441058.jpg" alt="" />
            </div>
            <div className='flex justify-center items-center'>
                <ul className='flex mx-10'>
                    <li className='px-8 py-3 text-2xl font-semibold'><h3>status :{status ? "online" : "offline"}</h3></li>
                    <li className='px-8 py-3 text-2xl font-semibold'><Link to='/'>Home</Link></li>
                    <li className='px-8 py-3 text-2xl font-semibold'><Link to='/about'>About</Link></li>
                    <li className='px-8 py-3 text-2xl font-semibold'><Link to='/contact'>Contact</Link></li>
                    <li className='px-8 py-3 text-2xl font-semibold'><Link to='/cart'>Cart</Link></li>
                    <li className='px-8 py-3 text-2xl font-semibold'><button onClick={clickHandle}>{btn}</button></li>
                </ul>
            </div>
        </div>
    )
};
export default Header;