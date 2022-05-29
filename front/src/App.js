import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './assets/styles/theme';
import styled from 'styled-components';
import Navigation from './components/Navigation';
import Home from './views/Home';
import Cart from './views/Cart';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Checkout from './views/Checkout';

const GlobalWrapper = styled.div`
    min-height: 100vh;
    background-color: ${({ theme }) => theme.colors.lightGray};
    padding-bottom: 4em;
`;

const App = () => {
    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <GlobalWrapper>
                    <BrowserRouter>
                        <Navigation />

                        <Routes>
                            <Route path="/books" element={<Home />} />
                            <Route path="/books/:page" element={<Home />} />
                            <Route path="/cart" element={<Cart />} />
                            <Route
                                path="*"
                                element={<Navigate to="/books" replace />}
                            />
                            <Route path="/checkout" element={<Checkout />} />
                        </Routes>
                    </BrowserRouter>
                </GlobalWrapper>
            </ThemeProvider>
        </Provider>
    );
};

export default App;
