import Wrapper from '../components/Wrapper';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import style from './ProfileDetailPage.module.css';


const ProfileDetailPage = () => {
    const { id } = useParams();
    const [profile, setProfile] = useState(null);
    useEffect(() => {
        fetch(`https://web.ics.purdue.edu/~zong6/profile-app/fetch-data-with-id.php?id=${id}`)
            .then(response => response.json())
            .then(data => {setProfile(data)})
    }, [id])

    return profile ? (
        <Wrapper id="profile-detail">
            <div className={style['profile-detailCard']}>
                <div className={style['profile-detail']}>
                    <h1>{profile.name}</h1>
                    <img src={profile.image_url} alt={profile.name} />
                    <p>{profile.email}</p>
                    <p>{profile.title}</p>         
                    <p>{profile.bio}</p>   
                </div>
            </div> 
        </Wrapper>
        ) : (
        <Wrapper>
            <p>Loading</p>
        </Wrapper>
    )
};

export default ProfileDetailPage;