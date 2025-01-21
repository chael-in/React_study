import React from 'react'
import Card from './Card';

function App() {
  const input = {
    name: 'Chaelin',
    age: '24',
    hobby: 'reading'
  };

  return (
    <div>
      <Card {...input} />
    </div>
  );
}

export default App;