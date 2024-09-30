import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {

    const currency = '$';
    const delivery_fee = 10;
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false)
    const [cartItems, setCartItems] = useState({});

    const addToCart = async(itemId, color) => {

        if (!color){
            toast.error('Select Product Color')
            return;
        }

        let cartData = structuredClone(cartItems);

        if (cartData[itemId]) {
            if (cartData[itemId][color]) {
                cartData[itemId][color] += 1;
            }
            else {
                cartData[itemId][color] = 1;
            }
        }
        else{
            cartData[itemId] = {};
            cartData[itemId][color] = 1;
        }
        setCartItems(cartData);
    }

    const getCartCount = () => {
        let totalCount = 0;
        for(const items in cartItems){
            for(const item in cartItems[items]){
                try{
                    if(cartItems[items][item] > 0){
                        totalCount += cartItems[items][item];
                    }
                }catch (error){

                }
            }
        }
        return totalCount;
    }

    const updateQuantity = async (itemId,color,quantity) => {

        let cartData = structuredClone(cartItems);

        cartData[itemId][color] = quantity;

        setCartItems(cartData);
    }

    const getCartAmount = () => {
        let totalAmount = 0;
        for(const items in cartItems){
            let itemInfo = products.find((product)=>product._id === items);
            for(const item in cartItems[items]){
                try{
                    if (cartItems[items][item] > 0){
                        totalAmount += itemInfo.price * cartItems[items][item];
                    }
                }catch(error){

                }
            }
        }
        return totalAmount;
    }

    // useEffect(()=>{
    //     console.log(cartItems);
        
    // },[cartItems])

    const value = {
        products, currency, delivery_fee, search, setSearch, showSearch,
        setShowSearch, cartItems, addToCart, getCartCount, updateQuantity, 
        getCartAmount
    }
    return(
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
} 

export default ShopContextProvider;