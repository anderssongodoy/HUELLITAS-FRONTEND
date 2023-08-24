import { useState } from 'react';
import axios from 'axios';

export const AdopcionAleatoria = () => {
    const [mascotaAleatoria, setMascotaAleatoria] = useState(null);

    const handleEncontrarMascota = () => {
        axios
            .get("http://localhost:4000/api/mascotas/adopcion-aleatoria")
            .then((response) => {
                setMascotaAleatoria(response.data);
            })
            .catch((error) => {
                console.error("Error al obtener mascota aleatoria:", error);
            });
    };

    return (
        <>
            <div className="p-4">
                <h2 className="text-2xl font-bold mb-4">Adopción Aleatoria</h2>
                {mascotaAleatoria ? (
                    <div className="bg-white mx-96 p-4 shadow-md rounded-lg text-center">
                        <img
                            src={mascotaAleatoria.imagen}
                            alt={mascotaAleatoria.nombre}
                            className="w-full h-32 object-cover"
                        />
                        <p className="mt-2 font-semibold">{mascotaAleatoria.nombre}</p>
                        <button className="mt-2 bg-button text-white hover:bg-white hover:text-button py-2 px-4 rounded">
                            Ver más
                        </button>
                    </div>
                ) : (
                    <div className="bg-white mx-96 h-1/2 p-4 shadow-md rounded-lg text-center">
                        <div className="w-full h-80 bg-gray-200 flex items-center justify-center">
                            <span className="text-5xl text-gray-500">?</span>
                        </div>
                        <button
                            className="mt-2 bg-button text-white hover:bg-white hover:text-button py-2 px-4 rounded"
                            onClick={handleEncontrarMascota}
                        >
                            Encontrar Mascota
                        </button>
                    </div>
                )}
            </div>
        </>
    )
}