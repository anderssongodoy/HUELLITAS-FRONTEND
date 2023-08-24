import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const Perfil = () => {
    const [userData, setUserData] = useState({
        nombre: "",
        apellido: "",
        email: "",
    });

    const [adopcionData, setAdopcionData] = useState([]);
    const [currentPage, setCurrentPage] = useState("perfil");
    const navigate = useNavigate();

    useEffect(() => {
        const userId = localStorage.getItem("userId");
        axios
            .get(`http://localhost:4000/api/profile/${userId}`)
            .then((response) => {
                setUserData(response.data);
            })
            .catch((error) => {
                console.error("Error al obtener los datos del usuario:", error);
            });

        axios
            .get(`http://localhost:4000/api/${userId}/solicitudes`)
            .then((response) => {
                setAdopcionData(response.data);
            })
            .catch((error) => {
                console.error("Error al obtener las solicitudes de adopción:", error);
            });
    }, []);

    const handleActualizarPerfil = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.put("http://localhost:4000/api/user/profile", userData);

            if (response.status === 200) {
                console.log("Perfil actualizado exitosamente");
            } else {
                console.error("Error al actualizar el perfil");
            }
        } catch (error) {
            console.error("Error en la actualización del perfil:", error);
        }
    };

    return (
        <>
            <div className="flex h-screen bg-gray-100">
                {/* Sidebar */}
                <div className="w-1/4 bg-white p-4 shadow-md">
                    <div className="flex flex-col items-center mb-6">
                        <div className="rounded-full w-20 h-20 bg-gray-300 overflow-hidden">
                            {/* Aquí coloca la imagen de perfil del usuario */}
                            <img src={userData.imagen} alt="Perfil" className="w-full h-full object-cover" />
                        </div>
                        <div className="mt-2">
                            <button className={`py-2 px-4 text-sm ${currentPage === "perfil" ? "text-blue-500" : ""}`} onClick={() => setCurrentPage("perfil")}>
                                Perfil
                            </button>
                            <button className={`py-2 px-4 text-sm ${currentPage === "solicitud" ? "text-blue-500" : ""}`} onClick={() => setCurrentPage("solicitud")}>
                                Solicitud de Adopción
                            </button>
                        </div>
                    </div>
                </div>

                {/* Contenido principal */}
                <div className="w-3/4 p-4">
                    {currentPage === "perfil" && (
                        <div>
                            <h2 className="text-2xl font-bold mb-4">Perfil</h2>
                            <form onSubmit={handleActualizarPerfil}>
                                <div className="mb-4">
                                    <label>Nombre:</label>
                                    <input
                                        type="text"
                                        value={userData.nombre}
                                        onChange={(e) => setUserData({ ...userData, nombre: e.target.value })}
                                    />
                                </div>
                                <div className="mb-4">
                                    <label>Apellido:</label>
                                    <input
                                        type="text"
                                        value={userData.apellido}
                                        onChange={(e) => setUserData({ ...userData, apellido: e.target.value })}
                                    />
                                </div>
                                <div className="mb-4">
                                    <label>Correo:</label>
                                    <input
                                        type="email"
                                        value={userData.email}
                                        onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                                    />
                                </div>
                                <div className="mb-4">
                                    <label>Contraseña:</label>
                                    <input
                                        type="password"
                                        value={userData.password}
                                        onChange={(e) => setUserData({ ...userData, password: e.target.value })}
                                    />
                                </div>
                                <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
                                    Actualizar
                                </button>
                            </form>
                        </div>
                    )}

                    {currentPage === "solicitud" && (
                        <div>
                            <h2 className="text-2xl font-bold mb-4">Solicitud de Adopción</h2>
                            <div className="grid grid-cols-3 gap-4">
                                {/* Mapea y muestra las solicitudes de adopción */}
                                {adopcionData.map((solicitud) => (
                                    <div key={solicitud.solicitud_id} className="bg-white p-4 shadow-md rounded-lg">
                                        {/* Información de la mascota en la solicitud */}
                                        <img src={solicitud.mascota_imagen} alt={solicitud.mascota_nombre} className="w-full h-32 object-cover" />
                                        <p className="mt-2 font-semibold">{solicitud.mascota_nombre}</p>
                                        <button className="mt-2 bg-blue-500 text-white py-2 px-4 rounded">
                                            Ver más
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};