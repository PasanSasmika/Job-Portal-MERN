import React from 'react'
import { FaEnvelopeCircleCheck } from "react-icons/fa6";
import { PiReadCvLogoBold } from "react-icons/pi";


function Newsletter() {
  return (
    <div>
        <div>
        <h3 className='text-lg font-bold mb-2 flex items-center gap-2'>
            <FaEnvelopeCircleCheck/>
            Email me for jobs</h3>

            
           
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum similique tempore consectetur.</p>

            <div>
                <input type="email" name="email" id="email" placeholder='name@gmail.com'  className='w-full block py-2 pl-3 border focus:outline-none'/>
                <input type="submit" value={"Subscribe"}  className='w-full block py-2 pl-3 border focus:outline-none bg-blue rounded-sm text-white cursor-pointer font-semibold'/>
            </div>
        </div>

        <div className='mt-24'>
        <h3 className='text-lg font-bold mb-2 flex items-center gap-2'>
            <PiReadCvLogoBold/>
            Get noticed faster</h3>

            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum similique tempore consectetur.</p>

            <div>
                <input type="submit" value={"Upload your resume"}  className='w-full block py-2 pl-3 border focus:outline-none bg-blue rounded-sm text-white cursor-pointer font-semibold'/>
            </div>
        </div>
    </div>
  )
}

export default Newsletter