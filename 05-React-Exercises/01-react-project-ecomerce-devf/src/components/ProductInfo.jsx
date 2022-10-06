import React from 'react';

const ProductInformation =  ({ details, handleResetList  }) => {
	return (
		<div>
			<h4>Detalles del prodcucto 🌍</h4>
			<p> Nombre: {details.product_name}</p>
			{/* <p>Description: {details.description}</p> */}
			<p>Precio: {details.price}</p>
			<p>Categoria: {details.category}</p>
			<p>Marca: {details.brand}</p>
			<img src={details.image} alt="" style={{ width: '100px', hight: '100px' }} />
			<button onClick={handleResetList}> Atrás</button>
		</div>
	);
};

export default ProductInformation;
