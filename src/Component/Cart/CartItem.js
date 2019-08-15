import React from 'react'

export default function CartItem({ item, value }) {
    const { id, img, title, price, total, count } = item;
    const { increment, decrement, removeItem } = value;
    return (
        <div className='row my-2 text-capitalize text-center'>
            <div className='col-10 mx-auto col-lg-2'>
                <img
                    className='img-fluid'
                    src={img}
                    style={{ width: '5rem', height: '5rem' }}
                    alt='product-img'
                />
            </div>

            <div className='col-10 mx-auto col-lg-2'>
                <span className='d-lg-none'>Product: </span>{title}
            </div>

            <div className='col-10 mx-auto col-lg-2'>
                <span className='d-lg-none'>price: </span>{price}
            </div>

            <div className='col-10 mx-auto col-lg-2'>
                <div className='col-10 mx-auto col-lg-2 my-2 my-lg-0'>
                    <div className='d-flex justify-content-center'>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <span
                                className='btn btn-black mx-1'
                                onClick={() => decrement(id)}
                                style={btnStyle}
                            > - </span>

                            <span
                                className='btn btn-black mx-1'
                                style={btnStyle}
                            > {count} </span>

                            <span
                                className='btn btn-black mx-1'
                                onClick={() => increment(id)}
                                style={btnStyle}
                            > + </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className='col-10 mx-auto col-lg-2'>
                <div className='cart-icon'>
                    <i
                        style={{ cursor: 'pointer' }}
                        className='fas fa-trash'
                        onClick={() => removeItem(id)}
                    ></i>
                </div>
            </div>

            <div className='col-10 mx-auto col-lg-2'>
                <strong>item total: $ {total}</strong>
            </div>



        </div >
    )
}
const btnStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '30px',
    height: '30px',
    background: 'transparent',
    textTransform: 'capitalize',
    color: 'black', fontSize: '1.2rem',
    border: '2px solid lightgrey',
    cursor: 'pointer'
}