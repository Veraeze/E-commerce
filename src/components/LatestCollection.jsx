import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';

const LatestCollection = () => {

    const { products } = useContext(ShopContext);

    return (
    <div className='my-10'>
        <div className='text-center py-8 text-3x1'>
            <Title text1={'LATEST'} text2={'COLLECTIONS'}/>
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
            here are some gadgets thare very good and selling it out fast
            </p>
        </div>
      
    </div>
  )
}

export default LatestCollection
