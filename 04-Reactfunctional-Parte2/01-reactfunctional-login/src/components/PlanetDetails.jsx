import React from "react";

const PlanetDetail = ({ details }) => {
    return (
        <div>
            <h4>Detalle del planeta 🌍</h4>
            <p> Nombre: {details.name}</p>
            <p>Periodo de rotación: {details.rotation_period}</p>
            <p>Orbitación: {details.orbital_period}</p>
            <p>Diametro: {details.diameter}</p>
            <p>Clima: {details.climate}</p>
            <p>Gravedad: {details.gravity}</p>
            <p></p>
        </div>
    );
};

export default PlanetDetail;