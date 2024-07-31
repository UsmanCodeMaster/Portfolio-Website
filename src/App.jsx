import React, { memo, useEffect, useState } from 'react'
import Header from './components/Header'
import MainContent from './components/MainContent'
import { Context } from './components/ContextStore/Context'
import Cart from './components/Cart'
import {Outlet} from 'react-router-dom'
import Sidebar from './components/Sidebar'

const App = () => {
  const [productList, setProductList] = useState([
      {
        imgURL: 'watch.jpg',
        name: 'Digital Watch',
        price: 149.00,
        withoutDiscount: 175.00,
        desc: "",
        quantity: 1,
        owner: "Usman Haider"
      },
      {
        imgURL: 'perfume.jpg',
        name: 'Viking Perfume',
        price: 149.00,
        withoutDiscount: 175.00,
        desc: "",
        quantity: 1,
        owner: "Awais Ali"
      },
      {
        imgURL: 'camera.jpg',
        name: 'Nikon Plus Camera',
        price: 149.00,
        withoutDiscount: 175.00,
        desc: "",
        quantity: 1,
        owner: "Aliyan Ali"
      },
      {
        imgURL: 'ladiesBag.jpg',
        name: 'Ladies Bag',
        price: 149.00,
        withoutDiscount: 175.00,
        desc: "",
        quantity: 1,
        owner: "Ihtisham"
      },
      {
        imgURL: 'facewash.jpg',
        name: 'Nivea Face Wash',
        price: 149.00,
        withoutDiscount: 175.00,
        desc: "",
        quantity: 1,
        owner: "Umer Ali"
      },
      {
        imgURL: 'mobileCover.jpg',
        name: 'Mobile Cover',
        price: 149.00,
        withoutDiscount: 175.00,
        desc: "",
        quantity: 1,
        owner: "Muhammad Tayyab"
      },
      {
        imgURL: 'shoes.jpg',
        name: 'Bata Shoes',
        price: 149.00,
        withoutDiscount: 175.00,
        desc: "",
        quantity: 1,
        owner: "Usman Haider"
      },
      {
        imgURL: 'dryer.jpg',
        name: 'Odeh Hair Dryer',
        price: 149.00,
        withoutDiscount: 175.00,
        desc: "",
        quantity: 1,
        owner: "Awais Ali"
      },
      {
        imgURL: 'chocoCorn1.webp',
        name: 'Brandy Mast Protein',
        price: 149.00,
        withoutDiscount: 175.00,
        desc: "",
        quantity: 1,
        owner: "John Wick"
      },
      {
        imgURL: 'chocoCorn2.webp',
        name: 'Classic Corn Protein',
        price: 149.00,
        withoutDiscount: 175.00,
        desc: "",
        quantity: 1,
        owner: "Batman"
      },
      {
        imgURL: 'chocoCorn3.webp',
        name: 'Creamy Vanilla Protein',
        price: 149.00,
        withoutDiscount: 175.00,
        desc: "",
        quantity: 1,
        owner: "Superman"
      },
  ])

  const createProduct = (a) => {
    setProductList([a, ...productList])
    console.log(productList);
  }

  const [cartProducts, setCartProducts] = useState([])
  const addToCart = (idx, quantity, product) => {
    function objectsAreEqual(obj1, obj2) {
      return Object.keys(obj1).every(key => obj1[key] === obj2[key]);
    }
    const exists = cartProducts.some(item => objectsAreEqual(item, productList[idx]));


    if (!product && !quantity && !exists) {      
      setCartProducts((currentCartData) => [productList[idx], ...currentCartData])
    }
    if (product && quantity && !exists) {
      setCartProducts((currentCartData) => [{...product, quantity}, ...currentCartData])      
    }
  }
  const removeFromCart = (idx) => {
    const remainingProducts = cartProducts.filter((product, pdx) => {
      return idx !== pdx
    })
    setCartProducts(remainingProducts)
  }

  const updateCartProductQuantity = (value, idx) => {
    if (typeof idx == 'number') {
      const updatedCartData = cartProducts.map((product, pdx) => {
        if (idx == pdx) {
          return {...product, quantity : product.quantity + value}
        } else {
          return product;
        }
      })
      setCartProducts(updatedCartData)
    }
  }

  useEffect(() => {
    if (cartProducts.length > 0) {
      localStorage.setItem('cartProducts', JSON.stringify(cartProducts))
    }
  }, [cartProducts])
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('cartProducts'))
    if (data && data.length > 0) {
      setCartProducts(data)
    }
  }, [])
  const appLogic = {
    productList,
    createProduct,
    cartProducts,
    addToCart,
    removeFromCart,
    updateCartProductQuantity
  }


  const [cartState, setCartState] = useState(false)
  const showCart = () => {
    setCartState(true)
  }


  const [sideBarState, setSideBarState] = useState(false)
  const showSideBar = (a) => {
    setSideBarState(a)
  }
  
  
  
  return (
    <Context.Provider value={appLogic}>
      <div className='w-full min-h-screen bg-[#F9F9F9] relative'>
        <Header showCart={showCart} showSideBar={showSideBar} cartProducts={cartProducts} />
        <Cart cartState={cartState} setCartState={setCartState} cartProducts={cartProducts} />
        <Sidebar sideBarState={sideBarState} showSideBar={showSideBar} />
        <Outlet />
      </div>
    </Context.Provider>
  )
}

export default memo(App)