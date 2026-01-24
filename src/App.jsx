import Navbar from './components/Navbar';
import Wrapper from './components/Wrapper';
import About from './components/About';
import Card from './components/Card';
import CardContainer from './components/CardContainer'; // [중요] 새로 만든 컴포넌트 임포트
import './App.css'; 

import man1 from "./assets/man1.png";   
import woman1 from "./assets/woman1.png"; 
import woman2 from "./assets/woman2.png";

function App() {
  const profiles = [
    { id: 0, name: "Jane Foster", year: "Junior", major: "Game Development", email: "foster@purdue.edu", image: woman1, },
    { id: 1, name: "John Doe", year: "Senior", major: "Web Programming", email: "doe@purdue.edu", image: man1},
    { id: 2, name: "Olivia Smith", year: "Sophomore", major: "UI/UX Design", email: "smith@purdue.edu", image: woman2}
  ];

  return (
    <>
      <Navbar />
      <h1>Profile App</h1>
      <Wrapper id="about">
        <About />
      </Wrapper>
      <Wrapper id="profiles">
        <CardContainer title="Student Profiles">
          {profiles.map((profile) => (
            <Card
              key={profile.id}
              name={profile.name}
              year={profile.year}
              major={profile.major}
              email={profile.email}
              image={profile.image}
            />
          ))}
        </CardContainer>
      </Wrapper>
    </>
  );
}

export default App;