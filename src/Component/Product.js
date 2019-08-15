import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { ProductConsumer } from '../context'
import PropTypes from 'prop-types'

export default class Product extends React.Component {
    render() {
        const { id, title, img, price, inCart } = this.props.product;

        return (

            <ProductWrapper className='col-9 mx-auto col-md-6 col-lg-3 my-3'>
                <div className='card'>
                    <ProductConsumer>
                        {value => (
                            <div
                                className='img-container p-5'
                                onClick={() => value.handleDetail(id)}
                            >
                                <Link to='/details'>
                                    <img src={img} alt='product-img' className='card-img-top' />
                                </Link>
                                <button
                                    className='cart-btn'
                                    disabled={inCart ? true : false}
                                    onClick={() => {
                                        value.addToCart(id);
                                        value.openModal(id);
                                    }}
                                >
                                    {inCart ?
                                        (
                                            <p className='text-capitalize mb-0' disabled> in cart </p>
                                        ) :
                                        (
                                            <i className='fas fa-cart-plus' />
                                        )
                                    }
                                </button>
                            </div>
                        )}
                    </ProductConsumer>

                    {/* {Cart footer} */}
                    <div className='card-footer d-flex justify-content-between'>
                        <p className='align-self-center mb-0'>
                            {title}
                        </p>
                        <h5 className='text-blue font-italic mb-0'>
                            <span className='mr-1'>$</span>
                            {price}
                        </h5>
                    </div>
                </div>
            </ProductWrapper>

        )
    }
}

Product.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number,
        img: PropTypes.string,
        title: PropTypes.string,
        price: PropTypes.number,
        inCart: PropTypes.bool
    }).isRequired
}

const ProductWrapper = styled.div`
 .card{
                    border - color: transparent;
                transition: all 0.3s;
             }
            
 .card-footer{
                    border - top: transparent;
             }
 &:hover{
    .card{
                border: 0.04rem solid rgab(0, 0, 0, 0.4);
                box-shadow: 2px 2px 6px lightgrey;
            }
         }
 .img-container{
                    position: relative;
                overflow: hidden;
            }
 .card-img-top{
                    transition: transform 0.3s;
            }
 .img-container:hover .card-img-top{
                    transform: scale(1.2);
             }
 .cart-btn{
                    position: absolute;
                right: 0;
                bottom: 0;
                padding: 5px;
                cursor: pointer;
                font-size: 1.4rem;
                color: snow;
                border: none;
                border-radius: 3px 0 0 0;
                background-color: deepskyblue;
                transform: translate(100%, 100%);
                transition: transform 0.3s;
            }
 .img-container:hover .cart-btn{
                    transform: translate(0, 0);
             }
            }
`;