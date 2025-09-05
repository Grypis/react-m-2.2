import Profile from "./components/Profile/Profile"
import ProfileList from "./components/ProfileList";
import Section from "./components/Section/Section";

import css from "./components/Profile/Profile.module.css";

import dataFromServer from "./db/profiles.json";


function App() {
  return (
    <div>

      <p className={css.fieldRow}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis iure laudantium maxime repudiandae asperiores officia eius deserunt, voluptatum obcaecati assumenda.</p>
      <Section title="Profile list">
          <Profile
        name="Max"
        phone="123124131"
        email="hi12h@example.com"
        status="online"
        hasPhisicalAddress={false}
        />
        <Profile
        name="Max"
        phone="123124131"
        email="hi12h@example.com"
        status="online"
        hasPhisicalAddress={false}
        />
        <Profile
        name="Max"
        phone="123124131"
        email="hi12h@example.com"
        status="online"
        hasPhisicalAddress={false}
      />
      </Section>

      
     <Section>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil est perspiciatis culpa accusantium totam sequi, ducimus veniam modi tenetur sapiente, quam deleniti assumenda repudiandae nostrum obcaecati sed veritatis illum earum.</p>
        <button>Lorem, ipsum</button>
      </Section>
      <Section>
        {dataFromServer.map(({email, name, phone, status, hasPhisicalAddress}) => {
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
      })}
      </Section>
           
    </div>
  );
}

console.log('hello'); 


export default App
