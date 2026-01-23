import Navbar from './components/Navbar';
import Wrapper from './components/Wrapper';
import About from './components/About';
import Card from './components/Card';
import './App.css'; 
import man1 from "./assets/man1.png";   
import woman1 from "./assets/woman1.png"; 
import woman2 from "./assets/woman2.png";

function App() {
  const profiles = [
    { id: 0, name: "Jane Foster", title: "UX designer", image: woman1, },
    { id: 1, name: "John Doe", title: "Frontend Developer", image: man1},
    { id: 2, name: "Olivia Smith", title: "Backend Developer", image: woman2}
  ];

  return (
    <>
      <Navbar />
      <h1>Profile App</h1>
      <Wrapper id="about">
        <About />
      </Wrapper>
      <Wrapper id="profiles">
        <div className="grid">
          {profiles.map((profile) => (
            <Card
              key={profile.id}
              name={profile.name}
              title={profile.title}
              image={profile.image}
            />
          ))}
        </div>
      </Wrapper>
    </>
  );
}

export default App;