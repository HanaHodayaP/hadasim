import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Loader from "../Common/Loader";
import "./User.css";
const EditUser = () => {
  const [user, setUser] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  const getUserApi = "http://localhost:3000/persons";

  useEffect(() => {
    getUser();
  }, []);

  const getUser = () => {
    axios
      .get(getUserApi.concat("/") + id)
      .then((item) => {
        setUser(item.data);
      })
      .catch((err) => {

      });
  };

  const handelInput = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handelSubmit = (e) => {
    e.preventDefault();

    fetch(getUserApi.concat("/") + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setIsLoading(true);
        navigate("/show-user");
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
      })
  };

  return (
    <div className="user-form">
      <div className="heading">
      {isLoading && <Loader />}
        <p>Edit Form</p>
      </div>
      <form onSubmit={handelSubmit}>
      <div className="mb-3 mt-3">
          <label for="ID" className="form-label">
            ID
          </label>
          <input
            type="text"
            className="form-control"
            id="id"
            name="id"
            value={user.id}
            readonly
            //onChange={handelInput}
          />
        </div>
        <div className="mb-3">
          <label for="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={user.name}
            onChange={handelInput}
          />
        </div>
        <div className="mb-3 mt-3">
          <label for="city" className="form-label">
           city
          </label>
          <input
            type="text"
            className="form-control"
            id="city"
            name="city"
            value={user.city}
            onChange={handelInput}
          />
        </div>
        <div className="mb-3 mt-3">
          <label for="street" className="form-label">
          street
          </label>
          <input
            type="text"
            className="form-control"
            id="street"
            name="street"
            value={user.street}
            onChange={handelInput}
          />
        </div>
        <div className="mb-3">
          <label for="number" className="form-label">
            number
          </label>
          <input
            type="number"
            className="form-control"
            id="number"
            name="number"
            value={user.number}
            onChange={handelInput}
          />
        </div>
        <div className="mb-3">
          <label for="telephone" className="form-label">
          telephone
          </label>
          <input
            type="text"
            className="form-control"
            id="tel"
            name="tel"
            value={user.tel}
            onChange={handelInput}
          />
        </div>
        <div className="mb-3">
          <label for="cel" className="form-label">
            cellphone
          </label>
          <input
            type="text"
            className="form-control"
            id="cel"
            name="cel"
            value={user.cel}
            onChange={handelInput}
          />
        </div>
        <div className="mb-3">
          <label for="birthDate" className="form-label">
          birthDate
          </label>
          <input
            type="Date"
            className="form-control"
            id="birthDate"
            name="birthDate"
            value={user.birthDate}
            onChange={handelInput}
          />
        </div>
        <div className="mb-3">
          <label for="positive" className="form-label">
          positive
          </label>
          <input
            type="Date"
            className="form-control"
            id="positive"
            name="positive"
            value={user.positive}
            onChange={handelInput}
          />
        </div>
        <div className="mb-3">
          <label for="health" className="form-label">
          health
          </label>
          <input
            type="Date"
            className="form-control"
            id="health"
            name="health"
            value={user.health}
            onChange={handelInput}
          />
        </div>
        <button type="submit" className="btn btn-primary submit-btn">
          EDIT
        </button>
      </form>
    </div>
  );
};
export default EditUser;
