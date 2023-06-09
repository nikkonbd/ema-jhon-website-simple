import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    useEffect(() => {
        const storedCart = getShoppingCart();
        const saveCart = [];
        // Step 1 Get Id
        for (const id in storedCart) {
            // Step 2 Get the product using id
            const addedProduct = products.find(product => product.id === id);
            // Step 3 Get quantity of the product
            if (addedProduct) {
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                saveCart.push(addedProduct);
            }
            // console.log(addedProduct);
        }
        setCart(saveCart);
    }, [products])

    const handleClickToCart = (product) => {
        // console.log(product);
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.id);
    }

    return (
        <div className='shop-container'>
            <div className='products-container'>
                {
                    products.map((product) =>
                        <Product
                            product={product}
                            key={product.id}
                            handleClickToCart={handleClickToCart}
                        ></Product>)
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;