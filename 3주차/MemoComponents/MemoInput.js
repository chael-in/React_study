import React, { Component } from 'react';

class MemoInput extends Component {
    state = {
        title: '',
        content: ''
    };

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value});
    };

    handleSubmit = () => {
        this.props.addMemo(this.state.title, this.state.content);
        this.setState({title: '', content: ''});
    };

    render() {
        return (
            <div>
                <h1>메모 등록</h1>
                <input 
                    type='text'
                    name='title'
                    placeholder='제목'
                    value={this.state.title}
                    onChange={this.handleChange}
                />
                <textarea  
                    name='content'
                    placeholder='내용'
                    value={this.state.content}
                    onChange={this.handleChange}
                />
                <button onClick={this.handleSubmit}>등록</button>
            </div>
        );
    }
}

export default MemoInput;