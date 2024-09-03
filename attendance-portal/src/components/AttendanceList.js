// src/components/AttendanceList.js
import React from 'react';
import styled from 'styled-components';
import StudentCard from './StudentCard';

const ListContainer = styled.div`
    margin-top: 20px;
`;

const AttendanceList = ({ students }) => {
    return (
        <ListContainer>
            <h2>Present Students</h2>
            {students.length === 0 ? (
                <p>No students present.</p>
            ) : (
                students.map((student, index) => (
                    <StudentCard key={index} student={student} />
                ))
            )}
        </ListContainer>
    );
};

export default AttendanceList;
