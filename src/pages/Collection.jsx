import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem'

const Collection = () => {

    const {products} = useContext(ShopContext);
    const [showFilter, setShowFilter] = useState(false);
    const [filterProducts, setFilterProducts] = useState([]);
    const [category, setCategory] =useState([]);
    const [brand, setBrand] = useState([]);
    
    const toggleCategory = (event) => {

        if (category.includes(event.target.value)) {
          setCategory(prev => prev.filter(item => item !== event.target.value))
        }
        else{
          setCategory(prev => [...prev, event.target.value])
        }

    }

    const toggleBrand = (e) => {

      if (brand.includes(e.target.value)) {
        setBrand(prev => prev.filter(item => item !== e.target.value))
      }
      else{
        setBrand(prev => [...prev, e.target.value])
      }

    }

    const applyFilter = () => {

        let productsCopy = products.slice();

        if (category.length > 0) {
          productsCopy = productsCopy.filter(item =>category.includes(item.category))
        }

        setFilterProducts(productsCopy)

    }

    useEffect(()=>{
      setFilterProducts(products);
    })

      useEffect(() => {
        applyFilter();
      }, [category,brand])

  

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
                <input className='w-3' type="checkbox" value={'Phones'} onChange={toggleCategory}/>
                Phones
              </p>
              <p className='flex gap-2'>
                <input className='w-3' type="checkbox" value={'Monitors'} onChange={toggleCategory}/>
                Monitors
              </p>
              <p className='flex gap-2'>
                <input className='w-3' type="checkbox" value={'Speakers'} onChange={toggleCategory}/>
                Speakers
              </p>
              <p className='flex gap-2'>
                <input className='w-3' type="checkbox" value={'Laptops'} onChange={toggleCategory}/>
                Laptops
              </p>
              <p className='flex gap-2'>
                <input className='w-3' type="checkbox" value={'Mouse'} onChange={toggleCategory}/>
                Mouse
              </p>
              <p className='flex gap-2'>
                <input className='w-3' type="checkbox" value={'Headphones'} onChange={toggleCategory}/>
                Headphones
              </p>
            </div>
        </div>

        {/* subcategory filter */}
        <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '' : 'hidden'} sm:block`}>
            <p className='mb-3 text-sm font-medium'>BRAND</p>
            <div className=' flex flex-col gap-2 text-sm font-light text-gray-700'>
              <p className='flex gap-2'>
                <input className='w-3' type="checkbox" value={'Apple'} onChange={toggleBrand}/>
                Apple
              </p>
              <p className='flex gap-2'>
                <input className='w-3' type="checkbox" value={'Huawei'} onChange={toggleBrand}/>
                Huawei
              </p>
              <p className='flex gap-2'>
                <input className='w-3' type="checkbox" value={'Samsung'} onChange={toggleBrand}/>
                Samsung
              </p>
              <p className='flex gap-2'>
                <input className='w-3' type="checkbox" value={'Dell'} onChange={toggleBrand}/>
                Dell
              </p>
              <p className='flex gap-2'>
                <input className='w-3' type="checkbox" value={'B&O'} onChange={toggleBrand}/>
                Bang & Olufsen
              </p>
              <p className='flex gap-2'>
                <input className='w-3' type="checkbox" value={'Hp'} onChange={toggleBrand}/>
                Hp
              </p>
              <p className='flex gap-2'>
                <input className='w-3' type="checkbox" value={'Sony'} onChange={toggleBrand}/>
                Sony
              </p>
              <p className='flex gap-2'>
                <input className='w-3' type="checkbox" value={'JBL'} onChange={toggleBrand}/>
                JBL
              </p>
              <p className='flex gap-2'>
                <input className='w-3' type="checkbox" value={'Das'} onChange={toggleBrand}/>
                Das
              </p>
              <p className='flex gap-2'>
                <input className='w-3' type="checkbox" value={'Onn'} onChange={toggleBrand}/>
                Onn
              </p>
              <p className='flex gap-2'>
                <input className='w-3' type="checkbox" value={'Logitech'} onChange={toggleBrand}/>
                Logitech
              </p>
            </div>
        </div>
      </div>

      {/* right side */}
      <div className='flex-1'>

        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <Title text1={'ALL'} text2={'COLLECTIONS'}/>

          {/* sort products */}
          <select className='border-2 border-gray-300 text-sm px-2'>
            <option value="relevant">Sort by: Relevant</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>

        {/* map products */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
          {
            filterProducts.map((item, index)=>(
              <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
            ))
          }
        </div>
      </div>


    </div>
  )
}

export default Collection
