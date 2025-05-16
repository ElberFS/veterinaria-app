// Contact.jsx
import React, { useState } from 'react';

function Contact() {
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [mensaje, setMensaje] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!nombre || !email || !mensaje) {
            setError('Por favor, completa todos los campos.');
            setSuccess('');
            return;
        }

        // Aquí iría la lógica para enviar el mensaje
        // Por ahora, solo mostramos una alerta de éxito
        setSuccess('Mensaje enviado correctamente (simulado).');
        setError('');
        setNombre('');
        setEmail('');
        setMensaje('');
    };

    return (
        <div id="Contact" className="bg-white py-16">
            <div className="container mx-auto px-4 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
                {/* Sección Izquierda: Formulario de Mensaje */}
                <div className="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-8">
                    <h2 className="text-2xl font-semibold text-green-600 mb-6">Envíanos un mensaje</h2>
                    {error && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
                        <strong className="font-bold">Error!</strong>
                        <span className="block sm:inline">{error}</span>
                    </div>}
                    {success && <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4" role="alert">
                        <strong className="font-bold">Éxito!</strong>
                        <span className="block sm:inline">{success}</span>
                    </div>}
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="nombre" className="block text-gray-700 text-sm font-bold mb-2">
                                Nombre completo
                            </label>
                            <input
                                type="text"
                                id="nombre"
                                className="shadow appearance-none border border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Tu nombre"
                                value={nombre}
                                onChange={(e) => setNombre(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                                Correo electrónico
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="shadow appearance-none border border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="tucorreo@ejemplo.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="mensaje" className="block text-gray-700 text-sm font-bold mb-2">
                                Mensaje
                            </label>
                            <textarea
                                id="mensaje"
                                rows="4"
                                className="shadow appearance-none border border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="¿En qué podemos ayudarte?"
                                value={mensaje}
                                onChange={(e) => setMensaje(e.target.value)}
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Enviar mensaje
                        </button>
                    </form>
                </div>

                {/* Sección Derecha: Información de Contacto */}
                <div className="shadow-lg w-full max-w-2xl mx-auto rounded-lg p-8">
                    <h2 className="text-2xl font-semibold text-green-600 mb-6">Información de contacto</h2>
                    <div className="space-y-4">
                        <div className="flex items-start gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-green-500">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-4.036 13.888-8.964 13.888-4.928 0-8.964-6.746-8.964-13.888 0-2.118 1.121-4.11 2.927-5.49a4.5 4.5 0 015.804 0c1.806 1.38 2.927 3.372 2.927 5.49z" />
                            </svg>
                            <div>
                                <h3 className="font-semibold text-gray-700">Dirección</h3>
                                <p className="text-gray-600 text-sm">
                                    Av. Mascotitas Felices 123, Urb. El Valle<br />
                                    Lima, LIMA 03100, Perú
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-green-500">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h8.25a2.25 2.25 0 002.25-2.25V3.75a2.25 2.25 0 00-2.25-2.25H15m-9 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m0 16.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0" />
                            </svg>
                            <div>
                                <h3 className="font-semibold text-gray-700">Teléfono</h3>
                                <p className="text-gray-600 text-sm">+51 987 123 231</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-green-500">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.077 1.939L12 11.48l-8.423-3.08a2.25 2.25 0 01-1.077-1.939V6.75a2.25 2.25 0 002.25-2.25h15a2.25 2.25 0 002.25 2.25z" />
                            </svg>
                            <div>
                                <h3 className="font-semibold text-gray-700">Email</h3>
                                <p className="text-gray-600 text-sm">contacto@potittasfelices.com</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-green-500">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <div>
                                <h3 className="font-semibold text-gray-700">Horario de atención</h3>
                                <p className="text-gray-600 text-sm">
                                    Lunes a Viernes: 9:00 AM - 7:00 PM<br />
                                    Sábados: 9:00 AM - 2:00 PM<br />
                                    Emergencias: 24/7
                                </p>
                            </div>
                        </div>
                        {/* Mapa */}
                        <div className="rounded-md overflow-hidden shadow-md">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.083887987983!2d-99.17859178526866!3d19.40719778687187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ffe0e9633a9f%3A0xdd0c18595d281543!2sAv.%20Mascotas%20Felices%20123!5e0!3m2!1ses-419!2spe!4v1715886067707!5m2!1ses-419!2spe"
                                width="100%"
                                height="150"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Mapa de la ubicación"
                            ></iframe>
                            <p className="text-gray-500 text-xs mt-1">
                                <a
                                    href="https://www.google.com/maps/place/Av.+Mascotas+Felices+123/@19.4071978,-99.1785918,17z/data=!3m1!4b1!4m6!3m5!1s0x85d1ffe0e9633a9f:0xdd0c18595d281543!8m2!3d19.4071978!4d-99.1785918!16s%2Fg%2F11v1v3x10z?entry=tts"
                                    className="text-green-600 hover:underline"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Ver mapa más grande
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;