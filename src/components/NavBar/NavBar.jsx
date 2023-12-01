import React, { useContext, useState } from 'react';
import { CartWidget } from '../CartWidget/CartWidget'
import './NavBar.css'
import { Link } from 'react-router-dom'
import { Loader } from '../Loader/Loader'

export const NavBar = () => {
    const [loading, setLoading] = useState(false);

    const handleCategoryClick = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    };

    return (
        <>
            <nav>
                <div>
                    <Link to={`/`}>
                        <div className="logoYNombre">
                            <h1 onClick={handleCategoryClick}>Mi tienda</h1>
                        </div>
                    </Link>
                </div>
                <div className="categorias">
                    <ul>
                        <li onClick={handleCategoryClick}>
                            <Link to={`/category/1`}>Celulares</Link>
                        </li>
                        <li onClick={handleCategoryClick}>
                            <Link to={`/category/2`}>SmartTV</Link>
                        </li>
                        <li onClick={handleCategoryClick}>
                            <Link to={`/category/3`}>Tablets</Link>
                        </li>
                        <li onClick={handleCategoryClick}>
                            <Link to={`/category/4`}>Electrodomésticos</Link>
                        </li>
                        <li onClick={handleCategoryClick}>
                            <Link to={`/category/5`}>Accesorios</Link>
                        </li>
                    </ul>
                </div>
                <div className="carrito">
                    <Link to={"/cart"}>
                        <CartWidget />
                    </Link>
                </div>
            </nav>
            {
            loading && <div className="loader-container"><Loader type={"balls"} color= {"#0D6EFD"} /></div>
            }
        </>
    )
}
