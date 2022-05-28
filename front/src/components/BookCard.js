import React from 'react';
import styled from 'styled-components';
import { FaBookOpen } from 'react-icons/fa';
import Button from './Button';
import { useDispatch } from 'react-redux';
import { addBook } from '../store/cartSlice';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 1em;

    img {
        margin: 3em 0 1em 0;
        max-height: 220px;
    }
`;

const BookDescription = styled.div`
    max-width: 250px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 0.6em;
    padding-bottom: 1em;

    h3 {
        font-size: 1rem;
    }

    p {
        font-size: 0.7rem;
    }
`;

const BookData = styled.div`
    display: flex;
    justify-content: space-between;
`;

const PriceWrapper = styled.div`
    display: flex;
    gap: 0.3rem;
    color: ${({ theme }) => theme.colors.orange};
    font-weight: 600;
`;

const PageWrapper = styled.div`
    display: flex;
    font-size: 0.8rem;
    gap: 0.3rem;
    font-weight: 600;

    svg {
        font-size: 1rem;
    }
`;

const BookCard = ({ book }) => {
    const { author, cover_url, currency, pages, price, title } = book;
    const dispatch = useDispatch();

    const getPrice = (price) => {
        return (price / 100).toFixed(2);
    };

    const handleButtonClick = (id) => {
        dispatch(addBook(id));
    };

    return (
        <Wrapper>
            <img src={cover_url} alt={title} />
            <BookDescription>
                <BookData>
                    <PriceWrapper>
                        <span>{getPrice(price)}</span>
                        <span>{currency}</span>
                    </PriceWrapper>
                    <PageWrapper>
                        <span>
                            <FaBookOpen />
                        </span>
                        <span>{pages}</span>
                    </PageWrapper>
                </BookData>
                <h3>{title}</h3>
                <p>{author}</p>
            </BookDescription>
            <Button onClick={() => handleButtonClick(book)}>
                Dodaj do koszyka
            </Button>
        </Wrapper>
    );
};

export default BookCard;
