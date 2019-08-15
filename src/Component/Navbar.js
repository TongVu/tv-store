import React from 'react'
import { Link } from 'react-router-dom'
import { ButtonContainer } from './Button'
import styled from 'styled-components'
export default class Navbar extends React.Component {
    render() {
        return (
            <NavWrapper className='navbar navbar-expand-sm navbar-dark px-sm-5'>
                <Link to='/' style={{ textDecoration: 'none' }}>
                    <h1 style={{ color: 'snow', }}>
                        Tống Vũ <span style={{ color: 'darkorange' }}>Store</span>
                    </h1>
                </Link>

                <ul className='navbar-nav align-items-center'>
                    <li className='nav-item ml-5'>
                        <Link to='/' className='nav-link'>products </Link>
                    </li>
                </ul>

                <Link to='/cart' className='ml-auto'>
                    <ButtonContainer>
                        <span className='mr-2'>
                            <i className='fas fa-cart-plus' />
                        </span>
                        my cart
                    </ButtonContainer>
                </Link>
            </NavWrapper >
        )
    }
}

const NavWrapper = styled.nav`   
    background-color: lightslategrey;
    .nav-link{        
        color: snow !important;
        font-size: 1.3rem;
        text-transform: capitalize;
    }
`;