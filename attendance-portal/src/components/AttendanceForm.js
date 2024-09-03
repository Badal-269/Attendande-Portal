// src/components/AttendanceForm.js
import React, { useState } from 'react';
import styled from 'styled-components';

const Form = styled.form`
    display: flex;
    margin: 20px 0;
    align-items: center;
`;

const Input = styled.input`
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ddd;
    border-radius: 4px;
    margin-right: 10px;
    flex: 1;
`;

const Button = styled.button`
    background-color: #4a90e2;
    color: #fff;
    border: none;
    padding: 10px 20px;
    border-radius: 4px;
    cursor: pointer;
    
    &:hover {
        background-color: #357ab8;
    }
`;

const AttendanceForm = ({ onAddStudent }) => {
    const [studentName, setStudentName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (studentName) {
            onAddStudent(studentName);
            setStudentName('');
        }
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Input
                type="text"
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
                placeholder="Enter student name"
                required
            />
            <Button type="submit">Add Student</Button>
        </Form>
    );
};

export default AttendanceForm;
