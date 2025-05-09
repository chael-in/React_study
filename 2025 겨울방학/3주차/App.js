import React, { Component } from 'react';
import MemoInput from './MemoComponents/MemoInput';
import MemoList from './MemoComponents/MemoList'

class App extends Component {
  state = {
    memos: []
  };

  addMemo = (title, content) => {
    this.setState((prevState) => ({
      memos: [...prevState.memos, { title, content }]
    }));
  };

  removeMemo = (index) => {
    this.setState((prevState) => ({
      memos: prevState.memos.filter((_, i) => i !== index)
    }));
  };

  render() {
    return (
      <div>
        <h1>메모장</h1>
        <MemoInput addMemo={this.addMemo} />
        <MemoList memos={this.state.memos} removeMemo={this.removeMemo} />
      </div>
    );
  }
}

export default App;
