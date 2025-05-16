import "../styles/global.css"; // import global styles para Tailwind CSS

import TarjetaService from './CardService';
import servicio1Imagen from '../assets/images/Service01.jpg';
import servicio2Imagen from '../assets/images/Service02.jpg';
import servicio3Imagen from '../assets/images/Service03.jpg';
import servicio4Imagen from '../assets/images/Service04.jpg';
import servicio5Imagen from '../assets/images/Service05.jpg';
import servicio6Imagen from '../assets/images/Service06.jpg';

function Services() {
    const servicios = [
        {
            nombre: 'Consulta Médica',
            descripcion: 'Exámenes de salud integrales y asesoramiento veterinario personalizado para el bienestar de tu mascota.',
            imagen: servicio1Imagen,
        },
        {
            nombre: 'Odontología',
            descripcion: 'Cuidado dental profesional que incluye limpiezas, extracciones y tratamientos para la salud bucal de tu animal.',
            imagen: servicio2Imagen,
        },
        {
            nombre: 'Emergencia',
            descripcion: 'Atención veterinaria inmediata para situaciones críticas que requieren intervención urgente.',
            imagen: servicio3Imagen,
        },
        {
            nombre: 'Vacunación',
            descripcion: 'Programas de vacunación completos para proteger a tu mascota contra enfermedades comunes y peligrosas.',
            imagen: servicio4Imagen,
        },
        {
            nombre: 'Cirugías',
            descripcion: 'Procedimientos quirúrgicos generales y especializados realizados por veterinarios expertos.',
            imagen: servicio5Imagen,
        },
        {
            nombre: 'Peluquería Canina',
            descripcion: 'Servicios de estética canina que incluyen baños, cortes de pelo y arreglos para mantener a tu perro limpio y feliz.',
            imagen: servicio6Imagen,
        },
    ];

    return (
        <section id="Services" className="py-12 bg-gray-100">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                
                <h2 className="text-3xl font-bold text-green-600 mb-4">Nuestros Servicios</h2>
                <p className="text-gray-700 text-lg mb-8">
                    Ofrecemos una amplia gama de servicios veterinarios para mantener a tus mascotas saludables y felices.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {servicios.map((servicio, index) => (
                        <TarjetaService
                            key={index}
                            nombre={servicio.nombre}
                            descripcion={servicio.descripcion}
                            imagen={servicio.imagen}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Services;