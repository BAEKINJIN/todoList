import styled, { css } from "styled-components";
import React, { useState } from "react";
import { MdAdd } from "react-icons/md";
const CircleButton = styled.button`
    background: #38d9a9;
    &:hover {
        background: #63e6be;
    }
    &:active {
        background: #20c997;
    }
    z-index: 5;
    cursor: pointer;
    width: 80px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 50%);
    font-size: 60px;
    color: white;
    border-radius: 50%;
    border: none;
    outline: none;
    transition: 0.125s all ease-in;
    // open값이 true일때만 스타일지정
    ${props => props.open && css`
        background: #ff8787;
        &:hover {
            background: #fa5252;
        }
        &:active {
            background: #fa5252;
        }
        transform: translate(-50%, 50%) rotate(45deg);
    `}
`;
// 입력받을 수 있는 form생성
const InsertFormPosition = styled.div`
        width: 100%;
        bottom: 0;
        left: 0;
        position: absolute;
`;
const InsertForm = styled.form`
        background: #f8f9fa;
        padding: 32px;
        padding-bottom: 72px;
        border-bottom-left-radius: 16px;
        border-bottom-right-radius: 16px;
        border-top: 1px solid #e9ecef;
`;
const Input = styled.input`
        padding: 12px;
        border-radius: 4px;
        border: 1px solid #dee2d6;
        width: 100%;
        outline: none;
        font-size: 18px;
        box-sizing: border-box;
`;
function TodoInsert({onChange, onCreatelist, desc}) {
    const [open, setOpen] = useState(false);
    function onToggle() {
        setOpen(!open);
    }
    return (
        <div>
            {open && <InsertFormPosition>
                    <InsertForm onSubmit={onCreatelist}>
                        <Input onChange={onChange} placeholder="할일을 입력 후 Enter를 누르세요." value={desc} autoFocus />
                    </InsertForm>
                </InsertFormPosition>}
            <CircleButton onClick={onToggle} open={open}><MdAdd /></CircleButton>
        </div>
    );
}

export default React.memo(TodoInsert);