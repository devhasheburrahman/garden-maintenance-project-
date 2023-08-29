import React from 'react';

const Navbar = () => {
    return (
        <div className="navbar bg-[#2E6764] px-[100px]">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <a className='font-[Inter]  text-xl'> About</a>
                        <a className='font-[Inter]  text-xl'> Services</a>
                        <a className='font-[Inter]  text-xl'> Careers</a>


                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-[32px] font-[Inter]"><img className='h-10 w-10' src="/Mask group.png" alt="" /> Firm <span className='text-[32px] text-[#FF9869] font-[Inter]'>Tree</span></a>
            </div>
            <div className="hidden navbar-end lg:flex">
                <ul className="menu menu-horizontal">
                    <div className='flex justify-end gap-10'>
                        <a className='font-[Inter]  text-xl'> About</a>
                        <a className='font-[Inter]  text-xl'> Services</a>
                        <a className='font-[Inter]  text-xl'> Careers</a>

                    </div>
                </ul>
            </div>
            <div className='ml-5'>
                <a className="bg-[#FF9869] px-[32px] py-[16px] w-[200px] font-semibold text-black font-[Inter]">Customer Login</a>
            </div>
        </div>
    );
};

export default Navbar;