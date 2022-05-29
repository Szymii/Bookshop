import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchBooks } from '../store/booksSlice';
import Banner from '../components/Banner';
import BookList from '../components/BookList';
import Pagination from '../components/Pagination';

const StyledMain = styled.main`
    display: flex;
    flex-direction: column;
    gap: 2em;
    align-items: center;
`;

const StyledSection = styled.section`
    width: 80%;
    max-width: 1200px;
    background-color: ${({ theme }) => theme.colors.white};
    padding: 2em;

    @media (max-width: 680px) {
        width: 100%;
    }
`;

const Home = () => {
    const dispatch = useDispatch();
    const params = useParams();

    useEffect(() => {
        window.scrollTo(0, 0);
        dispatch(fetchBooks(params.page || 1));
    }, [dispatch, params]);

    return (
        <StyledMain>
            <Banner />
            <StyledSection>
                <BookList />
                <hr />
                <Pagination acticvePage={parseInt(params.page) || 1} />
            </StyledSection>
        </StyledMain>
    );
};

export default Home;
