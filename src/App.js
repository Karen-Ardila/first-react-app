import React from 'react'
import PersonCard from './components/personCard'

const App = () => {
  return (
    <div>
      <PersonCard firstName='Karen'
        lastName='Ardila'
        age={26}
        hairColor='dark Brown' />
      <PersonCard firstName='Toto'
        lastName='Crybaby'
        age={11}
        hairColor='bronde' />
      <PersonCard firstName='Chloe'
        lastName='Elizabeth'
        age={9}
        hairColor='black' />
    </div>

  );
}

export default App;
