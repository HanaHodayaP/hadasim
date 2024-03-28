import React, { useState } from 'react'
import {useNavigate } from "react-router-dom";
import Loader from '../Common/Loader';
import './User.css';
const CreateUser = () => {
    const navigate = useNavigate();
    const createUserApi = "http://localhost:3000/person"
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [user, setUser] = useState({
        id: "",
        name: "",
        city: "",
        birthDate: "",
        street: "",
        number: "",
        tel: "",
        cel: "",
        positive: "",
        health: ""
    })

    const handelInput = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
    }

    const handelSubmit = async (event) => {
        event.preventDefault();
        try {
            setIsLoading(true);
            const response = await fetch(createUserApi, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user),
            });

            if (response.ok) {
                setUser({
                    id: "",
                    name: "",
                    city: "",
                    birthDate: "",
                    street: "",
                    number: "",
                    tel: "",
                    cel: "",
                    positive: "",
                    health: ""
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
        <div className='user-form'>
            <div className='heading'>
                {isLoading && <Loader />}
                {error && <p>Error: {error}</p>}
                <p>New Person</p>
            </div>
            <form onSubmit={handelSubmit}>
                <div className="mb-3">
                    <label for="id" className="form-label">id</label>
                    <input type="text" className="form-control" id="id" name="id" value={user.id} onChange={handelInput} />
                </div>
                <div className="mb-3">
                    <label for="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" name="name" value={user.name} onChange={handelInput} />
                </div>
                <div className="mb-3">
                    <label for="city" className="form-label">city</label>
                    <input type="text" className="form-control" id="city" name="city" value={user.city} onChange={handelInput} />
                </div>
                <div className="mb-3">
                    <label for="street" className="form-label">street</label>
                    <input type="text" className="form-control" id="street" name="street" value={user.street} onChange={handelInput} />
                </div>
                <div className="mb-3">
                    <label for="number" className="form-label">number</label>
                    <input type="text" className="form-control" id="number" name="number" value={user.number} onChange={handelInput} />
                </div>
                <div className="mb-3">
                    <label for="tel" className="form-label">tel</label>
                    <input type="text" className="form-control" id="tel" name="tel" value={user.tel} onChange={handelInput} />
                </div>
                <div className="mb-3">
                    <label for="cel" className="form-label">cel</label>
                    <input type="text" className="form-control" id="cel" name="cel" value={user.cel} onChange={handelInput} />
                </div>
                <div className="mb-3">
                    <label for="birthDate" className="form-label">birthDate</label>
                    <input type="Date" className="form-control" id="birthDate" name="birthDate" value={user.birthDate} onChange={handelInput} />
                </div>
                <div className="mb-3">
                    <label for="positive" className="form-label">positive</label>
                    <input type="Date" className="form-control" id="positive" name="positive" value={user.positive} onChange={handelInput} />
                </div>
                <div className="mb-3">
                    <label for="health" className="form-label">health</label>
                    <input type="Date" className="form-control" id="health" name="health" value={user.health} onChange={handelInput} />
                </div>
                <button type="submit" className="btn btn-primary submit-btn">Submit</button>
            </form>
        </div>
    )
}

export default CreateUser