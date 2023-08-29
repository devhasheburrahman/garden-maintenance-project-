import React from 'react';

const Priority = () => {
    return (
        <div>
            <div className='bg-[#2E6764]   px-[100px]'>
                <div className="hero min-h-screen   bg-[#2E6764]">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <img src="/girl.jpg" className="h-[500px] w-[500px]" />
                        <div>
                            <p className='text-[64px] mt-[20px] leading-[76px] tracking-[-1px] font-[Inter] text-[#FFF] '>We Give The Most Priority To Our User So We Are Special</p>
                            <p className='text-[18px] mt-[20px] leading-[32px] tracking-[-1px] text-[#FFF] font-[Inter]'> Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati</p>

                            <div className='flex gap-[112px]'>
                                <div className='flex flex-col gap-5 mt-2'>
                                    <h1 className='font-[Inter] text-[50px] leading-[60px] tracking-[-1px] text-white'>204</h1>
                                    <p className='font-[Inter] text-white text-[16px]'>Project Done</p>
                                </div>
                                <div className='flex flex-col gap-5 mt-2'>
                                    <h1 className='font-[Inter] text-[50px] leading-[60px] tracking-[-1px] text-white'>525 </h1>
                                    <p className='font-[Inter] text-white text-[16px]'>Happy client</p>
                                </div>
                                <div className='flex flex-col gap-5 mt-2'>
                                    <h1 className='font-[Inter] text-[50px] leading-[60px] tracking-[-1px] text-white'>10</h1>
                                    <p className='font-[Inter] text-white text-[16px]'>Plant Types</p>
                                </div>

                            </div>

                            <button className="btn mt-[56px] px-[30px]  font-[Inter] leading-[36px] tracking-[-1px] bg-white rounded-full"> Learn More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Priority;