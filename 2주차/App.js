import React, {useState, useRef} from 'react';
import ToDoList from './ToDoList/ToDoList';
import CreateToDo from './ToDoList/CreateToDo';

function App() {
  const [input, setInput] = useState('');

  const onChange = (e) => {
    setInput(e.target.value);
  };

  const [todos, setTodos] = useState(
    [{id: 0,
    todo: ''},
  ]);

  const nextId = useRef(1);

  const onCreate = () => {
    const todo = {
      id: nextId.current,
      input
    };
    setTodos(todos.concat(todo));
    setInput('');
    nextId.current += 1;
  };

  const onComplete = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  };

  const onRemove = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <>
      <h1>ToDo List</h1>
      <CreateToDo 
        input={input}
        onChange={onChange}
        onCreate={onCreate} />
      <ToDoList 
        todos={todos} 
        onRemove={onRemove} 
        onComplete={onComplete} />
    </>
  );
}

export default App;
