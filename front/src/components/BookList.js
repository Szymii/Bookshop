import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import BookCard from './BookCard';

const StyledList = styled.ul`
    display: grid;
    gap: 1em;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-template-rows: auto;
    padding-bottom: 2em;
`;

const BookList = () => {
    const state = useSelector((state) => state);
    const books = state.books.booksList;

    return (
        <StyledList>
            {books.map((book) => (
                <BookCard book={book} key={book.id} />
            ))}
        </StyledList>
    );
};

export default BookList;
