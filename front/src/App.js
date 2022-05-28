import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './assets/styles/theme';
import styled from 'styled-components';
import Navigation from './components/Navigation';
import Home from './views/Home';
import Cart from './views/Cart';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const GlobalWrapper = styled.div`
    min-height: 100vh;
    background-color: ${({ theme }) => theme.colors.lightGray};
`;

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalWrapper>
                <BrowserRouter>
                    <Navigation />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/cart" element={<Cart />} />
                    </Routes>
                </BrowserRouter>
            </GlobalWrapper>
        </ThemeProvider>
    );
};

export default App;
