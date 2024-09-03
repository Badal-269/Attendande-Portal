// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaHome, FaClipboardList } from 'react-icons/fa';

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
        display: flex;
        align-items: center;
        
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
                <Link to="/">
                    <FaHome style={{ marginRight: '5px' }} />
                    Home
                </Link>
                <Link to="/attendance">
                    <FaClipboardList style={{ marginRight: '5px' }} />
                    Attendance
                </Link>
            </Nav>
        </HeaderContainer>
    );
};

export default Header;
