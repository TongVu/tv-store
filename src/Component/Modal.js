import React from 'react'
import styled from 'styled-components'
import { ProductConsumer } from '../context'
import { ButtonContainer } from './Button'
import { Link } from 'react-router-dom'


export default class Modal extends React.Component {
    render() {
        return (
            <ProductConsumer>
                {(value) => {
                    const { modalOpen, closeModal } = value;
                    const { img, title, price } = value.modalProduct;

                    if (!modalOpen) {
                        return null;
                    }
                    else {
                        return (
                            <ModalContainer>
                                <div className='container'>
                                    <div className='row'>
                                        <div id='modal' className='col-8 mx-auto col-md-6 col-lg-4 p-5 text-center text-capitalize'>
                                            <h5>Added to the cart</h5>
                                            <img src={img} className='img-fluid' alt='product-img' />
                                            <h5>{title}</h5>
                                            <h5 className='text-muted'>Price: ${price}</h5>

                                            <Link to='/'>
                                                <ButtonContainer
                                                    onClick={() => { closeModal() }}
                                                >
                                                    Store
                                                </ButtonContainer>
                                            </Link>

                                            <Link to='/cart'>
                                                <ButtonContainer
                                                    onClick={() => { closeModal() }}
                                                >
                                                    go to cart
                                                </ButtonContainer>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </ModalContainer>
                        )
                    }
                }}
            </ProductConsumer>
        )
    }
}

const ModalContainer = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;          
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.3);
    #modal{
        
        background-color: snow;
        border-radius: 8px;
    }
`;