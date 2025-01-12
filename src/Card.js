import React, {useState} from 'react';

function Card() {
  const [inputs, setInputs] = useState({
    name: '',
    age: '',
    hobby: '',
    favfood: ''
  })

  const {name, age, hobby, favfood} = inputs;

  const onChange = (e) => {
    const {value, name} = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };

  const onClick = () => {
    setInputs({
        ...inputs,
        favfood: ''
    });
  }

  return (
    <div>
      <input name="name" placeholder='이름' onChange={onChange} value={name} /><br />
      <input name="age" placeholder='나이' onChange={onChange} value={age} /><br />
      <input name="hobby" placeholder='취미' onChange={onChange} value={hobby} /><br />
      <input name="favfood" placeholder='좋아하는 음식' onChange={onChange} value={favfood} />
      <button onClick={onClick}>변경</button>
      <div>
        <b>Name: </b>{name}
        <br />
        <b>Age: </b>{age}
        <br />
        <b>Hobby: </b>{hobby}
        <br />
        <b>FavFood: </b>{favfood}
      </div> 
    </div>
  );
}

export default Card;