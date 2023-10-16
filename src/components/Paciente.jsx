const Paciente = ({ paciente, setPaciente, eliminarPaciente }) => {
  const { nombre, propietario, email, alta, sintomas, id } = paciente;
  const handleEliminar = () => {
    const respuesta = window.confirm(
      "¿Estas seguro de eliminar este paciente?"
    );
    if (respuesta) {
      eliminarPaciente(id);
    }
  };

  return (
    <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre: {""}
        <span className="font-normal normal-case">{nombre}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Propietario: {""}
        <span className="font-normal normal-case">{propietario}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Email: {""}
        <span className="font-normal normal-case">{email}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Fecha Alta: {""}
        <span className="font-normal normal-case">{alta}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Sintomas: {""}
        <span className="font-normal normal-case">{sintomas}</span>
      </p>
      <div className="flex justify-between mt-10">
        <button
          type="button"
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4  rounded uppercase"
          onClick={() => setPaciente(paciente)}
        >
          Editar &times;
        </button>
        <button
          type="button"
          className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 ml-2 rounded uppercase"
          onClick={handleEliminar}
        >
          Eliminar &times;
        </button>
      </div>
    </div>
  );
};

export default Paciente;
