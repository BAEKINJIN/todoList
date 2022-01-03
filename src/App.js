import { createGlobalStyle } from 'styled-components';
import TodoTemplate from './components/TodoTemplate';
import TodoHeader from './components/TodoHeader';
import TodoList from './components/TodoList';
import TodoInsert from './components/TodoInsert';
import { useState, useRef } from "react";

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

function App() {
  // 항목들 상태관리
  const [ todoList, setTodoList ] = useState([
    {
      id: 1,
      text: "프로젝트 관리하기",
      idDone: false
    },
    {
      id: 2,
      text: "스타일 컴포넌트",
      idDone: false
    },
    {
      id: 3,
      text: "리액트",
      idDone: false
    }
  ]);
  // 인풋 입력값 상태관리
  const [ desc, setDesc ] = useState("");
  // 항목 id 관리
  const idNum = useRef(4);

  function onChange(e) {
    const inputValue = e.target.value;
    setDesc(inputValue);
  }
  function onCreatelist(e) {
    e.preventDefault();
    // 새로운 객체 만들기
    const list = {
      id: idNum.current,
      text: desc,
      idDone: false
    }
    // todoList배열 업데이트(새로운 객체 추가하기)
    setTodoList([
      ...todoList,list
    ])
    // idNum값을 1씩 추가하기
    idNum.current = idNum.current + 1;
  }
  // 해당 id항목 삭제하기
  function onRemove(id) {
    setTodoList(todoList.filter(todo => todo.id !== id));
  }
  // 해당 id항목 idDone반전
  function onToggle(id) {
    setTodoList(todoList.map(todo => todo.id === id ? { ...todo, idDone: !todo.idDone} : todo));
  }
  return (
    <div className="App">
      <div>
        <h1>안녕하세요.!</h1>
        <p>원격저장소가 생겼습니다.!</p>
      </div>
      <GlobalStyle />
      <TodoTemplate>
        <TodoHeader todoList={todoList} />
        <TodoList todoList={todoList} onRemove={onRemove} onToggle={onToggle} />
        <TodoInsert onChange={onChange} onCreatelist={onCreatelist} desc={desc} />
      </TodoTemplate>
    </div>
  );
}

export default App;