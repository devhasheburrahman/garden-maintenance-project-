import React from 'react';

const Testimonials = () => {
    return (
        <div className='bg-[#EFF6F6] pt-10'>
            <h1 className='text-center text-[#103E41] pb-5 text-[64px] font-[Inter] leading-[76px] tracking-[-1px]'>Testimonials</h1>
            <div className=' flex gap-5 px-[100px]'>


                <div className="card rounded-none  bg-white   ">
                    <figure className="px-5 pt-10">
                        <img src="user.png" alt="user" className="h-20 w-20 rounded-full" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-[#103E41] font-[Inter]">Hashebur Rahman</h2>
                        <hr className='h-[1px] text-[#2E67641A] w-full ' />
                        <p className='text-[#5A5A5A] font-[Inter] text-center leading-[33px]'>“Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.”</p>

                        <button className='text-[#3E877C] underline tracking-[-1px] leading-[36px] font-[Inter]'> View More</button>
                    </div>
                </div>
                <div className="card rounded-none bg-white   ">
                    <figure className="px-5 pt-10">
                        <img src="user.png" alt="user" className="h-20 w-20 rounded-full" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-[#103E41] font-[Inter]">Hashebur Rahman</h2>
                        <hr className='h-[1px] text-[#2E67641A] w-full ' />
                        <p className='text-[#5A5A5A] font-[Inter] text-center leading-[33px]'>“Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.”</p>

                        <button className='text-[#3E877C] underline tracking-[-1px] leading-[36px] font-[Inter]'> View More</button>
                    </div>
                </div>
                <div className="card rounded-none bg-white   ">
                    <figure className="px-5 pt-10">
                        <img src="user.png" alt="user" className="h-20 w-20 rounded-full" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-[#103E41] font-[Inter]">Hashebur Rahman</h2>
                        <hr className='h-[1px] text-[#2E67641A] w-full ' />
                        <p className='text-[#5A5A5A] font-[Inter] text-center leading-[33px]'>“Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.”</p>

                        <button className='text-[#3E877C] underline tracking-[-1px] leading-[36px] font-[Inter]'> View More</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Testimonials;