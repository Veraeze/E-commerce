import React, { useContext, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets';

const Collection = () => {

    const {products} = useContext(ShopContext);
    const [showFilter, setShowFilter] = useState(false);
  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      {/* filter options */}
      <div className='min-w-60'>
        <p className='my-2 text-xl flex items-center cursor-pointer gap-2' onClick={()=>setShowFilter(!showFilter)}>FILTERS
          <img className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} src={assets.dropdown_icon} alt="" />
        </p>
        
        {/* category filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
            <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
            <div className=' flex flex-col gap-2 text-sm font-light text-gray-700'>
              <p className='flex gap-2'>
                <input className='w-3' type="checkbox" value={'Phones'}/>
                Phones
              </p>
              <p className='flex gap-2'>
                <input className='w-3' type="checkbox" value={'Monitors'}/>
                Monitors
              </p>
              <p className='flex gap-2'>
                <input className='w-3' type="checkbox" value={'Speakers'}/>
                Speakers
              </p>
              <p className='flex gap-2'>
                <input className='w-3' type="checkbox" value={'Laptops'}/>
                Laptops
              </p>
              <p className='flex gap-2'>
                <input className='w-3' type="checkbox" value={'Mouse'}/>
                Mouse
              </p>
              <p className='flex gap-2'>
                <input className='w-3' type="checkbox" value={'Headphones'}/>
                Headphones
              </p>
            </div>
        </div>

        {/* subcategory filter */}
        <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '' : 'hidden'} sm:block`}>
            <p className='mb-3 text-sm font-medium'>BRAND</p>
            <div className=' flex flex-col gap-2 text-sm font-light text-gray-700'>
              <p className='flex gap-2'>
                <input className='w-3' type="checkbox" value={'Apple'}/>
                Apple
              </p>
              <p className='flex gap-2'>
                <input className='w-3' type="checkbox" value={'Huawei'}/>
                Huawei
              </p>
              <p className='flex gap-2'>
                <input className='w-3' type="checkbox" value={'Samsung'}/>
                Samsung
              </p>
              <p className='flex gap-2'>
                <input className='w-3' type="checkbox" value={'Dell'}/>
                Dell
              </p>
              <p className='flex gap-2'>
                <input className='w-3' type="checkbox" value={'B&O'}/>
                Bang & Olufsen
              </p>
              <p className='flex gap-2'>
                <input className='w-3' type="checkbox" value={'Hp'}/>
                Hp
              </p>
              <p className='flex gap-2'>
                <input className='w-3' type="checkbox" value={'Sony'}/>
                Sony
              </p>
              <p className='flex gap-2'>
                <input className='w-3' type="checkbox" value={'JBL'}/>
                JBL
              </p>
              <p className='flex gap-2'>
                <input className='w-3' type="checkbox" value={'Das'}/>
                Das
              </p>
              <p className='flex gap-2'>
                <input className='w-3' type="checkbox" value={'Onn'}/>
                Onn
              </p>
              <p className='flex gap-2'>
                <input className='w-3' type="checkbox" value={'Logitech'}/>
                Logitech
              </p>
            </div>
        </div>
      </div>

      {/* right side */}
      <div className='flex-1'>
        <div className='flex justify-between text-base sm:text-2xl mb-4'>

        </div>
      </div>


    </div>
  )
}

export default Collection
