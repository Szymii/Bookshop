import React from 'react';
import styled from 'styled-components';
import Button from '../components/Button';
import FormField from '../components/FormField';

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

const Checkout = () => {
    const hadleFormSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <main>
            <StyledSection>
                <h2>Dane do wysyłki:</h2>
                <hr />
                <StyledForm onSubmit={hadleFormSubmit}>
                    <FormField label="Imię" name="first_name" />
                    <FormField label="Nazwisko" name="last_name" />
                    <FormField label="Miejscowość" name="city" />
                    <FormField
                        label="Kod pocztowy"
                        name="zip_code"
                        placeholder={'__ - ___'}
                        short
                    />

                    <Button>Zamawiam i płacę</Button>
                </StyledForm>
            </StyledSection>
        </main>
    );
};

export default Checkout;
