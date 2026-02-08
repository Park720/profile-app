import Navbar from './components/Navbar';
import Wrapper from './components/Wrapper';
import Filters from './components/Filters';
import AddProfileForm from './components/AddProfileForm';
import About from './components/About';
import Card from './components/Card';
import CardContainer from './components/CardContainer'; 
import FetchedProfiles from './components/FetchedProfile';
import { useState } from 'react';
import styles from './App.module.css';

import man1 from "./assets/man1.png";   
import woman1 from "./assets/woman1.png"; 
import woman2 from "./assets/woman2.png";

function App() {
  const [profiles, setProfiles] = useState([
    { id: 0, name: "Jane Foster", year: "Freshman", major: "Game Development", email: "foster@purdue.edu", image: woman1, },
    { id: 1, name: "John Doe", year: "Sophomore", major: "Web Programming", email: "doe@purdue.edu", image: man1},
    { id: 2, name: "Olivia Smith", year: "Junior", major: "UI/UX Design", email: "smith@purdue.edu", image: woman2},
    { id: 3, name: "Michael Brown", year: "Senior", major: "Cybersecurity", email: "brown@purdue.edu", image: man1},
  ]);
  const majors = [...new Set(profiles.map(profile => profile.major))];
  const years = [...new Set(profiles.map(profile => profile.year))];

  const [major, setMajor] = useState("");
  const [year, setYear] = useState("");
  const [name, setName] = useState("");
  const [isNight, setIsNight] = useState(false);

  const handleMajor = (e) => {
    setMajor(e.target.value);
  }

  const handleYear = (e) => {
    setYear(e.target.value);
  }

  const handleSearch = (e) => {
    setName(e.target.value);
  }

  const handleClear = () => {
    setMajor(""); 
    setYear("");
    setName("");
  }

  const updatedProfiles = (profile) => {
    setProfiles(pre => [profile, ...pre]);
  };

  const filteredProfiles = profiles.filter(profile => {
    return (
      (major === "" || profile.major === major) &&
      (year === "" || profile.year === year) &&
      (name === "" || profile.name.toLowerCase().includes(name.toLowerCase()))
    );
  });

  const appClass = isNight ? `${styles.container} ${styles.nightMode}` : styles.container;
  
  return (
    <div className={appClass}> {}
      <Navbar isNight={isNight} onToggle={() => setIsNight(!isNight)} />
        
      <Wrapper id="about">
        <About isNight={isNight} />
      </Wrapper>

      <Wrapper id="add-profile">
        <AddProfileForm onAddProfile={updatedProfiles} />
      </Wrapper>

      <Wrapper id="profiles">
        <Filters 
          majors={majors} 
          major={major}
          name={name}
          years={years}
          year={year}
          handleMajor={handleMajor} 
          handleSearch={handleSearch} 
          handleClear={handleClear} 
          handleYear={handleYear}
          isNight={isNight}
          />
        
          <CardContainer title="Student Profiles" isNight={isNight}>
            {filteredProfiles.map((profile) => (
            <Card
              key={profile.id}
              name={profile.name}
              year={profile.year}
              major={profile.major}
              email={profile.email}
              image={profile.image}
              isNight={isNight}
            />
          ))}
        </CardContainer>
      </Wrapper>

      <Wrapper id="fetched-profiles">
        <h2>
          Fetched Profiles (API)
        </h2>
        <FetchedProfiles/>
      </Wrapper>
    </div>
  );
}

export default App;