import React, { useState } from 'react';

function MemoInput({ onAdd }) {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title.trim() || !content.trim()) return;
        onAdd(title, content);
        setTitle('');
        setContent('');
    };

    return (
        <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '10px' }}>
            <input
                placeholder="제목"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
                placeholder="내용"
                value={content}
                onChange={(e) => setContent(e.target.value)}
            />
            <button type="submit">등록</button>
        </form>
    );
}

export default MemoInput;

