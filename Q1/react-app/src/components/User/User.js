import { Link } from "react-router-dom";
import Loader from "../Common/Loader";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./User.css";
const User = () => {
  const [user, setUser] = useState([]);
  const [error, setError] = useState(null);
  const [corona, setCorona] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();
  const showCoronaApi = "http://localhost:3000/corona";

  const getUserApi = "http://localhost:3000/persons";

  useEffect(() => {
    getUser();
    getCoronas();
  }, []);

  const getCoronas = () => {
    axios
      .get(showCoronaApi+'/'+id)
      .then((res) => {
        setCorona(res.data);
      })
      .catch((err) => {
      });
  };

  const getUser = () => {
    axios
      .get(getUserApi.concat("/") + id)
      .then((item) => {
        setUser(item.data);
      })
      .catch((err) => {
      });
  };

  const handelCoronaDelete = async (coronaItem) => {
    setIsLoading(true);
    try {
      const response = await fetch(showCoronaApi, {
        method: "DELETE",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(coronaItem)
      });
      if (!response.ok) {
        throw new Error("Failed to delete item");
      }
      setCorona(corona.filter((item) => item.id !== coronaItem.id || item.getDate!== coronaItem.getDate || item.factor !== coronaItem.factor));
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="user mt-5">
      <table className="table table-bordered">
    <thead>
      <tr>
        <th>ID</th>
        <td>{user.id}</td>
        
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Name</td>
        <td>{user.name}</td>
      </tr>
      <tr>
        <td>City</td>
        <td>{user.city}</td>
      </tr>
      <tr>
        <td>Street</td>
        <td>{user.street}</td>
      </tr>
      <tr>
        <td>Number</td>
        <td>{user.number}</td>
      </tr>
      <tr>
        <td>Telephone</td>
        <td>{user.tel}</td>
      </tr>
      <tr>
        <td>Celephone</td>
        <td>{user.cel}</td>
      </tr>
      <tr>
        <td>Telephone</td>
        <td>{user.tel}</td>
      </tr>
      <tr>
        <td>birthDate</td>
        <td>{user.birthDate}</td>
      </tr>
      <tr>
        <td>positive</td>
        <td>{user.positive}</td>
      </tr>
      <tr>
        <td>health</td>
        <td>{user.health}</td>
      </tr>
    </tbody>
    </table>

    {isLoading && <Loader />}
        {error && <p>Error: {error}</p>}
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Date of receipt of vaccination</th>
              <th>manufacturer</th>
            </tr>
          </thead>
          <tbody>
            {corona?.map((item, i) => {
              return (
                <tr key={i + 1}>
                  <td>{item.getDate}</td>
                  <td>{item.factor}</td>

                  <td>
                    <i
                      className="fa fa-trash-o"
                      aria-hidden="true"
                      onClick={() => handelCoronaDelete(item)}
                    ></i>
                  </td>
                </tr>
              );
            })}
          </tbody>

          <Link to={`/create-corona/${id}`} className="btn btn-primary" style={{ color: "black" }}>
          Add Vaccine
          </Link>


        </table>
    </div>
  );
};

export default User;
 
