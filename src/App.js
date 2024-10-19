import React, { useState, useEffect } from 'react';
import CursoList from './CursoList';
import CursoDetail from './CursoDetail';
import CursoForm from './CursoForm';
import Login from './Login';
import Registro from './Registro';

function App() {
  const [cursos, setCursos] = useState([]);
  const [cursoSeleccionado, setCursoSeleccionado] = useState(null);
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [mensajeInscripcion, setMensajeInscripcion] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);
  const [username, setUsername] = useState('');

  useEffect(() => {
    // Revisar si hay un usuario logueado en localStorage
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
      setIsLoggedIn(true);
      setUsername(loggedInUser);
    }
  }, []);

  const handleLoginSuccess = (user) => {
    setIsLoggedIn(true);
    setUsername(user);
    localStorage.setItem('loggedInUser', user);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
    localStorage.removeItem('loggedInUser');
  };

  const handleRegisterSuccess = () => {
    setIsRegistering(false);
  };

  const agregarCurso = (nuevoCurso) => {
    setCursos([...cursos, nuevoCurso]);
    setMostrarFormulario(false);
  };

  const verDetalleCurso = (curso) => {
    setCursoSeleccionado(curso);
  };

  const volverALista = () => {
    setCursoSeleccionado(null);
  };

  const inscribirCurso = () => {
    if (cursoSeleccionado) {
      setMensajeInscripcion(`Curso "${cursoSeleccionado.nombre}" inscrito.`);
      setCursoSeleccionado(null);
    }
  };

  return (
    <div className="App">
      {isLoggedIn ? (
        <>
          <h1>Gestión de Cursos</h1>
          <h2>Bienvenido, {username}!</h2>
          <button onClick={handleLogout}>Cerrar Sesión</button>
          
          {mensajeInscripcion && <div className="mensaje-inscripcion">{mensajeInscripcion}</div>}

          {cursoSeleccionado ? (
            <CursoDetail 
              curso={cursoSeleccionado} 
              onBack={volverALista} 
              onInscribir={inscribirCurso} 
            />
          ) : (
            <>
              <CursoList cursos={cursos} onVerDetalle={verDetalleCurso} />
            </>
          )}

          <button
            className="floating-button"
            onClick={() => setMostrarFormulario(true)}
          >
            +
          </button>

          {mostrarFormulario && (
            <div className="modal">
              <div className="modal-content">
                <button className="close" onClick={() => setMostrarFormulario(false)}>X</button>
                <CursoForm onAddCurso={agregarCurso} />
              </div>
            </div>
          )}
        </>
      ) : (
        isRegistering ? (
          <Registro onRegisterSuccess={handleRegisterSuccess} />
        ) : (
          <Login onLoginSuccess={handleLoginSuccess} />
        )
      )}

      {!isLoggedIn && (
        <button onClick={() => setIsRegistering(!isRegistering)}>
          {isRegistering ? 'Ya tengo una cuenta' : 'Crear una cuenta'}
        </button>
      )}
    </div>
  );
}

export default App;
