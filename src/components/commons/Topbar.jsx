import { MdPets, MdCardMembership } from "react-icons/md";
import { AiFillHome } from "react-icons/ai"
import { CgGym } from "react-icons/cg"
import { FaUserGroup } from "react-icons/fa6"
import { IoAlertCircleSharp } from "react-icons/io5"
import { BsBoxArrowRight, BsPersonCircle } from "react-icons/bs"
import { Link, Outlet, useNavigate } from "react-router-dom";

export const Topbar = () => {

    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("isLoggedIn");
        navigate("/");
        window.location.reload();
    };
    const menuItems = [
        { route: "", title: "Home", icon: <AiFillHome /> },
        { route: "quienes-somos", title: "¿Quienes Somos?", icon: <MdCardMembership /> },
        { route: "adopcion", title: "Adopcion", icon: <CgGym /> },
        { route: "adopcion-aleatoria", title: "Adopcion Aleatoria", icon: <FaUserGroup /> },
        { route: "ayudar", title: "Ayudar", icon: <IoAlertCircleSharp /> }
    ];

    return (
        <div className="flex flex-col">
            <div className="bg-primary p-5">
                <div className="flex items-center justify-between">
                    <div className="inline-flex items-center">
                        <MdPets
                            className={`text-secondary text-4xl rounded cursor-pointer block mr-2 duration-500"
                                }`}
                        />
                        <h1
                            className={`text-secondary font-medium text-2xl duration-300`}
                        >
                            Huellitas
                        </h1>
                    </div>
                    <ul className={`flex`}>
                        {menuItems.map((menu, index) => (
                            <li key={index} className="mr-6">
                                <Link to={`/${menu.route}`} className="text-black text-sm hover:text-secondary">
                                    {menu.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <div className="flex items-center">
                        {isLoggedIn ? (
                            <>
                                <Link to="/perfil" className="text-black text-sm mx-5 hover:text-secondary">
                                    <span className="text-2xl block mx-5 float-left">
                                        <BsPersonCircle />
                                    </span>
                                    Perfil
                                </Link>
                                <button onClick={handleLogout} className="text-black text-sm mx-5 hover:text-secondary">
                                    <span className="text-2xl block mx-5 float-left">
                                        <BsBoxArrowRight />
                                    </span>
                                    Cerrar sesión
                                </button>
                            </>
                        ) : (
                            <Link to="/login" className="text-black text-sm mx-5 hover:text-secondary">
                                <span className="text-2xl block mx-5 float-left">
                                    <BsPersonCircle />
                                </span>
                                Iniciar sesión
                            </Link>
                        )}
                    </div>
                </div>
            </div>
            <div className="p-7">
                <Outlet />
            </div>
        </div>
    );
};