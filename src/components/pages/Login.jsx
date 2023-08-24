import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdPets } from "react-icons/md";
import { toast } from "react-hot-toast";

export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:4000/api/login", {
                email,
                password
            });

            if (response.status === 200) {
                localStorage.setItem("isLoggedIn", "true");
                localStorage.setItem("userId", response.data.id);
                localStorage.setItem("role", response.data.role);
                toast.success("Bienvenido al Sistema")
                navigate("/");
            } else {
                toast.error("Correo o contraseña incorrectos")
                console.error("Inicio de sesión fallido");
            }
        } catch (error) {
            console.error("Error en inicio de sesión:", error);
            toast.error("Correo o contraseña incorrectos")
        }
    }
    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md">
                <div className="flex items-center mb-4">
                    <MdPets
                        className={`text-secondary w-8 h-8 mr-2"
                                }`}
                    />
                    <h1 className="text-2xl font-bold">Huellitas</h1>
                </div>
                <h2 className="text-xl font-semibold mb-4">Iniciar sesión</h2>
                <form onSubmit={handleLogin}>
                    <div className="mb-4">
                        <label className="block font-semibold mb-2">Correo:</label>
                        <input
                            type="text"
                            className="w-full p-2 border-secondary border rounded focus:outline-none"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block font-semibold mb-2">Contraseña:</label>
                        <input
                            type="password"
                            className="w-full p-2 border-secondary border rounded focus:outline-none"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="flex items-center justify-center">
                        <button
                            type="submit"
                            className="w-fullbg-button bg-button text-white hover:bg-white hover:text-button py-2 px-4 rounded focus:outline-none"
                        >
                            Iniciar sesión
                        </button>
                    </div>
                </form>
                <div className="mt-4 text-center">
                    ¿Aún no tienes una cuenta? <Link to="/register" className="text-secondary hover:text-button font-semibold">Crear cuenta</Link>
                </div>
            </div>
            <div className="absolute top-4 left-4">
                <Link to="/" className="text-blue-500">← Volver</Link>
            </div>
        </div>
    );
}