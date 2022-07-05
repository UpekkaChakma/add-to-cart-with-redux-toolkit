import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../redux/slices/userCartItemsSlice';
import { ToastContainer } from 'react-toastify';
import { Zoom } from 'react-toastify';
import './ProductCard.css'

const ProductCard = ({ id, name, src, price, alt, plural }) => {
    const [count, setCount] = useState(1)
    const dispatch = useDispatch();


    const increment = () => {
        setCount((previousCount) => previousCount + 1)
    }
    const decrement = () => {
        if (count > 1) setCount((previousCount) => previousCount - 1)
    }

    const handleAddToCart = () => {
        dispatch(addToCart({
            id,
            name,
            src,
            price,
            plural,
            quantity: count
        }))
        setCount(1)
    }


    return (
        <div className="product-card shadow p-3 br-2">
            <img src={src} alt={alt} />
            <div className="name-price">
                <h5>{name}</h5>
                <h5>${price}</h5>
            </div>
            <div className="quantity-change">
                <button onClick={decrement} data-bs-toggle="tooltip" data-bs-placement="top" title="Click to decrease quantity"><h5>-</h5></button>
                <input type="number" min={1} max={99} value={count} readOnly />
                <button onClick={increment} type="button" data-bs-toggle="tooltip" data-bs-placement="top" title="Click to increase quantity"><h5>+</h5></button>
            </div>
            <button className='btn btn-primary' onClick={handleAddToCart}>+ Add To Cart</button>
            <ToastContainer
                position='top-center'
                transition={Zoom}
                autoClose={1000}
            />
        </div>
    )
}

export default ProductCard