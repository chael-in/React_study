import React from 'react';
import MemoBox from './MemoBox';

function MemoList({ memos }) {
    return (
        <ul style={{ paddingLeft: 0 }}>
            {memos.map((memo) => (
                <MemoBox key={memo.id} title={memo.title} content={memo.content} />
            ))}
        </ul>
    );
}

export default MemoList;
