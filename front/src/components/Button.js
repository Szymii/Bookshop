import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    margin-top: auto;
    background-color: transparent;
    min-width: 200px;
    padding: 0.8em 2.5em;
    font-weight: 600;
    font-size: 1rem;
    border: 2px solid ${({ theme }) => theme.colors.black};
    cursor: pointer;

    &:hover,
    &:focus {
        background-color: ${({ theme }) => theme.colors.orange};
        border: 2px solid ${({ theme }) => theme.colors.orange};
        color: ${({ theme }) => theme.colors.white};
    }

    &:disabled {
        background-color: ${({ theme }) => theme.colors.white};
        border: 2px solid ${({ theme }) => theme.colors.gray};
        color: ${({ theme }) => theme.colors.gray};
        cursor: not-allowed;
    }
`;

const Button = ({ children, ...props }) => {
    return <StyledButton {...props}>{children}</StyledButton>;
};

export default Button;
