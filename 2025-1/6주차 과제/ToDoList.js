import React from 'react';

function ToDo({todo, onRemove, onComplete}) {
    return (
        <div>
            <b>ToDo: </b> {todo.todo}
            <button onClick={() => onRemove(todo.id)}>삭제</button>
            <button onClick={() => onComplete(todo.id)}>완료</button>
        </div>
    )
}

function ToDoList({todos, onRemove, onComplete}) {
    return (
        <div>
            {todos.map(todo => (
                <ToDo
                    key={todo.id}
                    todo={todo}
                    onRemove={onRemove}
                    onComplete={onComplete}
                />
            ))}
        </div>
    );
}

export default ToDoList;