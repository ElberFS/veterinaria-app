
function CardDoctor({ foto, nombre, especialidad, descripcion }) {
    return (
        <div className=" overflow-hidden w-80 md:w-96 transition-transform transform hover:scale-105 hover:shadow-2xl h-auto md:h-[420px] flex flex-col">
            
            <img src={foto} alt={nombre} className="w-full h-40 md:h-56 rounded-xl object-cover flex-grow-0" />
            <div className="p-6 flex flex-col justify-between h-full">
                <div>
                    <h3 className="text-xl font-bold text-green-800 mb-1">{nombre}</h3>
                    <h4 className="text-md text-green-600 mb-2">{especialidad}</h4>
                    <p className="text-gray-700 text-sm">{descripcion}</p>
                </div>
                
            </div>
        </div>
    );
}

export default CardDoctor;