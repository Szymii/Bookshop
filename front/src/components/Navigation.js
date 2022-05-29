import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaShoppingCart } from 'react-icons/fa';
import styled from 'styled-components';

const StyledNav = styled.nav`
    background-color: ${({ theme }) => theme.colors.black};

    a {
        text-decoration: none;
        color: ${({ theme }) => theme.colors.white};
        font-size: 2rem;
        font-weight: 800;
        position: relative;
    }
`;

const Wrapper = styled.div`
    width: 80%;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    padding: 1em 0;
`;

const Badge = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    bottom: 0;
    right: -25%;
    height: 1.6em;
    width: 1.6em;
    font-size: 0.8rem;
    font-weight: 400;
    background-color: ${({ theme }) => theme.colors.orange};
    padding: 0.4em;
    border-radius: 20px;
`;

const Navigation = () => {
    const state = useSelector((state) => state);
    const books = state.cart;

    const itemsInCart = books.reduce((acc, { quantity }) => {
        return (acc += quantity);
    }, 0);

    return (
        <StyledNav>
            <Wrapper>
                <Link to="/books">
                    <span>Bookshop</span>
                </Link>
                <Link to="/cart">
                    <FaShoppingCart />
                    <Badge>{itemsInCart}</Badge>
                </Link>
            </Wrapper>
        </StyledNav>
    );
};

export default Navigation;
