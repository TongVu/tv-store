import styled from 'styled-components'

export const ButtonContainer = styled.button`        
    margin: 0 10px;
    font-size: 1.4rem;    
    text-transform: capitalize;
    background: transparent;
    border: 1px solid ${props => props.cart ? 'lightgreen' : 'lightblue'};
    border-radius: 8px;
    box-shadow: 2px 2px 8px snow;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.1s;

    &:hover{
        background-color: ${props => props.cart ? 'lightgreen' : 'lightblue'};
    }
    &:active{
        transform: translateY(3px);
    }
`;
