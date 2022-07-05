import React from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'
import { removeFromCart } from '../../redux/slices/userCartItemsSlice';

const CartItemCard = () => {
    const cartItems = useSelector(state => state.userCartItems.cartItems);
    const total = cartItems.reduce((previous, current) => previous + current.quantity * current.price, 0);

    const dispatch = useDispatch();
    const handleRemoveFromCart = (toBeRemovedId) => {
        dispatch(removeFromCart(toBeRemovedId))
    }

    return (
        <div className='d-flex flex-column justify-content-space-between'>
            {
                cartItems.map(item => (
                    <div key={item.id} className='d-flex justify-content-between p-2 border-bottom'>
                        <div className='d-flex align-items-center'>
                            <div className="image" style={{ width: '80px' }}>
                                <img className='img-fluid' src={item.src} alt={item.alt} />
                            </div>
                            <div className='d-flex flex-column p-2 ps-4'>
                                <h6>{item.name}</h6>
                                <p>{item.quantity} {item.quantity <= 1 ? 'item' : 'items'}</p>
                                <p style={{ letterSpacing: '1px' }}>${item.quantity * item.price}</p>
                            </div>
                        </div>
                        <div className='mt-2'>
                            <button type="button" onClick={() => handleRemoveFromCart(item.id)} className="btn btn-outline-danger btn-sm">remove</button>
                        </div>
                    </div>
                ))
            }
            {
                cartItems.length > 0 ?
                    <div className='d-flex justify-content-between p-3'>
                        <h5>Total</h5>
                        <h5>${total}</h5>
                    </div> :
                    <div className='d-flex justify-content-center align-items-center' style={{ marginTop: '50%' }}>
                        <button type="button" className="btn btn-primary btn-sm">No products in cart. Please go to shopping</button>
                    </div>
            }
        </div>
    )
}

export default CartItemCard