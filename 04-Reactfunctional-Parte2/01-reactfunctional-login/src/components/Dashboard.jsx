import React, { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
    /* A constant that is used to store the base URL of the API. */
    const BASE_URL = "https://swapi.dev/api/";

    const [planetArray, setPlanetArray] = useState([]);
    const [planetInfo, setPlanetInfo] = useState({});
    const [planetIndex, setplanetIndex] = useState(undefined);

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

    // const recoverPlanetDetail = () => console.log("llamada otra vez a la API ");
    useEffect(() => {
        // console.log("planetIndex", planetIndex);
        if (planetIndex) {
            axios
                .get(`${BASE_URL}planets/${planetIndex}`)
                .then(({ data }) => {
                    console.log("planet details", data);
                    /* Setting the state of planetInfo to the data that is returned from the API. */
                    setPlanetInfo(data);
                })
                .catch((error) => console.log("error calling SWAPI", error));
        }
    }, [planetIndex]);

    const recoverPlanetDetail = (valorIndice) => {
        setplanetIndex(valorIndice + 1);
    };


    return (
        <>
            /* Checking if the planetArray has a length of 0. If it does, it will display the loading
            message. If it doesn't, it will map over the planetArray and display the planet
            information. */
            {planetArray.length === 0 ? (
                <h3>Cargando información... ⭕️</h3>
            ) : (
                <div>
                    /* Checking if the planetInfo object has a length of 0. If it does, it will map
                    over the planetArray and display the planet information. If it doesn't, it will
                    display the loading message. */
                    {Object.values(planetInfo).length === 0 ? (
                        planetArray.map((planet, index) => (
                            <div key={index} onClick={() => recoverPlanetDetail(index)} style={{ border: "2px solid white", margin: "10px 0", cursor: "pointer" }}>
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
                    ) : (
                        <h3>Mostrar detalle</h3>
                    )}
                </div>
            )}
        </>
    );
};

export default Dashboard;