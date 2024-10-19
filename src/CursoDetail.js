import React from 'react';

function CursoDetail({ curso, onBack, onInscribir }) {
  return (
    <div>
      <h2>{curso.nombre}</h2>
      <p><strong>Descripción:</strong> {curso.descripcion}</p>
      <p><strong>Instructores:</strong> {curso.instructores}</p>
      
      <button className='btnInscribir' onClick={onInscribir}>Inscribirse</button>
      <button onClick={onBack}>Volver a la lista de cursos</button>
    </div>
  );
}

export default CursoDetail;
