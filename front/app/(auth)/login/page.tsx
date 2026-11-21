import { LoginForm } from "@/app/components/login/login-form";
import Image from "next/image";
import { IoIosArrowRoundBack } from "react-icons/io";

export default function Home(){
    

    return <div>
        <div className="min-h-screen bg-white flex">
            <div className="hidden lg:flex lg:w-1/2 relative flex-col items-center justify-center bg-gradient-to-br from-[#FFE5EC] via-[#FFF8E7] to-[#E5F4FF] p-12">
                <div className="relative z-10 text-center space-y-4 max-w-sm">
                    <h1 className="text-3xl text-primary">Carpintería El arca</h1>
                    <p className="text-gray-600 text-lg leading-relaxed">Llevamos vida a tu casa y hacemos tus celebraciones inolvidables </p>  
                </div>
                
                <div className="mt-10 relative z-10 rounded-3xl overflow-hidden shadow-2xl w-full max-w-sm">

                    <Image src="/images/creation2.jpg" width={1080} height={608} alt="prueba1" className="w-full h-72 object-cover">
                    </Image>
                </div>
            </div>
            <div className="w-full lg:w-1/2 flex items-center justify-center bg-white px-8 py-16 text-black">
                <div className="w-full max-w-md space-y-8">
                    <div>    
                        <h1 className="text-2xl font-bold">¡Hola de nuevo!</h1>
                        <p className="text-gray-500">Entra de nuevo a tu cuenta para continuar</p>
                    </div>
                    <div>
                        <LoginForm></LoginForm>

                        <div className="text-center mt-6 text-sm">
                                ¿No tienes una cuenta? 
                                <a className="cursor-pointer text-primary"> Crea una</a>
                        </div>
                        <div className="flex justify-center mt-7">
                            <a href="/" className="text-sm text-gray-400 hover:text-gray-600 transition-colors text-center">
                                <IoIosArrowRoundBack size={12} className="inline"></IoIosArrowRoundBack> 
                                volver al inicio
                            </a>
                        </div>
                        
                        
                    </div>
                </div>
                
            </div>
        </div>
    </div>
}