import React from 'react';
import './carrito.css';
import Producto from './Producto'

const Carrito = ({carrito, agregarProducto}) => {
    return ( 
        <div className='carrito'>
            <h3>Tu carrito de compras</h3>
            {carrito.length === 0 ? <p>esta vacío</p> :
                carrito.map(producto => (
                    <Producto
                        key={producto.id}
                        producto={producto}
                        carrito = {carrito}
                        agregarProducto = {agregarProducto}
                    />
                ))}
        </div>
     );
}
 
export default Carrito;