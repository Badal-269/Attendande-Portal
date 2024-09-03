// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.header`
    background-color: #4a90e2;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
`;

const Nav = styled.nav`
    a {
        color: #fff;
        margin: 0 10px;
        text-decoration: none;
        font-weight: bold;
        
        &:hover {
            text-decoration: underline;
        }
    }
`;

const Header = () => {
    return (
        <HeaderContainer>
            <h1>Attendance Portal</h1>
            <Nav>
                <Link to="/">Home</Link>
                <Link to="/attendance">Attendance</Link>
            </Nav>
        </HeaderContainer>
    );
};

export default Header;
