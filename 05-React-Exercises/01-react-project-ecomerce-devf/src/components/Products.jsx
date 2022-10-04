import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import PlanetDetail from "./PlanetDetail";

const DashboardProducts = () => {
	/* A constant that is used to store the base URL of the API. */
	const BASE_URL = 'https://ecomerce-master.herokuapp.com/api/v1/';

	const [productsArray, setproductsArray] = useState([]);
	// const [planetInfo, setPlanetInfo] = useState({});
	// const [planetIndex, setplanetIndex] = useState(undefined);

	useEffect(() => {
		axios
			.get(`${BASE_URL}item`)
			.then(({ data }) => setproductsArray(data))
			.catch((error) => console.log(error,'error calling SWAPI'));
	}, []);

	// useEffect(() => {
	//     if (planetIndex) {
	//         axios
	//             .get(`${BASE_URL}planets/${planetIndex}`)
	//             .then(({ data }) => {
	//                 console.log("planet details", data);
	//                 setPlanetInfo(data);
	//             })
	//             .catch((error) => console.log("error calling SWAPI", error));
	//     }
	// }, [planetIndex]);

	// const recoverPlanetDetail = (valorIndice) => {
	//     setplanetIndex(valorIndice + 1);
	// };


	return (
		<>
			{productsArray.length === 0 ? (
				<h3>Cargando información... ⭕️</h3>
			) : (
				productsArray.map((product, index) => (
					<div key={index} style={{ border: '2px solid white' }}>
						<p>Name: {product.product_name}</p>
						<p>precio: {product.price}</p>
					</div>
				))
			)}
		</>
	);
};

export default DashboardProducts;