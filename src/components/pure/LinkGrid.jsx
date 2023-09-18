import React from "react";
import { Link } from "react-router-dom";

const LinkGrid = () => {
    return (
        <div className="link-grid">
            <div>
                <Link to={'/'}>Dolar</Link>
            </div>
            <div>
                <Link to={'/inflacion'}>Inflacion</Link>
            </div>
            <div>
                <Link to={'/reservas'}>Reservas</Link>
            </div>
            <div>
                <Link to={'/inflacion'}>Inflacion</Link>
            </div>
            <div>
                <Link to={'/inflacion'}>Inflacion</Link>
            </div>
            <div>
                <Link to={'/inflacion'}>Inflacion</Link>
            </div>
        </div>
    )
}

export default LinkGrid;