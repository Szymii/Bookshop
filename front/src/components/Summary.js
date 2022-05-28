import React from 'react';
import styled from 'styled-components';
import SummaryItem from './SummaryItem';

const StyledList = styled.ul`
    display: flex;
    width: 80%;
    margin: 0 auto;
    flex-direction: column;
    padding-top: 1em;
`;

const Summary = ({ books }) => {
    return (
        <StyledList>
            {books.map((book) => (
                <SummaryItem book={book} key={book.id} />
            ))}
        </StyledList>
    );
};

export default Summary;
