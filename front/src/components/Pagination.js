import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { MdKeyboardArrowLeft as ArrowLeft } from 'react-icons/md';
import { MdKeyboardArrowRight as ArrowRight } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 1em 0 0;
    font-size: 1.2rem;
    gap: 0.6em;
    font-weight: 800;
`;

const ArrowBtn = styled.button`
    border: none;
    background-color: transparent;
    font-size: 1.6rem;
    cursor: pointer;
`;

const StyledNumber = styled.span`
    color: ${({ active, theme }) =>
        active ? theme.colors.orange : theme.colors.gray};
    cursor: pointer;
`;

const Pagination = ({ acticvePage }) => {
    const state = useSelector((state) => state);
    const navigate = useNavigate();
    const metadata = state.books;
    const [pages, setPages] = useState([]);
    const [pageNumber, setpageNumber] = useState(0);

    useEffect(() => {
        if (metadata) {
            setpageNumber(
                Math.ceil(metadata.total_records / metadata.records_per_page)
            );

            setPages([]);

            for (let i = 1; i <= pageNumber; i++) {
                setPages((prev) => [
                    ...prev,
                    {
                        number: i,
                        active: i === acticvePage,
                    },
                ]);
            }
        }
    }, [metadata, acticvePage, pageNumber]);

    const pageBack = () => {
        if (acticvePage > 1) {
            navigate(`/books/${acticvePage - 1}`);
        }
    };

    const pageForward = () => {
        if (acticvePage < pages.length) {
            navigate(`/books/${acticvePage + 1}`);
        }
    };

    const moveToPage = (number) => {
        navigate(`/books/${number}`);
    };

    return (
        <Wrapper>
            <ArrowBtn>
                <ArrowLeft onClick={pageBack} />
            </ArrowBtn>
            {pages.map(({ number, active }) => (
                <StyledNumber
                    active={active}
                    key={number}
                    onClick={() => moveToPage(number)}
                >
                    {number}
                </StyledNumber>
            ))}
            <ArrowBtn>
                <ArrowRight onClick={pageForward} />
            </ArrowBtn>
        </Wrapper>
    );
};

export default Pagination;
