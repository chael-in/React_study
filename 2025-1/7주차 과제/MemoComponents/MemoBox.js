import React from 'react';

function MemoBox({ title, content }) {
    return (
        <li style={{ listStyle: 'none', marginBottom: '10px' }}>
            <strong>{title}</strong>
            <div>{content}</div>
        </li>
    );
}

export default MemoBox;

