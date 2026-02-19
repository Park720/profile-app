import React, { useContext } from 'react';
import Wrapper from '../components/Wrapper';
import AddProfileForm from '../components/AddProfileForm';
import { ProfileContext } from '../context/ProfileContext';


const AddProfile = ({  }) => {

const { addProfile } = useContext(ProfileContext); 

return (
    <Wrapper id="add-profile">
        <h2 style={{ padding: '20px', textAlign: 'center' }}>Add New Profile</h2>
        <AddProfileForm onAddProfile={addProfile} />
    </Wrapper>
)
};

export default AddProfile