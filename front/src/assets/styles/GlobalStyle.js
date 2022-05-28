import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap');

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
