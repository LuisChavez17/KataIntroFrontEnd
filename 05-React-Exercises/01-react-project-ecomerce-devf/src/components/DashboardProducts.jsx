import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Col, Row, Nav, Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Products = () => {
	/* A constant that is used to store the base URL of the API. */
	const BASE_URL = 'https://ecomerce-master.herokuapp.com/api/v1/';

	const [productsArray, setproductsArray] = useState([]);
	const [update, setupdate] = useState(true);

	useEffect(() => {
		axios
			.get(`${BASE_URL}item`)
			.then(({ data }) => {
				setproductsArray(data)
				setupdate(false)
			})
			.catch((error) => {
				console.log(error, 'error calling API productos');
			}, [setproductsArray])

		const filterProducts = (products, query) => {
			if (!query) {
				return products;
			};

			return products.filter((product) => {
				const productName = product.product_name.toLowerCase();
				return productName.includes(query.toLowerCase());
			});
		};

		const { search } = window.location;
		const query = new URLSearchParams(search).get('s');
		const [searchQuery, setSearchQuery] = useState(query || '');
		const filteredProducts = filterProducts(productsArray, searchQuery);

		const [showProducts, setshowProducts] = useState(false);

		const handleClose = () => setshowProducts(false);
		const handleShow = () => setshowProducts(true);

		const rol = JSON.parse(localStorage.getItem('role'));
		const [roleUser, setRoleUser] = useState(rol || '');


		if (update) {
			return (
				<div className="DivLInicial">
					<center>
						<div className="div2"><img className="initialImg" src="public/cargando.gif" /></div>
					</center>
				</div>);
		};

		return (
			<div className="productCards">

				<h2 style={{ color: 'white' }}><b> {filteredProducts.length} Product(s) </b> </h2>

				<Row xl={5} md={3} xs={1} className="g-4">
					{filteredProducts.map((product) => (
						<Col key={`/product?id=${product._id}`}>
							<Card style={{ width: '100%', height: '100%', }}>
								{product.image != null && product.image.trim().length > 5 ? (
									<Card.Img variant="top" src={product.image} width={250} height={230} />
								) : (
									<Card.Img variant="top" src="./public/not-found.jpg" alt="Not found" width={250} height={230} />
								)}
								<Card.Body>
									<Card.Title>{product.product_name}</Card.Title>
									{product.description != null ? (
										<Card.Text>

											{product.description.slice(0, 30)}...
										</Card.Text>
									) : (
										<Card.Text>

											Description not available
										</Card.Text>
									)}
									<Card.Text>
										<b>Price: {product.price} USD</b>
									</Card.Text>
									<div className="containerTo">
										<a href={`/product?id=${product._id}`}>
											<button className="goTo">More details</button>
										</a>
									</div>
								</Card.Body>
							</Card>
						</Col>
					))}
				</Row>
			</div>
		);
	});
};

	export default Products