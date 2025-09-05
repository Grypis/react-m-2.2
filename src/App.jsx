import Profile from './components/Profile/Profile';
import Section from './components/Section/Section';

import dataFromServer from './db/profiles.json';

function App() {
  return (
    <div>
      <Section>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil est
          perspiciatis culpa accusantium totam sequi, ducimus veniam modi
          tenetur sapiente, quam deleniti assumenda repudiandae nostrum
          obcaecati sed veritatis illum earum.
        </p>
        <button>Lorem, ipsum</button>
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
              />
            );
          },
        )}
      </Section>
    </div>
  );
}

export default App;
