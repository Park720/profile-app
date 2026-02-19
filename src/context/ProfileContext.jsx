import { createContext, useState } from 'react';
import man1 from "../assets/man1.png";   
import woman1 from "../assets/woman1.png"; 
import woman2 from "../assets/woman2.png";

export const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
    const [profiles, setProfiles] = useState([
        { id: 0, name: "Jane Foster", year: "Freshman", major: "Game Development", email: "foster@purdue.edu", image: woman1 },
        { id: 1, name: "John Doe", year: "Sophomore", major: "Web Programming", email: "doe@purdue.edu", image: man1 },
        { id: 2, name: "Olivia Smith", year: "Junior", major: "UI/UX Design", email: "smith@purdue.edu", image: woman2 },
        { id: 3, name: "Michael Brown", year: "Senior", major: "Cybersecurity", email: "brown@purdue.edu", image: man1 },
    ]);

    const addProfile = (newProfile) => {
        setProfiles((prev) => [newProfile, ...prev]);
    };

    return (
        <ProfileContext.Provider value={{ profiles, addProfile }}>
            {children}
        </ProfileContext.Provider>
    );
};