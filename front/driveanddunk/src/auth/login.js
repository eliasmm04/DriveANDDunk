import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Login({ setUser }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            console.log('Intentando iniciar sesión con email:', email);  // Depuración
            const response = await axios.post('/login/', { email, password });
            
            console.log('Respuesta del servidor:', response);  // Depuración

            // Si el backend devuelve los tokens correctamente
            if (response.data.access && response.data.refresh) {
                localStorage.setItem('access_token', response.data.access);
                localStorage.setItem('refresh_token', response.data.refresh);
                setUser({ email }); // Actualiza el usuario logueado
                console.log('Login exitoso');  // Depuración
                navigate('/'); // Redirige a la página principal
            } else {
                alert('Error: No se recibieron tokens. Intenta nuevamente.');
                console.log('No se recibieron tokens.');  // Depuración
            }
        } catch (error) {
            console.error('Error al iniciar sesión:', error);
            alert('Error al iniciar sesión. Verifica tus credenciales.');
        }
    };

    return (
        <div className="login-container">
            <form onSubmit={handleLogin}>
                <h2>Iniciar Sesión</h2>
                <label>Email</label>
                <input 
                    type="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    required 
                />
                <label>Contraseña</label>
                <input 
                    type="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    required 
                />
                <button type="submit">Login</button>
                ¿No tienes usuario? <Link to="/register">Crea una cuenta</Link>
            </form>
        </div>
    );
}

export default Login;
