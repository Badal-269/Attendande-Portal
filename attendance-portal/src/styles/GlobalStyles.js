import { createGlobalStyle } from 'styled-components';

// Define global styles with support for dark mode
const GlobalStyles = createGlobalStyle`
    body {
        margin: 0;
        font-family: Arial, sans-serif;
        background-color: ${({ theme }) => (theme.isDarkMode ? '#121212' : '#ffffff')};
        color: ${({ theme }) => (theme.isDarkMode ? '#ffffff' : '#000000')};
        transition: background-color 0.3s, color 0.3s;
    }

    h1, h2, h3, h4, h5, h6 {
        margin: 0;
    }

    a {
        text-decoration: none;
        color: ${({ theme }) => (theme.isDarkMode ? '#bb86fc' : '#6200ea')};
    }
`;

export default GlobalStyles;
