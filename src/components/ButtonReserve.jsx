import { useState } from "react";

function ButtonReserve() {
    const [showModal, setShowModal] = useState(false);
    const [nombre, setNombre] = useState("");
    const [fecha, setFecha] = useState("");
    const [servicio, setServicio] = useState("");
    const [numero, setNumero] = useState("");
    const [mensajeResultado, setMensajeResultado] = useState("");
    const [errorNombre, setErrorNombre] = useState("");
    const [errorFecha, setErrorFecha] = useState("");
    const [errorServicio, setErrorServicio] = useState("");
    const [errorNumero, setErrorNumero] = useState("");

    const mensajesExito = [
        "✅ ¡Reserva confirmada! Nos vemos pronto 🐾",
        "📅 Tu cita ha sido registrada con éxito.",
        "🎉 ¡Listo! Tu reserva fue un éxito.",
        "🟢 Reserva completada correctamente.",
    ];

    const mensajesError = [
        "❌ Fecha no disponible. Intenta otra.",
        "⚠️ Error al reservar. Elige otra fecha.",
        "🔁 No se pudo confirmar la cita. Reintenta.",
        "📛 Servicio no disponible para esa fecha.",
    ];

    const validarCampos = () => {
        let isValid = true;
        setErrorNombre("");
        setErrorFecha("");
        setErrorServicio("");
        setErrorNumero("");

        if (!nombre.trim()) {
            setErrorNombre("Por favor, ingresa tu nombre.");
            isValid = false;
        }

        if (!fecha) {
            setErrorFecha("Por favor, selecciona una fecha.");
            isValid = false;
        }

        if (!servicio.trim()) {
            setErrorServicio("Por favor, indica el servicio que deseas.");
            isValid = false;
        }

        if (!numero.trim()) {
            setErrorNumero("Por favor, ingresa tu número de WhatsApp.");
            isValid = false;
        } else if (!/^[9]\d{8}$/.test(numero)) {
            setErrorNumero("El número de WhatsApp debe empezar con 9 y tener 9 dígitos.");
            isValid = false;
        }

        return isValid;
    };

    const handleEnviar = () => {
        if (validarCampos()) {
            const esExito = Math.random() > 0.4; 
            const mensaje = esExito
                ? mensajesExito[Math.floor(Math.random() * mensajesExito.length)]
                : mensajesError[Math.floor(Math.random() * mensajesError.length)];

            setMensajeResultado(mensaje);
            setTimeout(() => {
                setShowModal(false);
                setMensajeResultado(""); 
                setNombre("");
                setFecha("");
                setServicio("");
                setNumero("");
            }, 2500); 
        }
    };

    return (
        <>
            <button
                onClick={() => setShowModal(true)}
                className="font-semibold rounded-full py-2 px-6"
                style={{ backgroundColor: "#4CAF50", color: "#ffffff" }}
            >
                Reservar Cita
            </button>

            {showModal && (
                <div className="fixed inset-0 z-50 bg-opacity-40 flex items-center justify-center px-4">
                    <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-lg">
                        <h2 className="text-xl font-bold text-green-600 mb-4">Reservar Cita</h2>
                        {mensajeResultado ? (
                            <div className="text-center text-lg font-semibold text-gray-800 py-6">
                                {mensajeResultado}
                            </div>
                        ) : (
                            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                                <div>
                                    <label className="block text-gray-700 text-sm font-semibold mb-1">Nombre</label>
                                    <input
                                        type="text"
                                        className="w-full border border-gray-300 rounded px-3 py-2"
                                        value={nombre}
                                        onChange={(e) => setNombre(e.target.value)}
                                        required
                                    />
                                    {errorNombre && <p className="text-red-500 text-xs italic">{errorNombre}</p>}
                                </div>
                                <div>
                                    <label className="block text-gray-700 text-sm font-semibold mb-1">Fecha</label>
                                    <input
                                        type="date"
                                        className="w-full border border-gray-300 rounded px-3 py-2"
                                        value={fecha}
                                        onChange={(e) => setFecha(e.target.value)}
                                        required
                                    />
                                    {errorFecha && <p className="text-red-500 text-xs italic">{errorFecha}</p>}
                                </div>
                                <div>
                                    <label className="block text-gray-700 text-sm font-semibold mb-1">Servicio</label>
                                    <input
                                        type="text"
                                        className="w-full border border-gray-300 rounded px-3 py-2"
                                        value={servicio}
                                        onChange={(e) => setServicio(e.target.value)}
                                        required
                                        placeholder="Ej. Consulta, Vacuna, Cirugía"
                                    />
                                    {errorServicio && <p className="text-red-500 text-xs italic">{errorServicio}</p>}
                                </div>
                                <div>
                                    <label className="block text-gray-700 text-sm font-semibold mb-1">Tu número de WhatsApp</label>
                                    <input
                                        type="tel"
                                        className="w-full border border-gray-300 rounded px-3 py-2"
                                        value={numero}
                                        onChange={(e) => setNumero(e.target.value)}
                                        required
                                        placeholder="Ej. 987654321"
                                    />
                                    {errorNumero && <p className="text-red-500 text-xs italic">{errorNumero}</p>}
                                </div>
                                <div className="flex justify-end space-x-2 pt-4">
                                    <button
                                        type="button"
                                        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Cancelar
                                    </button>
                                    <button
                                        type="submit"
                                        onClick={handleEnviar}
                                        className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
                                    >
                                        Confirmar
                                    </button>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            )}
        </>
    );
}

export default ButtonReserve;