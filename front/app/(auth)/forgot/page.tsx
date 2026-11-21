
import { FaArrowLeftLong } from "react-icons/fa6";
import { TbUser } from "react-icons/tb";


export default function Main(){
    return (<div className="min-h-screen  
                bg-gradient-to-br from-[#FFF5F7] via-[#FFF8E7] to-[#F0F4FF] text-black
                flex justify-center items-center">
            <div className="text-gray-400 text-sm bg-white py-9 px-8 max-w-120 rounded-2xl shadow-xl">
                <a className="pointer-cursor" href="/login"><FaArrowLeftLong className="mr-2 inline"></FaArrowLeftLong> Volver a inicio de sesión </a>
                <h1 className="text-2xl text-bold text-black mt-10 mb-2 font-bold">¿Olvidaste tu contraseña?</h1>
                <p>Ingresa tu contraseña y enviaremos un link de recuperación de contraseña.</p>
                <div className="relative mt-8 mb-4">
                    <form>
                        <div>
                            <label htmlFor="email" className="block text-gray-700 text-xs">Correo electrónico</label>
                            <div className="relative">
                                <TbUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={24}></TbUser>
                                <input type="email"
                                name="email" className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#D4516A] focus:outline-none transition-colors"
                                placeholder="tu-email@madera.com"
                                ></input>
                            </div>
                            <button type="submit" className="rounded-2xl text-white bg-primary w-full py-3 mt-4" > Enviar link de recuperación</button>
                        </div>
                    </form>
                </div>
            </div>
            

    </div>)
}