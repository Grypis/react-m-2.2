import { useState } from 'react';
import Profile from './components/Profile/Profile';
import Section from './components/Section/Section';

import dataFromServer from './db/profiles.json';
import Bar from './components/Bar/Bar';

function App() {
  const [showUserList, setShowUserList] = useState(false);
  const [bottles, setBottles] = useState({
    beer: 2,
    wine: 3,
    whiskey: 1,
  });

  const handleClisk = userName => {
    console.log('userName :', userName);
  };

  const toggleUserList = () => {
    // setShowUserList(actualState => !actualState);
    setShowUserList(!showUserList);
  };

  const onBarSupplyAdd = alcoName => {
    console.log('click', alcoName);
  };

  const total = bottles.beer + bottles.wine + bottles.whiskey;

  return (
    <div>
      <Section title="FSON105 weekend bar">
        <Bar
          beer={bottles.beer}
          wine={bottles.wine}
          whiskey={bottles.whiskey}
          total={total}
          onBarSupplyAdd={onBarSupplyAdd}
        />
      </Section>
      <Section>
        <button type="button" onClick={toggleUserList}>
          Toggle User List
        </button>
        {showUserList && (
          <div>
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
          </div>
        )}
      </Section>
    </div>
  );
}

export default App;
