import React, { useState } from 'react';
import './Register.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Register() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        setLoading(true); // Empieza el estado de carga
        setError(''); // Resetea el error en cada intento

        try {
            const response = await axios.post('http://localhost:8000/register/', { username, email, password });
            alert('Registro exitoso. Ahora puedes iniciar sesión.');
            navigate('/login');
        } catch (error) {
            console.error(error);
            setError('Error al registrarte. Intenta nuevamente.'); // Maneja el error
        } finally {
            setLoading(false); // Detiene el estado de carga
        }
    };

    return (
        <div className="register-container">
            <form onSubmit={handleRegister}>
                <h2>Registrar Usuario</h2>
                <label>Nombre de Usuario</label>
                <input 
                    type="text" 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)} 
                    required 
                />
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
                {error && <p className="error">{error}</p>} {/* Mostrar mensaje de error */}
                <button type="submit" disabled={loading}>Registrar</button>
                {loading && <p>Cargando...</p>} {/* Mostrar carga */}
                <p>Ya tienes cuenta? <Link to="/login">Inicia sesión</Link></p>
            </form>
        </div>
    );
}

export default Register;
