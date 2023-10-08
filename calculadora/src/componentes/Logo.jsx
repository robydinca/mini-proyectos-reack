import React from "react";
import "../estilos/logo.css";
import freeCodeCampLogo from '../imagenes/freecodecamplogo.png';

const Logo = () => (
    <div className="freecodecamp-logo-contenedor">
        <img 
            src={freeCodeCampLogo} 
            alt="logo" 
            className="freecodecamp-logo" />
    </div>
);

export default Logo;
