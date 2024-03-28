import React, { useState } from 'react'
import {useNavigate } from "react-router-dom";
import Loader from '../Common/Loader';
import './User.css';

import { useParams } from 'react-router-dom';

const CreateCorona = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const createCoronaApi = "http://localhost:3000/corona";
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [corona, setCorona] = useState({
        id: id,
        getDate:"",
        factor: ""
    })

    const handelInput = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        setCorona({ ...corona, [name]: value });
    }

    const handelSubmit = async (event) => {
        event.preventDefault();
        try {
            setIsLoading(true);
            const response = await fetch(createCoronaApi, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(corona),
            });

            if (response.ok) {
                setCorona({
                    id: id,
                    getDate:"",
                    factor: ""
                })
                navigate('/show-user');
            } else {
                console.error('Form submission failed!');
            }

        } catch (error) {
            setError(error.message);
        } finally {
            setIsLoading(false);
        }
    }
    return (
        <div className='create-corona'>
            <div className='heading'>
                {isLoading && <Loader />}
                {error && <p>Error: {error}</p>}
                <p>New vaccine</p>
            </div>
            <form onSubmit={handelSubmit}>
                <div className="mb-3">
                    <label for="getDate" className="form-label">Date of receipt of vaccination</label>
                    <input type="Date" className="form-control" id="getDate" name="getDate" value={corona.getDate} onChange={handelInput} />
                </div>
                <div className="mb-3">
                    <label htmlFor="factor" className="form-label">manufacturer</label>
                    <input type="text" className="form-control" id="factor" name="factor" value={corona.factor} onChange={handelInput} />
                </div>
                <button type="submit" className="btn btn-primary submit-btn">Submit</button>
            </form>
        </div>
    )
}
export default CreateCorona