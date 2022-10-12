import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductInformation from './ProductInfo';

const Products = () => {
	/* A constant that is used to store the base URL of the API. */
	const BASE_URL = 'https://ecomerce-master.herokuapp.com/api/v1/';

	const [productsArray, setproductsArray] = useState([]);
	const [productInfo, setproductInfo] = useState({});
	const [productIndex, setproductIndex] = useState(undefined);
	const [nameProduct, setnameProduct] = useState(undefined); 

	useEffect(() => {
		axios
			.get(`${BASE_URL}item`)
			.then(({ data }) => setproductsArray(data))
			.catch((error) => console.log(error, 'error calling API productos'));
	}, []);

	useEffect(() => {
		if (productIndex) {
			axios
				.get(`${BASE_URL}item/${productIndex}`)
				.then(({ data }) => {
					console.log('product details', data);
					setproductInfo(data);
				})
				.catch((error) => console.log('error calling API card product', error));
		}
	}, [productIndex]);

	const recoverProductDetail = (index) => {
		setproductIndex(index);
	};

	useEffect(() => {
		if (nameProduct) {
			axios
				.get(`${BASE_URL}item/${nameProduct}`)
				.then(({ data }) => {
					console.log('product details', data);
					setproductInfo(data);
				})
				.catch((error) => console.log('error calling API card product', error));
		}
	}, [nameProduct]);

	const handleFormValue = ({ target: { name, value } }) =>
		setnameProduct({ ...nameProduct, [name]: value });

	return (
		<>
			<nav>
				<div>
					<form >
						<input type="text" name="nameProduct" placeholder="Search"  value={ ' '} onChange={handleFormValue} />
						<button type="button" onClick={() => <ProductInformation details={productInfo} handleResetList={() => setproductInfo({})} />}>Search</button>
					</form>
				</div>
			</nav>
			<>
				{productsArray.length === 0 ? (
					<h3>Cargando información... ⭕️</h3>
				) : (
					<div>
						{Object.values(productInfo).length === 0 ? (
							productsArray.map((product, index) => (
								<div key={index} style={{ border: '2px solid red', margin: '10px 0', cursor: 'pointer', weight: '100px', hight: '100px' }}>
									<p>Name: {product.product_name}</p>
									<p>precio: ${product.price}</p>
									<img src={product.image} alt="" style={{ width: '100px', hight: '100px' }} />
									<button onClick={() => recoverProductDetail(product._id)}> Mas detalles</button>
								</div>
							))) : (
							<ProductInformation /* Passing the planetInfo object to the PlanetDetail component. */
								details={productInfo} handleResetList={() => setproductInfo({})} />
						)}
					</div>
				)}
			</>
		</>
	);
};

export default Products;