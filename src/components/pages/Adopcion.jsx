import axios from "axios";
import { useEffect, useState } from "react";

export const Adopcion = () => {
    const [filtros, setFiltros] = useState({
        edad: "",
        tamaño: "",
        sexo: "",
        largoPelo: ""
    });
    const [mascotasDisponibles, setMascotasDisponibles] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:4000/api/mascotas/disponibles")
            .then((response) => {
                setMascotasDisponibles(response.data);
            })
            .catch((error) => {
                console.error("Error al obtener las mascotas disponibles:", error);
            });
    }, []);

    const handleFiltrosChange = (event) => {
        const { name, value } = event.target;
        setFiltros({
            ...filtros,
            [name]: value
        });
    };

    const filtrarMascotas = (mascota) => {
        if (
            (!filtros.edad || mascota.edad === Number(filtros.edad)) &&
            (!filtros.tamaño || mascota.tamaño === filtros.tamaño) &&
            (!filtros.sexo || mascota.sexo === filtros.sexo) &&
            (!filtros.largoPelo || mascota.tamañoDePelo === filtros.largoPelo)
        ) {
            return true;
        }
        return false;
    };

    return (
        <>
            <div className="flex">
                <div className="w-1/4 p-4">
                    <h2 className="text-2xl font-bold mb-4">Filtros</h2>
                    <div className="mb-4">
                        <label>Edad:</label>
                        <input
                            type="text"
                            name="edad"
                            value={filtros.edad}
                            onChange={handleFiltrosChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label>Tamaño:</label>
                        <select
                            name="tamaño"
                            value={filtros.tamaño}
                            onChange={handleFiltrosChange}
                        >
                            <option value="">Todos los tamaños</option>
                            <option value="Pequeño">Pequeño</option>
                            <option value="Mediano">Mediano</option>
                            <option value="Grande">Grande</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label>Sexo:</label>
                        <select
                            name="sexo"
                            value={filtros.sexo}
                            onChange={handleFiltrosChange}
                        >
                            <option value="">Ambos sexos</option>
                            <option value="Macho">Macho</option>
                            <option value="Hembra">Hembra</option>
                        </select>
                    </div>
                    <div>
                        <label>Largo de Pelo:</label>
                        <select
                            name="largoPelo"
                            value={filtros.largoPelo}
                            onChange={handleFiltrosChange}
                        >
                            <option value="">Cualquier largo</option>
                            <option value="Corto">Corto</option>
                            <option value="Largo">Largo</option>
                        </select>
                    </div>
                </div>
                <div className="w-3/4 p-4">
                    <h2 className="text-2xl font-bold mb-4">Mascotas Disponibles</h2>
                    <div className="grid grid-cols-3 gap-4">
                        {mascotasDisponibles
                            .filter(filtrarMascotas)
                            .map((mascota) => (
                                <div key={mascota.id} className="bg-white p-4 shadow-md rounded-lg">
                                    <img src={mascota.imagen} alt={mascota.nombre} className="w-full h-32 object-cover" />
                                    <p className="mt-2 font-semibold">{mascota.nombre}</p>
                                    <button className="mt-2 bg-button text-white hover:bg-white hover:text-button py-2 px-4 rounded">
                                        Ver más
                                    </button>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </>
    )
}