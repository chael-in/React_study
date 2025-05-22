import React, { useState } from 'react';
import MemoInput from './MemoComponents/MemoInput';
import MemoList from './MemoComponents/MemoList';

let nextId = 1;

function App() {
    const [memos, setMemos] = useState([]);

    const addMemo = (title, content) => {
        setMemos(prev => [...prev, { id: nextId++, title, content }]);
    };

    return (
        <div style={{ padding: '20px' }}>
            <h1>메모장</h1>
            <h2>메모 등록</h2>
            <MemoInput onAdd={addMemo} />
            <h2>메모 목록</h2>
            <MemoList memos={memos} />
        </div>
    );
}

export default App;

