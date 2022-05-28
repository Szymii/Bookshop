import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import styled from 'styled-components';

const StyledNav = styled.nav`
    background-color: ${({ theme }) => theme.colors.black};

    div {
        width: 80%;
        max-width: 1200px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        padding: 1em 0;
    }

    a {
        text-decoration: none;
        color: ${({ theme }) => theme.colors.white};
        font-size: 2rem;
        font-weight: 800;
    }
`;

const Navigation = () => {
    return (
        <StyledNav>
            <div>
                <Link to="/books">
                    <span>Bookshop</span>
                </Link>
                <Link to="/cart">
                    <FaShoppingCart />
                </Link>
            </div>
        </StyledNav>
    );
};

export default Navigation;
