import axios from "axios";
import { useEffect, useState } from "react";

export const QuienesSomos = () => {
    const [numAnimales, setNumAnimales] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:4000/api/mascotas/num-animales-especie")
            .then((response) => {
                setNumAnimales(response.data);
            })
            .catch((error) => {
                console.error("Error al obtener el número de animales por especie:", error);
            });
    }, []);

    return (
        <>
        <div className="text-center text-3xl font-bold">NUESTRA LABOR</div>
            <div className="flex justify-center items-center h-screen -mt-20">
                {numAnimales.map((especie) => (
                    <div key={especie.especie} className="-mx-1">
                        <div className="bg-secondary text-center text-white p-8 rounded-lg shadow-lg">
                            <p className="text-4xl text-center font-bold">{especie.numero}</p>
                            <p className="text-lg mt-2">{especie.especie} adoptados</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}