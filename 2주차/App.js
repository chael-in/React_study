import React, {useState} from 'react';

function App() {
    const [toDo, setTodo] = useState('');
    const [toDos, setTodos] = useState([]);

    const onChange = (e) => {
        setTodo(e.target.value);
    };
    
    const onSubmit = (e) => {
        e.preventDefault();
        if (toDo.trim() !== '') {
            setTodos([...toDos, {text: toDo, completed: false}]);
            setTodo('');
        }
    };

    const onRemove = (index) => {
        setTodos(toDos.filter((_, i) => i !== index));
    };

    const onComplete = (index) => {
        setTodos(
            toDos.map((todo, i) => i === index ? {...todo, completed: !todo.completed} : todo)
        );
    };

    return (
        <div>
            <h1>Todo List</h1>
            <form onSubmit={onSubmit}>
                <input id='todo' type='text' value={toDo} onChange={onChange} />
                <button id='addButton' type='submit'>✚</button>
            </form>
            <ul id='todoBox'>
                {toDos.map((todo, index) => (
                    <li key={index} style={{textDecoration: todo.completed ? 'line-through' : 'none'}}>
                        {todo.text}
                        <button onClick={() => onComplete(index)}>완료</button>
                        <button onClick={() => onRemove(index)}>삭제</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;