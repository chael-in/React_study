import React, {useState} from 'react';

function Card({name, age, hobby}) {

  const [input, setInput] = useState({
    favFood: ''
  })

  const {favFood} = input;

  const onChange = (e) => {
    const {name, value} = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };

  const onClick = () => {
    setInput({
      favFood: '',
    });
  }

  return (
    <div>
      <div>
        <input name='favFood' placeholder='좋아하는 음식' onChange={onChange} value={favFood} />
        <button onClick={onClick}>변경</button> 
        <hr />
        <b>Name: </b>{name} <br />
        <b>Age: </b>{age} <br />
        <b>Hobby: </b>{hobby} <br />
        <b>favFood: </b>{favFood}
      </div>
    </div>
  )
}

export default Card;