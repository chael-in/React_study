import React from 'react';

function ToDo({todo, onRemove, onComplete}) {
    return (
        <div>
            <b>ToDo: </b> {todo.input}
            <button onClick={onRemove}>삭제</button>
            <button onClick={onComplete}>완료</button>
        </div>
    )
}

function ToDoList({todos, onRemove, onComplete}) {
    return (
        <div>
            {todos.map(todo => (
                <ToDo 
                    todo={todo} 
                    onRemove={onRemove} 
                    onComplete={onComplete} />
            ))}
        </div>
    );
}

export default ToDoList;