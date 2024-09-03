import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../Context/ThemeContext';
import styled from 'styled-components';
import { FaMoon, FaSun } from 'react-icons/fa';

const HeaderContainer = styled.header`
    background-color: ${({ theme }) => (theme.isDarkMode ? '#333' : '#4a90e2')};
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
`;

const ThemeToggle = styled.button`
    background: none;
    border: none;
    color: #fff;
    cursor: pointer;
    font-size: 20px;
`;

const Header = () => {
    const { isDarkMode, toggleTheme } = useTheme();

    return (
        <HeaderContainer>
            <Link to="/">Home</Link>
            <Link to="/attendance">Attendance</Link>
            <ThemeToggle onClick={toggleTheme}>
                {isDarkMode ? <FaSun /> : <FaMoon />}
            </ThemeToggle>
        </HeaderContainer>
    );
};

export default Header;
