import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import { AttendancePage } from './Pages/AttendancePage';
import { ThemeProvider } from './Context/ThemeContext';
import GlobalStyles from './styles/GlobalStyles';
import Header from './components/Header';

function App() {
    return (
        <ThemeProvider>
            <GlobalStyles />
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/attendance" element={<AttendancePage />} />
                </Routes>
            </Router>
        </ThemeProvider>
    );
}

export default App;
