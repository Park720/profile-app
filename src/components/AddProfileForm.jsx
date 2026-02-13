import React from 'react';
import {useState} from 'react';
import style from './AddProfileForm.module.css';
import { useNavigate } from 'react-router-dom';

const stripTags = (input) => {
    return input.replace(/<\/?[^>]+(>|$)/g, "");
}
const trimCollapse = (input) => {
    return input.replace(/\s+/g, ' ').trim();
}

const AddProfileForm = ({ onAddProfile }) => {

    const [values, setValues] = useState({ 
        name: '', 
        year: '', 
        major: '', 
        email: '', 
        bio: '', 
        image: null, 
    })
    const [error, setError] = useState("")
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [success, setSuccess] = useState(false)

    const {name, year, major, email, bio, image} = values
    const navigate = useNavigate();

    const handleChange = (event) => {
        const { name, value } = event.target
        if (name === 'image') {
            const file = event.target.files[0]
            if (file && file.size < 1024 * 1024) {
                setValues(pre => ({ ...pre, image: file }))
                setError("")
            } else {
                setError("Image size should be less than 1MB")
                setValues(pre => ({ ...pre, image: null }))
            }
        }else{        
        setValues(pre => ({ ...pre, [name]: value }))
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        setIsSubmitting(true)
        try {
            if (!stripTags(trimCollapse(name))|| 
            !stripTags(trimCollapse(year))||
            !stripTags(trimCollapse(major))|| 
            !stripTags(trimCollapse(email))|| 
            !trimCollapse(bio) || 
            !image) {
                setError("All fields are required")
                setIsSubmitting(false)
                return
            }
            const cleanedData = {
                id: Date.now(),
                name: stripTags(trimCollapse(name)),
                year: stripTags(trimCollapse(year)),
                major: stripTags(trimCollapse(major)),
                email: stripTags(trimCollapse(email)),
                bio: trimCollapse(bio),
                image: URL.createObjectURL(image)
            }
            onAddProfile(cleanedData);
            setValues({ name: '', year: '', major: '', email: '', bio: '', image: null })
            event.target.reset();
            setError("")
            setSuccess("Profile is submitted successfully")
            setTimeout(() => {
                setSuccess("")
                navigate("/");
            }, 1000)
        } catch (error) {
            setError(error.message)
        } finally {
            setIsSubmitting(false)
        }
    }

    const disabled = !stripTags(trimCollapse(name))|| 
        !stripTags(trimCollapse(year))||
        !stripTags(trimCollapse(major))||
        !stripTags(trimCollapse(email))||
        !stripTags(trimCollapse(bio))||
        isSubmitting
    return (
    <form onSubmit={handleSubmit} className={style['add-profile-form']}> {/* style 객체 사용 */}
        <label htmlFor="name">Name</label>
        <input id="name" name="name" required value={name} onChange={handleChange} />

        <label htmlFor="year">Year</label>
        <input id="year" name="year" required value={year} onChange={handleChange} />

        <label htmlFor="major">Major</label>
        <input id="major" name="major" required value={major} onChange={handleChange} />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required value={email} onChange={handleChange} />

        <label htmlFor="bio">Bio</label>
        <textarea id="bio" name="bio" maxLength={200} required value={bio} onChange={handleChange} />

        <label htmlFor="image">Upload an image</label>
        <input id="image" name="image" type="file" accept="image/*" onChange={handleChange} />

        <button disabled={disabled}>Add Profile</button>
        
        {error && <p>{error}</p>}
        {success && <p>{success}</p>}
    </form>
);

}


export default AddProfileForm;