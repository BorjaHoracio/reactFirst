import React, { Fragment, useState } from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import Producto from './components/Producto'
import Carrito from './components/Carrito'

function App() {

	const [productos, setProductos] = useState([
		{ id: 1, nombre: 'ReactJs', precio: 50},
		{ id: 2, nombre: 'Emberjs', precio: 60},
		{ id: 3, nombre: 'Vuejs', precio: 57},
		{ id: 4, nombre: 'Nodejs', precio: 80},
	]);

	const [carrito, agregarProducto ] = useState([]);

	const fecha = new Date().getFullYear();
	return (
		<Fragment>
			<Header
				titulo = 'Tienda virtual'
			/>
			<h1>Lista de productos</h1>
			{productos.map(producto => (
				<Producto
					key = {producto.id}
					producto = {producto}
					productos = {productos}
					carrito = {carrito}
					agregarProducto = {agregarProducto}
				/>
			))}

			<Carrito 
				carrito={carrito}
				agregarProducto = {agregarProducto}
			/>
			<Footer
				fecha = {fecha}
			/>
		</Fragment>
	);
}

export default App;
