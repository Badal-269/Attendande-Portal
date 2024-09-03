import { FaPlus } from 'react-icons/fa';

const Button = styled.button`
    background-color: #4a90e2;
    color: #fff;
    border: none;
    padding: 10px 20px;
    border-radius: 4px;
    cursor: pointer;
    display: flex;
    align-items: center;
    
    &:hover {
        background-color: #357ab8;
    }
`;

<Button type="submit">
    <FaPlus style={{ marginRight: '5px' }} />
    Add Student
</Button>
