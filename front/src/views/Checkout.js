import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../components/Button';
import FormField from '../components/FormField';
import { removeAllBooks } from '../store/cartSlice';
import { addInfo } from '../store/infoSlice';

const StyledSection = styled.section`
    background-color: ${({ theme }) => theme.colors.white};
    padding: 1.5em 0;

    @media (min-width: 500px) {
        width: 80%;
        max-width: 600px;
        margin: 2em auto 0;
    }

    h2 {
        width: 80%;
        margin: 0.5em auto;
        font-weight: 400;
        font-size: 1rem;
    }

    button {
        margin-top: 2em;
    }
`;

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1em;
    width: 80%;
    margin: 0 auto;
    padding: 1.5em 0;
`;

const initialFormState = {
    first_name: '',
    last_name: '',
    city: '',
    zip_code: '',
};

const Checkout = () => {
    const state = useSelector((state) => state);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [formData, setFormData] = useState(initialFormState);
    const [errors, setErrors] = useState({});
    const books = state.books.booksList;
    const cart = state.cart;

    useEffect(() => {
        if (!books.length > 0) {
            navigate('/books');
        }
    }, [books, navigate]);

    const hadleFormSubmit = (e) => {
        e.preventDefault();
        if (validFormData()) {
            sendOrder();
        }
    };

    const handleInputChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        delete errors[name];
        setFormData({ ...formData, [name]: value });
    };

    const validFormData = () => {
        setErrors({});

        for (const property in formData) {
            if (formData[property] === '') {
                setErrors((errors) => ({ ...errors, [property]: true }));
            }
        }

        if (!validZipCode()) {
            setErrors((errors) => ({ ...errors, zip_code: true }));
        }

        if (Object.keys(errors).length === 0) {
            return true;
        }

        return false;
    };

    const validZipCode = () => {
        const regex = /\w{2}-\w{3}/g;

        return formData.zip_code.match(regex);
    };

    const sendOrder = async () => {
        const order = {
            order: cart.map(({ quantity, id }) => ({
                id,
                quantity,
            })),
            ...formData,
        };

        try {
            const response = await axios.post(
                'http://127.0.0.1:3001/api/order',
                order
            );

            if (response.status === 201) {
                dispatch(removeAllBooks());
                dispatch(addInfo(response.data.data.id));
                navigate('/books');
            }
        } catch ({ response }) {
            if (response.status === 422) {
                const errors = response.data.error.violations;

                for (const property in errors) {
                    setErrors((errors) => ({ ...errors, [property]: true }));
                }
            }
        }
    };

    return (
        <main>
            <StyledSection>
                <h2>Dane do wysyłki:</h2>
                <hr />
                <StyledForm onSubmit={hadleFormSubmit}>
                    <FormField
                        label="Imię"
                        name="first_name"
                        onChange={handleInputChange}
                        error={errors?.first_name}
                    />
                    <FormField
                        label="Nazwisko"
                        name="last_name"
                        onChange={handleInputChange}
                        error={errors?.last_name}
                    />
                    <FormField
                        label="Miejscowość"
                        name="city"
                        onChange={handleInputChange}
                        error={errors?.city}
                    />
                    <FormField
                        label="Kod pocztowy"
                        name="zip_code"
                        placeholder={'__ - ___'}
                        onChange={handleInputChange}
                        error={errors?.zip_code}
                        short
                    />
                    <Button>Zamawiam i płacę</Button>
                </StyledForm>
            </StyledSection>
        </main>
    );
};

export default Checkout;
