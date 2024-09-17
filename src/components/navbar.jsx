import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/cartcontext';
import { UserContext } from '../context/UserContext';  // Importamos el UserContext

const Navbar = () => {
  const { calculateTotal } = useContext(CartContext);  // Obtener el total del carrito desde el contexto
  const { token, logout } = useContext(UserContext);  // Obtener el token y la función logout del UserContext

  const total = calculateTotal();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">🍕 Home</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {token ? (  // Si hay token, mostrar "Profile" y "Logout"
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/profile">🔓 Profile</Link>
                </li>
                <li className="nav-item">
                  <button className="nav-link btn" onClick={logout}>🔒 Logout</button> {/* Botón para logout */}
                </li>
              </>
            ) : (  // Si no hay token, mostrar "Login" y "Register"
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">🔐 Login</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/register">🔐 Register</Link>
                </li>
              </>
            )}
            <li className="nav-item">
              <Link className="nav-link" to="/cart">🛒 Total: ${total.toLocaleString()}</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
