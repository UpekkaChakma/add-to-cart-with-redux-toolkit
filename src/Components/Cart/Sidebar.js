import React from 'react'
import { useSelector } from 'react-redux'
import Cart from './Cart';

const Sidebar = () => {

    const cartItems = useSelector(state => state.userCartItems.cartItems);
    const length = cartItems.length;


    return (
        <div>
            <div className="p-3 mb-3 shadow-sm d-flex justify-content-end">
                <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasStart" aria-controls="offcanvasStart">Open Your Cart</button>
            </div>

            <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasStart" aria-labelledby="offcanvasStartLabel">
                <div className="offcanvas-header">
                    <h5 id="offcanvasStartLabel">Your Cart ( {length} {length <= 1 ? 'product' : 'products'} )</h5>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    {
                        <Cart />
                    }
                </div>
            </div>
        </div>
    )
}

export default Sidebar