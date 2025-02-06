import React from 'react';

function CreateToDo({input, onChange, onCreate}) {
    return (
        <div>
            <input 
            name='todo'
            placeholder='할 일'
            onChange={onChange}
            value={input} />
            <button onClick={onCreate}>등록</button>
        </div>
    );

}

export default CreateToDo;