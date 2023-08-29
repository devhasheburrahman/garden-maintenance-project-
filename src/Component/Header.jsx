import React from 'react';

const Header = () => {
    return (
        <div>
            <div className='bg-[#2E6764] h-[950px] px-[100px]'>
                <div className="hero min-h-screen relative bg-[#2E6764]">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <img src="/girl.jpg" className=" w-[700px]" />
                        <div>
                            <p className='text-[#84F7D2] font-[Inter] text-base'>FEEDING OUR WORLD AND OUR FUTURE</p>
                            <p className='text-[80px] mt-[20px] leading-[91px] tracking-[-1px] font-[Inter] '>Garden Maintenance & Gardening Services</p>
                            <button className="btn mt-[56px] border-[2px] font-[Inter] leading-[36px] tracking-[-1px] btn-outline rounded-full"><img src="/icon1.png" alt="" />Watch the video</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-[#EFF6F6]'>
                <div className=" min-h-screen bg-[#FFF] absolute  p-[68px] ml-[100px] mt-[-163px]">
                    <div className="hero-content  flex-col lg:flex-row-reverse">
                        <div className='w-1/2 '>
                            <img src="/girl2.jpg" className="h-750px" />
                        </div>
                        <div className='w-1/2 px-5 bg-white'>
                            <p className='text-[#3E877C] font-[Inter] mb-5 text-base '>We proudly work with the most innovative growers</p>
                            <h1 className='text-[#103E41] font-[Inter] text-[40px] leading-[48px] tracking-[-1px]'>“I believe in the FarmWise technology and in the potential of their team beyond weeding. I'm convinced there's an increasing need for technology on the farm that FarmWise can fill.”</h1>
                            <div className='flex mt-[70px] gap-5 items-center'>
                                <img className='w-20 h-20 rounded-full' src="/user.png" alt="" />
                                <div>
                                    <p>Mark Mason</p>
                                    <p>Form Input Manager FarmTree</p>
                                </div>
                            </div>
                            <button className="text-black text-xl mt-[70px] font-semibold  bg-[#FF9869] px-[70px] py-[16px] rounded-full">1/3</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Header;