import React from 'react';
import styled from 'styled-components';
import { GoPlus } from 'react-icons/go';
import { FaMinus } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { addBook, removeBook } from '../store/cartSlice';
import { getPrice } from '../utility';

const StyledListItem = styled.li`
    display: flex;
    width: 100%;
    margin: 0 auto;
    align-items: center;
    gap: 1em;
    padding: 1em 0;
    border-bottom: 1px solid ${({ theme }) => theme.colors.black};

    img {
        max-height: 120px;
        max-width: 85px;
    }
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5em;
    flex: 1;

    h3 {
        font-size: 0.9rem;
    }

    p {
        font-size: 0.7rem;
    }
`;

const FlexWrapper = styled.div`
    display: flex;
    font-size: 0.9rem;
    justify-content: space-between;
    font-weight: 600;
`;

const BtnWrapper = styled.div`
    display: flex;
    gap: 0.5em;
`;

const RoundBtn = styled.button`
    border: none;
    background-color: ${({ orange, theme }) =>
        orange ? theme.colors.orange : theme.colors.gray};
    height: 16px;
    width: 16px;
    border-radius: 10px;
    cursor: pointer;
    font-size: 0.5em;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const SummaryItem = ({ book }) => {
    const { author, cover_url, price, title, quantity } = book;
    const dispatch = useDispatch();

    const handleRemove = (book) => {
        dispatch(removeBook(book));
    };

    const handleAdd = (book) => {
        dispatch(addBook(book));
    };

    return (
        <StyledListItem>
            <img src={cover_url} alt={title} />
            <Wrapper>
                <h3>{title}</h3>
                <p>{author}</p>
                <FlexWrapper>
                    <span>{getPrice(price)} PLN</span>
                    <BtnWrapper>
                        <RoundBtn onClick={() => handleRemove(book)}>
                            <FaMinus />
                        </RoundBtn>
                        <div>{quantity}</div>
                        <RoundBtn orange onClick={() => handleAdd(book)}>
                            <GoPlus />
                        </RoundBtn>
                    </BtnWrapper>
                </FlexWrapper>
            </Wrapper>
        </StyledListItem>
    );
};

export default SummaryItem;
