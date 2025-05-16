// CardService.jsx
import React from 'react';

function CardService({ imagen, nombre, descripcion }) {
    return (
        <div
            className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-lg cursor-pointer"
        >
            <img src={imagen} alt={nombre} className="w-full h-48 object-cover" />
            <div className="p-6">
                <h3 className="text-xl font-semibold text-green-500 mb-2">{nombre}</h3>
                <p className="text-gray-700 text-base">{descripcion}</p>
            </div>
        </div>
    );
}

export default CardService;