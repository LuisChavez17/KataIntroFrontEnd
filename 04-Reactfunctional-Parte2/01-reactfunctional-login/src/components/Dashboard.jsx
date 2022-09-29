import React, { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
    /* A constant that is used to store the base URL of the API. */
    const BASE_URL = "https://swapi.dev/api/";

    const [planetArray, setPlanetArray] = useState([]);
    const [planetInfo, setPlanetInfo] = useState({});

    useEffect(() => {
        axios
            /* Calling the API and getting the planets. */
            .get(`${BASE_URL}planets`)
            /* Destructuring the data object and then setting the planetArray state with the
            data.results. */
            .then(({ data }) => setPlanetArray(data.results))
            .catch((error) => console.log("error calling SWAPI"));
    },/* An array of dependencies. If you pass an empty array, it will only run once when the component
    mounts. */
        []);

    const recoverPlanetDetail = () => console.log("llamada otra vez a la API ");

    return (
        <>
            /* Checking if the planetArray has a length of 0. If it does, it will display the loading
            message. If it doesn't, it will map over the planetArray and display the planet
            information. */
            {planetArray.length === 0 ? (
                <h3>Cargando información... ⭕️</h3>
            ) : (
                planetArray.map((planet, index) => (
                    <div key={index} onClick={recoverPlanetDetail} style={{ border: "2px solid white", margin: "10px 0" }}>
                        <p>Name: {planet.name}</p>
                        <p>Climate {planet.climate}</p>
                        {/* <p> Lista de peliculas: <array> </p>  ???? */}
                        <div>
                            {" "}
                            <b>Lista de peliculas: </b>
                            <ul>
                                {" "}
                                {planet.films.map((planet, i) => (
                                    <li key={i}> URL: {planet} </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))
            )}
        </>
    );
};

export default Dashboard;