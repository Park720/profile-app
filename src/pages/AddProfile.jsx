import React from 'react';
import Wrapper from '../components/Wrapper';
import AddProfileForm from '../components/AddProfileForm';
import { useNavigate } from 'react-router-dom';

const AddProfile = ({ onAddProfile }) => {
const navigate = useNavigate();

const addProfile = (newProfile) => {
    onAddProfile(newProfile)
    alert("Profile added!")
};

return (
    <Wrapper id="add-profile">
        <h2 style={{ padding: '20px', textAlign: 'center' }}>Add New Profile</h2>
        <AddProfileForm onAddProfile={addProfile} />
    </Wrapper>
)
};

export default AddProfile