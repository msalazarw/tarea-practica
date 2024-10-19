import React, { useState } from 'react';

function CursoForm({ onAddCurso }) {
  const [nuevoCurso, setNuevoCurso] = useState({
    nombre: '',
    descripcion: '',
    instructores: ''
  });

  const manejarCambioInput = (event) => {
    const { name, value } = event.target;
    setNuevoCurso({
      ...nuevoCurso,
      [name]: value
    });
  };

  const manejarAgregarCurso = () => {
    onAddCurso(nuevoCurso);
    setNuevoCurso({
      nombre: '',
      descripcion: '',
      instructores: ''
    });
  };

  return (
    <div>
      <h2>Agregar Nuevo Curso</h2>
      <input
        type="text"
        name="nombre"
        placeholder="Nombre del curso"
        value={nuevoCurso.nombre}
        onChange={manejarCambioInput}
      />
      <input
        type="text"
        name="descripcion"
        placeholder="Descripción del curso"
        value={nuevoCurso.descripcion}
        onChange={manejarCambioInput}
      />
      <input
        type="text"
        name="instructores"
        placeholder="Instructores"
        value={nuevoCurso.instructores}
        onChange={manejarCambioInput}
      />
      <button onClick={manejarAgregarCurso}>Agregar Curso</button>
    </div>
  );
}

export default CursoForm;
