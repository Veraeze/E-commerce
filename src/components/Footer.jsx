import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>

      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-20 text-sm'>
         <div>
            <img className= 'mb-5 w-32' src={assets.logo} alt="" />
            <p className='w-full md:w-2/3 text-gray-600'>
            Codewithvera is an electronic store located in Lagos, Nigeria. We specialize in providing high quality guaranteed gadgets with great policies. Our experienced staff is eclectic and fun, and we keep up with the latest trends, so you don’t have to.
            </p>
         </div>

        <div>
         <p className='text-xl font-medium mb-5 py-8'>COMPANY</p>
         <ul className='flex flex-col gap-1 text-gray-600'>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
         </ul>
         </div>

         <div>
            <p className='text-xl font-medium mb-5 py-8'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-gray-699'>
                <li>+234-704-902-7507</li>
                <li>Veraeze18@gmail.com</li>
            </ul>
         </div>

      </div>

      <div>
        <hr />
        <p className='py-5 text-sm text-center'>Copyright 2024@ codewithvera.com - All Rights Reserved</p>
      </div>
    </div>
  )
}

export default Footer
