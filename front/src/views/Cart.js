import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Button from '../components/Button';
import Summary from '../components/Summary';
import { getPrice } from '../utility';
import { useNavigate } from 'react-router-dom';

const StyledMain = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 680px) {
        margin: 3em auto 0;
    }

    @media (min-width: 1000px) {
        width: 80%;
        max-width: 1200px;
        flex-direction: row;
        gap: 2em;
        align-items: stretch;
    }
`;

const StyledSection = styled.section`
    width: 80%;
    padding: 1em 0;
    max-width: 1200px;
    background-color: ${({ theme }) => theme.colors.white};

    @media (max-width: 680px) {
        width: 100%;
    }
`;

const StyledTitle = styled.section`
    width: 80%;
    padding: 0.5em 0;
    margin: 0 auto;
    max-width: 1200px;
    font-size: 1rem;
    font-weight: 400;

    @media (min-width: 680px) {
        font-size: 1.5rem;
        font-weight: 600;
    }
`;

const PaymentSection = styled.section`
    width: 80%;
    max-width: 1200px;

    @media (max-width: 680px) {
        width: 100%;
    }
`;

const Wrapper = styled.div`
    max-width: 1200px;
    background-color: ${({ theme }) => theme.colors.white};

    div {
        width: 80%;
        margin: 0 auto;

        @media (min-width: 680px) {
            padding-top: 1.5em;
            font-size: 1.5rem;
            font-weight: 600;
        }
    }
`;

const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    padding: 2em 0;
`;

const Cart = () => {
    const state = useSelector((state) => state);
    const navigate = useNavigate();
    const books = state.cart;

    const totalCost = books.reduce((acc, { price, quantity }) => {
        return (acc += price * quantity);
    }, 0);

    const handleButtonClick = () => {
        navigate('/checkout');
    };

    return (
        <StyledMain>
            <StyledSection>
                <StyledTitle>Twoje zamówienie:</StyledTitle>
                <hr />
                {books.length ? (
                    <Summary books={books} />
                ) : (
                    <StyledTitle>Twój koszyk jest pusty</StyledTitle>
                )}
            </StyledSection>
            <PaymentSection>
                <Wrapper>
                    {books.length ? (
                        <div>Razem: {getPrice(totalCost)} PLN</div>
                    ) : null}
                    <ButtonWrapper>
                        <Button
                            disabled={!books.length}
                            onClick={handleButtonClick}
                        >
                            Dalej
                        </Button>
                    </ButtonWrapper>
                </Wrapper>
            </PaymentSection>
        </StyledMain>
    );
};

export default Cart;
