import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchBooks } from '../store/booksSlice';

const Home = () => {
    const dispatch = useDispatch();
    const params = useParams();

    useEffect(() => {
        dispatch(fetchBooks(params.page || 1));
    }, [dispatch, params]);

    return <div>Home</div>;
};

export default Home;
