import React from 'react';
import styled from 'styled-components';
import banner from '../assets/images/banner.jpg';

const StyledHeader = styled.header`
    margin-top: 2em;
    width: 100%;
    background-image: url(${banner});
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    color: ${({ theme }) => theme.colors.white};
    display: flex;
    justify-content: center;

    div {
        margin: 0 auto;
        padding: 3.5em 0;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        font-weight: 800;

        h1 {
            font-size: 3rem;
        }
        p {
            font-size: 1.1rem;
        }
    }
`;

const Banner = () => {
    return (
        <StyledHeader>
            <div>
                <h1>Bookshop</h1>
                <p>Twoje książki</p>
            </div>
        </StyledHeader>
    );
};

export default Banner;
