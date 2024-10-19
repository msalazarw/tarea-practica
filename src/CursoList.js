import React from 'react';

function CursoList({ cursos, onVerDetalle }) {
  return (
    <div>
      <h2>Lista de Cursos</h2>
      {cursos.length === 0 ? (
        <p>No hay cursos disponibles.</p>
      ) : (
        <ul>
          {cursos.map((curso, index) => (
            <li key={index} className="curso-card">
              <h3>{curso.nombre}</h3>
              <p>{curso.descripcion}</p>
              <span
                className="more-info"
                onClick={() => onVerDetalle(curso)}
              >
                Más información
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CursoList;
