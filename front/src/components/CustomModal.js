import React from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { removeInfo } from '../store/infoSlice';
import Button from './Button';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        border: 'solid 1px black',
        maxWidth: '80%',
        borderRadius: '0',
        padding: '0',
    },
};

Modal.setAppElement('#modal');

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2em;
    align-items: center;
    padding: 2em;
    max-width: 600px;
    text-align: center;
    font-weight: 600;
    font-size: 1.3rem;

    @media (max-width: 660px) {
        font-size: 1rem;
    }

    span {
        color: ${({ theme }) => theme.colors.orange};
    }
`;

const StyledTitle = styled.div`
    background-color: ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.white};
    font-size: 2rem;
    font-weight: 800;
    text-align: center;
    padding: 0.5em 0;
`;

const CustomModal = () => {
    const state = useSelector((state) => state);
    const dispatch = useDispatch();
    const info = state.info;

    const handleModalClose = () => {
        dispatch(removeInfo());
    };

    return (
        <Modal
            isOpen={!!info}
            style={customStyles}
            onRequestClose={handleModalClose}
        >
            <StyledTitle>Bookshop</StyledTitle>
            <Wrapper>
                <p>
                    Twoje zamówienie otrzymało numer <span>{info}</span>.
                    Dziękujemy i zapraszamy ponownie.
                </p>
                <Button onClick={handleModalClose}>Ok</Button>
            </Wrapper>
        </Modal>
    );
};

export default CustomModal;
