import styled from "styled-components";
import TodoItem from "./TodoItem";
import React from "react";
const TodoListBlock = styled.div`
    flex: 1;
    padding: 20px 32px 48px;
    overflow-y: auto;
`;
function TodoList({todoList, onRemove, onToggle}) {
    return (
        <TodoListBlock>
            {todoList.map(todo => <TodoItem key={todo.id} id={todo.id} text={todo.text} idDone={todo.idDone} onToggle={onToggle} onRemove={onRemove} />)}
        </TodoListBlock>
    );
}

export default React.memo(TodoList);