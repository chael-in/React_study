import React, { Component } from 'react';

class MemoList extends Component {
    render() {
        return (
            <div>
                <h1>메모 목록</h1>
                <ul>
                    {this.props.memos.map((memo, index) =>  // itemList → memos로 변경
                    (
                        <li key={index} onClick={() => this.props.removeMemo(index)}>
                            <strong>{memo.title}</strong>
                            <p>{memo.content}</p>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default MemoList;
