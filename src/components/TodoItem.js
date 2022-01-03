import styled, { css } from "styled-components";
import { MdDone, MdDelete } from 'react-icons/md';
const CheckCircle = styled.div`
    width: 32px;
    height: 32px;
    border-radius: 50%;
    border: 1px solid #ced4da;
    font-size: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin-left: 20px;
    ${props => props.done && css`
        border: 1px solid #38d9a9;
        color: #38d9a9;
    `}
`;
const Text = styled.div`
    flex: 1;
    font-size: 22px;
    color: #495057;
`;
const Remove = styled.div`
    opacity: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #dee2e6;
    font-size: 24px;
    cursor: pointer;
    &:hover {
        color: #ff6b8b;
    }
`;
const TodoItemBlock = styled.div`
    display: flex;
    align-items: center;
    padding: 12px 0;
    &:hover {
        ${Remove} {
            opacity: 1;
        }
    }
`;
export default function TodoItem({ text, idDone, onRemove, onToggle, id }) {
    return (
        <TodoItemBlock>
            <CheckCircle done={idDone} onClick={() => {onToggle(id)}}>{idDone && <MdDone />}</CheckCircle>
            <Text>{text}</Text>
            <Remove onClick={() => {onRemove(id)}}>
                <MdDelete />
            </Remove>
        </TodoItemBlock>
    );
}