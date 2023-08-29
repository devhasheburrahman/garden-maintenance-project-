import React from 'react';

const Specification = () => {
    return (
        <div className='flex pt-[150px] gap-10 bg-[#EFF6F6]  items-center px-[120px]'>
            <div>
                <img className='h-[550px] w-[550px]' src="/public/girl.jpg" alt="" />
            </div>
            <div className='w-1/2 pt-'>
                <p className='text-[#3E877C] font-[Inter] text-xl leading-[36px]'> SPECIFICATION PLANTS </p>
                <h5 className='font-[Inter] m text-[32px] text-[#103E41] leading-[44.8px]'> FarmWise leverages state-of-the-art technologies to perform plant-level interventions. Automating the weeding process in vegetables is our initial step.</h5>
                <button className="btn bg-[#FF9869] py-[16px] px-[70px] text-[#103E41] mt-[60px] btn-warning">Learn More</button>
            </div>
        </div>
    );
};

export default Specification;