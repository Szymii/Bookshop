import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    label {
        display: flex;
        flex-direction: column;
    }
    input {
        width: ${({ short }) => (short ? '50%' : '100%')};
        border: 1px solid
            ${({ error, theme }) =>
                error ? theme.colors.red : theme.colors.black};
        font-size: 1.2rem;
        padding: 0.4em 0.8em;

        &::placeholder {
            letter-spacing: 0.1em;
        }
    }
`;

const FormField = ({ label, short, error, ...props }) => {
    return (
        <Wrapper short={short} error={error}>
            <label>
                {label}:
                <input {...props} />
            </label>
        </Wrapper>
    );
};

export default FormField;
