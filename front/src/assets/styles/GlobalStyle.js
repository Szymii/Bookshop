import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
        box-sizing: border-box;
        font-family: 'Inter', sans-serif;
        margin: 0;
        padding: 0;
    }

    html {
        font-size: 16px;
    }
`;
