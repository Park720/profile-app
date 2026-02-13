import { useEffect, useState } from "react";
import Card from "./Card"; 
import styles from "./FetchedProfile.module.css";
import { Link } from "react-router-dom";

const FetchedProfiles = ({ }) => { 

    const [profiles, setProfiles] = useState([]); 
    const [titles, setTitles] = useState([]);     
    const [title, setTitle] = useState("");       
    const [name, setName] = useState("");         
    const handleChangeTitle = (event) => {
        setTitle(event.target.value);
    };
    const handleSearch = (event) => {
        setName(event.target.value);
    };
    const handleClear = () => {
    setTitle("");
    setName("");
    };

    useEffect(() => {
    fetch("https://web.ics.purdue.edu/~zong6/profile-app/get-titles.php")
        .then((res) => res.json())
        .then((res) => setTitles(res.titles))
    }, []);

    useEffect(() => {
    const url = `https://web.ics.purdue.edu/~zong6/profile-app/fetch-data-with-filter.php?title=${encodeURIComponent(title)}&name=${encodeURIComponent(name)}`;
    fetch(url)
        .then((res) => res.json())
        .then((res) => setProfiles(res.profiles))
    }, [title, name]); 

    return (
    <div className="fetched-profiles-section">
        <div className={styles.filterContainer}>
        <select value={title} onChange={handleChangeTitle}>
            <option value="">All Titles</option>
            {titles.map((t, index) => (
                <option key={index} value={t}>{t}</option>
            ))}
        </select>

        <input 
            type="text" 
            placeholder="Search by name" 
            value={name} 
            onChange={handleSearch} 
        />

        <button onClick={handleClear}>Clear</button>
        </div>

        <div className={styles.grid} >
            {profiles.length > 0 ? (
                profiles.map((profile) => (
                    <Link key={profile.id} to ={`/other-profiles/${profile.id}`}>
                    <Card
                        key={profile.id}           
                        name={profile.name} 
                        major={profile.title}  
                        email= {profile.email}     
                        image={profile.image_url}  
                    />
                    </Link>
                ))
            ) : (
                <p>No profiles found.</p>
            )}
        </div>
    </div>
);
};

export default FetchedProfiles;