import { useState } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import styles from './App.module.css';
import Home from './pages/Home';
import About from './pages/About';
import AddProfile from './pages/AddProfile';
import FetchedProfiles from './components/FetchedProfile';
import OtherProfiles from './pages/OtherProfiles';
import ProfileDetailPage from './pages/ProfileDetailPage';
import ProfileLayOut from './pages/ProfileLayoutPage';
import NotFound from './pages/NotFound';

import man1 from "./assets/man1.png";   
import woman1 from "./assets/woman1.png"; 
import woman2 from "./assets/woman2.png";

function App() {
  const [profiles, setProfiles] = useState([
    { id: 0, name: "Jane Foster", year: "Freshman", major: "Game Development", email: "foster@purdue.edu", image: woman1 },
    { id: 1, name: "John Doe", year: "Sophomore", major: "Web Programming", email: "doe@purdue.edu", image: man1 },
    { id: 2, name: "Olivia Smith", year: "Junior", major: "UI/UX Design", email: "smith@purdue.edu", image: woman2 },
    { id: 3, name: "Michael Brown", year: "Senior", major: "Cybersecurity", email: "brown@purdue.edu", image: man1 },
  ]);

  const [isNight, setIsNight] = useState(false);

  const addProfileHandler = (newProfile) => {
    setProfiles((prev) => [newProfile, ...prev]);
  };

  const appClass = isNight ? `${styles.container} ${styles.nightMode}` : styles.container;

  return (
    <HashRouter>
      <div className={appClass}>
        <Navbar isNight={isNight} onToggle={() => setIsNight(!isNight)} />
        <Routes>
          <Route path="/" element={<Home profiles={profiles} isNight={isNight} />} />
          <Route path="/about" element={<About isNight={isNight} />} />
          <Route path="/add-profile" element={<AddProfile onAddProfile={addProfileHandler} isNight={isNight} />} />
          <Route path="/other-profiles" element={<ProfileLayOut isNight={isNight} />}>
          <Route index element={<FetchedProfiles isNight={isNight} />} />
            <Route path=":id" element={<ProfileDetailPage isNight={isNight} />} />
          </Route>
          <Route path="*" element={<NotFound isNight={isNight} />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;