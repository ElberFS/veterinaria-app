import "../styles/global.css";
import backgroundHero from "../assets/images/backgroundPets.png";
import downIcon from "../assets/svg/downSvg.svg";



const Hero = () => {
    return (
        <section id="Hero" className="relative min-h-screen">
            <div
                id="Hero"
                className="w-full min-h-screen bg-cover bg-center relative"
                style={{ backgroundImage: `url(${backgroundHero})` }}
            >
                
                <div className="absolute inset-0 bg-black/50 z-0"></div>

                
                <div className="container mx-auto px-4 relative z-10 flex items-center  min-h-screen">
                    <div className="max-w-2xl text-white animate__animated animate__fadeInUp text-center md:text-left">
                        <h1 className="text-3xl md:text-6xl font-bold mb-5">
                            Bienvenidos a Patitas Felices
                        </h1>
                        <p className="text-base md:text-lg mb-6">
                            Cuidamos a tus mascotas como si fueran nuestras. Servicios veterinarios
                            profesionales con el cariño que tu compañero merece.
                        </p>
                        <a
                            href="#Services"
                            className="inline-block font-semibold rounded-full py-2 px-8 mt-2"
                            style={{ backgroundColor: '#4CAF50', color: '#ffffff' }}
                        >
                            Servicios
                        </a>
                    </div>
                </div>
            </div>

            
            <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 z-20">
                <a href="#servicios">
                    <img
                        src={downIcon}
                        className="w-8 h-8 md:w-10 md:h-10 animate-bounce"
                        alt="Desplazar hacia servicios"
                    />
                </a>
            </div>
        </section>
    );
};

export default Hero;
