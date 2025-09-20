import { useState } from 'react';
import Profile from './components/Profile/Profile';
import Section from './components/Section/Section';

import dataFromServer from './db/profiles.json';

function App() {
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // setCounter(counter + 1); ❌
    // setCounter(actualCounter => actualCounter + 1);
    // setCounter(actualCounter => actualCounter + 1);
    // setCounter(actualCounter => actualCounter + 1); ✅
  };

  const handleClisk = userName => {
    console.log('userName :', userName);
  };

  return (
    <div>
      <Section>
        <p>Counter: {counter}</p>
        <button type="button" onClick={incrementCounter}>
          Count
        </button>
      </Section>

      <Section>
        {dataFromServer.map(
          ({ email, name, phone, status, hasPhisicalAddress }) => {
            return (
              <Profile
                key={email}
                name={name}
                phone={phone}
                email={email}
                status={status}
                hasPhisicalAddress={hasPhisicalAddress}
                handleClisk={handleClisk}
              />
            );
          },
        )}
      </Section>
    </div>
  );
}

export default App;
