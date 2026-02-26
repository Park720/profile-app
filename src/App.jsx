import React, { Suspense, lazy } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import styles from './App.module.css';
import { useContext } from 'react';
import { ModeContext } from './context/ModeContext';
import { ProfileProvider } from './context/ProfileContext'

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const AddProfile = lazy(() => import('./pages/AddProfile'));
const FetchedProfiles = lazy(() => import('./components/FetchedProfile'));
const ProfileDetailPage = lazy(() => import('./pages/ProfileDetailPage'));
const ProfileLayOut = lazy(() => import('./pages/ProfileLayoutPage'));
const NotFound = lazy(() => import('./pages/NotFound'));

function App() {
  const { theme } = useContext(ModeContext);

  const appClass = theme === "dark" ? `${styles.container} ${styles.nightMode}` : styles.container;

  return (
    <ProfileProvider>
      <HashRouter>
        <div className={appClass}>
          <Navbar />
          <Suspense fallback={<div className={styles.loading}>Loading page...</div>}>
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
          </Suspense>
        </div>
      </HashRouter>
    </ProfileProvider>
  );
}

export default App;