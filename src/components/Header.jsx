import "../styles/global.css"; // import global styles para Tailwind CSS
import Logo from "../assets/images/Logo.png";
import mobilButton from "../assets/svg/icon-mobil.svg"
import { useState } from "react";
import ButtonReserve from "./ButtonReserve";

function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <header className="fixed w-full bg-white shadow-md z-50">
            <div className="container mx-auto px-4 py-3">
                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        <img
                            src={Logo}
                            alt="Logo Patitas Felices"
                            className="h-10 mr-2"
                        />
                        <h1 className="text-xl font-bold " style={{ color: '#2E7D32' }}>
                            Veterinaria <span style={{ color: '#4CAF50' }}>Patitas Felices</span>
                        </h1>
                    </div>

                    
                    <nav className="hidden md:hidden lg:flex space-x-8">
                        <a
                            href="#Hero"
                            className="nav-link text-gray-800 font-medium border-b-2 border-transparent hover:border-[#4CAF50] pb-1 transition-all duration-200 ease-in-out"
                        >
                            Inicio
                        </a>
                        <a
                            href="#Services"
                            className="nav-link text-gray-800 font-medium border-b-2 border-transparent hover:border-[#4CAF50] pb-1 transition-all duration-200 ease-in-out"
                        >
                            Servicios
                        </a>
                        <a
                            href="#About"
                            className="nav-link text-gray-800 font-medium border-b-2 border-transparent hover:border-[#4CAF50] pb-1 transition-all duration-200 ease-in-out"
                        >
                            Nosotros
                        </a>
                        <a
                            href="#Contact"
                            className="nav-link text-gray-800 font-medium border-b-2 border-transparent hover:border-[#4CAF50] pb-1 transition-all duration-200 ease-in-out"
                        >
                            Contacto
                        </a>
                    </nav>

                    
                    <div className="hidden md:hidden lg:inline-block">
                        <ButtonReserve />
                    </div>


                    
                    <button
                        className="lg:hidden text-gray-800 focus:outline-none"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        <img
                            src={mobilButton}
                            alt="Menu Mobile"
                            className="w-6 h-6"
                        />
                    </button>
                </div>

            
                <div className={`mobile-menu lg:hidden flex flex-col space-y-4 mt-4 pb-4 transition-all duration-300 ease-in-out ${isMobileMenuOpen ? "block" : "hidden"}`}>
                    <a href="#Hero" className="text-gray-800 hover:text-[#4CAF50] font-medium">
                        Inicio
                    </a>
                    <a href="#Services" className="text-gray-800 font-medium">
                        Servicios
                    </a>
                    <a href="#About" className="text-gray-800 font-medium">
                        Nosotros
                    </a>
                    <a href="#Contact" className="text-gray-800 font-medium">
                        Contacto
                    </a>
                    <div className="text-center">
                        <ButtonReserve />
                    </div>

                </div>
            </div>
        </header>
    );
}

export default Header;