// Doctors.jsx

import CardDoctor from "./CardDoctor";
import doctoraLopezFoto from "../assets/images/Doctor01.jpg";
import doctorRodriguezFoto from "../assets/images/Doctor02.jpg";
import doctoraMartinezFoto from "../assets/images/Doctor03.jpg";

function Doctors() {
    const equipo = [
        { nombre: 'Dra. María López', especialidad: 'Directora Médica', descripcion: 'Especialista en medicina interna con más de 12 años de experiencia.', foto: doctoraLopezFoto },
        { nombre: 'Dr. Carlos Rodríguez', especialidad: 'Cirujano Veterinario', descripcion: 'Especializado en cirugía de tejidos blandos y ortopedia.', foto: doctorRodriguezFoto },
        { nombre: 'Dra. Ana Martínez', especialidad: 'Dermatóloga', descripcion: 'Experta en problemas dermatológicos y alergias.', foto: doctoraMartinezFoto },
    ];

    return (
        <section id="equipo" className="py-12 bg-gray-100">
            <div className="container mx-auto text-center px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-green-600 mb-8">Nuestro Equipo</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-3 lg:gap-4 justify-items-center">
                    {equipo.map((doctor, index) => (
                        <CardDoctor key={index} {...doctor} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Doctors;