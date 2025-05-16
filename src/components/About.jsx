// About.jsx
import React from 'react';
import aboutDog1 from '../assets/images/about-dog-1.jpeg'; 
import aboutDog2 from '../assets/images/about-dog-2.jpeg'; 

function About() {
    return (
        <div id='About' className="bg-green-50 py-16">
            <div className="container mx-auto px-4 lg:px-8 flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    <div className="rounded-xl overflow-hidden shadow-md">
                        <img
                            src={aboutDog1}
                            alt="Perro Feliz 1"
                            className="w-full h-auto object-cover"
                            style={{ maxHeight: '320px' }}
                        />
                    </div>
                    <div className="rounded-xl overflow-hidden shadow-md row-start-1 md:row-auto">
                        <img
                            src={aboutDog2}
                            alt="Perro Feliz 2"
                            className="w-full h-auto object-cover"
                            style={{ maxHeight: '320px' }}
                        />
                    </div>
                </div>

                
                <div className="text-center lg:text-left max-w-xl">
                    <h3 className="text-xl font-semibold text-green-600 mb-2">Nuestra Misión</h3>
                    <h2 className="text-3xl font-bold text-green-800 mb-6">Lo Que Hacemos</h2>
                    <p className="text-gray-700 text-lg mb-4">
                        Nuestra misión es trabajar con nuestros clientes para impactar positivamente la calidad
                        de vida de cada mascota que atendemos. Nos esforzamos continuamente por elevar
                        el estándar de excelencia en el cuidado canino y el servicio al cliente.
                    </p>
                    <p className="text-gray-700 text-lg">
                        Estamos comprometidos a proporcionar un entorno seguro, amoroso y profesional
                        donde las mascotas reciban la mejor atención veterinaria y bienestar integral.
                        Tu tranquilidad y la felicidad de tu compañero peludo son nuestra prioridad.
                    </p>
                    
                </div>
            </div>
        </div>
    );
}

export default About;