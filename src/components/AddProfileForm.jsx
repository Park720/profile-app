import React from 'react';
import { useReducer, useRef, useEffect } from 'react';
import style from './AddProfileForm.module.css';
import { useNavigate } from 'react-router-dom';

const stripTags = (input) => {
    return input.replace(/<\/?[^>]+(>|$)/g, "");
}
const trimCollapse = (input) => {
    return input.replace(/\s+/g, ' ').trim();
}

const AddProfileForm = ({ onAddProfile }) => {

    const nameRef = useRef(null);

    useEffect(() => {
        nameRef.current.focus();
    }, []);

    const initialState = {
        values: { name: '', year: '', major: '', email: '', bio: '', image: null },
        error: "",
        isSubmitting: false,
        success: false,
    };

    const [state, dispatch] = useReducer((state, action) => {
        switch (action.type) {
            case 'SET_VALUES':
                return { ...state, values: action.payload };
            case 'SET_ERROR':
                return { ...state, error: action.payload };
            case 'SET_IS_SUBMITTING':
                return { ...state, isSubmitting: action.payload };
            case 'SET_SUCCESS':
                return { ...state, success: action.payload };
            default:
                return state;
        }
    }, initialState);

    const { values, error, isSubmitting, success } = state;
    const navigate = useNavigate();

    const handleChange = (event) => {
        const { name, value } = event.target
        if (name === 'image') {
            const file = event.target.files[0]
            if (file && file.size < 1024 * 1024) {
                dispatch({ type: 'SET_VALUES', payload: { ...values, image: file } })
                dispatch({ type: 'SET_ERROR', payload: "" })
            } else {
                dispatch({ type: 'SET_ERROR', payload: "Image size should be less than 1MB" })
                dispatch({ type: 'SET_VALUES', payload: { ...values, image: null } })
            }
        }else{        
        dispatch({ type: 'SET_VALUES', payload: { ...values, [name]: value } })
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch({ type: 'SET_IS_SUBMITTING', payload: true })
        try {
            if (!stripTags(trimCollapse(values.name))|| 
            !stripTags(trimCollapse(values.year))||
            !stripTags(trimCollapse(values.major))|| 
            !stripTags(trimCollapse(values.email))|| 
            !trimCollapse(values.bio) || 
            !values.image) {
                dispatch({ type: 'SET_ERROR', payload: "All fields are required" })
                dispatch({ type: 'SET_IS_SUBMITTING', payload: false })
                return
            }
            const cleanedData = {
                id: Date.now(),
                name: stripTags(trimCollapse(values.name)),
                year: stripTags(trimCollapse(values.year)),
                major: stripTags(trimCollapse(values.major)),
                email: stripTags(trimCollapse(values.email)),
                bio: trimCollapse(values.bio),
                image: URL.createObjectURL(values.image)
            }
            onAddProfile(cleanedData);
            dispatch({ type: 'SET_VALUES', payload: { name: '', year: '', major: '', email: '', bio: '', image: null } })
            event.target.reset();
            dispatch({ type: 'SET_ERROR', payload: "" })
            dispatch({ type: 'SET_SUCCESS', payload: "Profile is submitted successfully" })
            setTimeout(() => {
                dispatch({ type: 'SET_SUCCESS', payload: "" })
                navigate("/");
            }, 1000)
        } catch (error) {
            dispatch({ type: 'SET_ERROR', payload: error.message })
        } finally {
            dispatch({ type: 'SET_IS_SUBMITTING', payload: false })
        }
    }

    const disabled = !stripTags(trimCollapse(values.name))|| 
        !stripTags(trimCollapse(values.year))||
        !stripTags(trimCollapse(values.major))||
        !stripTags(trimCollapse(values.email))||
        !stripTags(trimCollapse(values.bio))||
        isSubmitting
    return (
    <form onSubmit={handleSubmit} className={style['add-profile-form']}> 
        <label htmlFor="name">Name</label>
        <input ref={nameRef} id="name" name="name" required value={values.name} onChange={handleChange} />

        <label htmlFor="year">Year</label>
        <input id="year" name="year" required value={values.year} onChange={handleChange} />

        <label htmlFor="major">Major</label>
        <input id="major" name="major" required value={values.major} onChange={handleChange} />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required value={values.email} onChange={handleChange} />

        <label htmlFor="bio">Bio</label>
        <textarea id="bio" name="bio" maxLength={200} required value={values.bio} onChange={handleChange} />

        <label htmlFor="image">Upload an image</label>
        <input id="image" name="image" type="file" accept="image/*" onChange={handleChange} />

        <button disabled={disabled}>Add Profile</button>
        
        {error && <p>{error}</p>}
        {success && <p>{success}</p>}
    </form>
);

}


export default AddProfileForm;