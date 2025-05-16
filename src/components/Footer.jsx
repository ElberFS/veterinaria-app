// Footer.jsx

import Logo from '../assets/images/logo.png'; 

function Footer() {
    return (
        <footer id='Footer' className="bg-green-800 text-white py-8">
            <div className="container mx-auto px-4 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                
                <div>
                    <img src={Logo} alt="Patitas Felices Logo" className="h-12 mb-4" /> 
                    <h3 className="font-bold text-lg mb-2">Patitas Felices</h3>
                    <p className="text-sm text-gray-300">
                        Cuidados veterinarios profesionales con el amor que tu mascota merece.
                    </p>
                    
                </div>

                
                <div>
                    <h3 className="font-bold text-lg mb-4">Enlaces rápidos</h3>
                    <ul className="text-sm text-gray-300 space-y-2">
                        <li><a href="#" className="hover:text-white">Inicio</a></li>
                        <li><a href="#" className="hover:text-white">Servicios</a></li>
                        <li><a href="#" className="hover:text-white">Testimonios</a></li>
                        <li><a href="#" className="hover:text-white">Contacto</a></li>
                    </ul>
                </div>

            
                <div>
                    <h3 className="font-bold text-lg mb-4">Redes Sociales</h3>
                    <ul className="text-sm text-gray-300 space-y-2">
                        <li><a href="#" className="hover:text-white">Facebook</a></li>
                        <li><a href="#" className="hover:text-white">Instagram</a></li>
                        <li><a href="#" className="hover:text-white">TikTok</a></li>
                        <li><a href="#" className="hover:text-white">Youtube</a></li>

                    </ul>
                </div>

                
                <div>
                    <h3 className="font-bold text-lg mb-4">Contacto</h3>
                    <ul className="text-sm text-gray-300 space-y-2">
                        <li className="flex items-start gap-2">
                            <svg className="w-4 h-4 fill-current text-green-500" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 1.42.45 2.75 1.22 3.8L12 22.16l5.78-9.36c.77-1.05 1.22-2.38 1.22-3.8 0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                            <span>Av. Mascotitas Felices 123, Urb. El Valle</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <svg className="w-4 h-4 fill-current text-green-500" viewBox="0 0 24 24"><path d="M20 21.94L12.35 14.28c-.37-.37-.88-.37-1.25 0L4 21.94V5c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2v16.94zM12 12c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/></svg>
                            <span>+51 987 654 321</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <svg className="w-4 h-4 fill-current text-green-500" viewBox="0 0 24 24"><path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 2l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                            <span>contacto@patitasfelices.com</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <svg className="w-4 h-4 fill-current text-green-500" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-8h2v3h-2v-3zm1-4c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg>
                            <span>Lun-Vie: 9:00 AM - 7:00 PM<br />Sábados: 9:00 AM - 2:00 PM<br />Emergencias: 24/7</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="mt-8 py-4 border-t border-green-700 text-center text-sm text-gray-400">
                &copy; {new Date().getFullYear()} Veterinaria Patitas Felices. Todos los derechos reservados.
            </div>
        </footer>
    );
}

export default Footer;