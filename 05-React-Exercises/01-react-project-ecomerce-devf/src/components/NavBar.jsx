import React from 'react';

const Navegation = () => {
	return (
		<nav>
			<div>
				<form >
					<input type="text" id="buscador" placeholder="Search" onKeyUp="llamarBusqueda()" />
					<button type="button" onClick="llamarBusqueda()">Search</button>
					<button type="reset" onClick="reiniciarData()">Restart</button>

					<select name="sort" id="sort" onChange="ordenarPersonajes()">
						<option selected>Open this select menu</option>
						<option value="none">Sin orden</option>
						<option value="mayor">Descendente</option>
						<option value="menor">Ascendente</option>
					</select>

				</form>
			</div>
		</nav>
	);
};

export default Navegation;
