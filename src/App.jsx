import { useState } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import styles from './App.module.css';
import Home from './pages/Home';
import About from './pages/About';
import AddProfile from './pages/AddProfile';
import FetchedProfiles from './components/FetchedProfile';
import ProfileDetailPage from './pages/ProfileDetailPage';
import ProfileLayOut from './pages/ProfileLayoutPage';
import NotFound from './pages/NotFound';
import { useContext } from 'react';
import { ModeContext } from './context/ModeContext';
import { ProfileProvider } from './context/ProfileContext'

function App() {
  const { theme } = useContext(ModeContext);

  const appClass = theme === "dark" ? `${styles.container} ${styles.nightMode}` : styles.container;

  return (
    <ProfileProvider>
      <HashRouter>
        <div className={appClass}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/add-profile" element={<AddProfile />} />
            <Route path="/other-profiles" element={<ProfileLayOut />}>
            <Route index element={<FetchedProfiles />} />
              <Route path=":id" element={<ProfileDetailPage />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </HashRouter>
    </ProfileProvider>
  );
}

export default App;