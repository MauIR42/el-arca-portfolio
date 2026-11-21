import Link from 'next/link'
import { SocialMedias } from '../ui/socials'
import { TbUser } from "react-icons/tb";
import { PiSignIn } from "react-icons/pi";
import { RiUserAddLine } from "react-icons/ri";
import { FloatingMenu } from '../ui/floatingMenu';


// export function FloatingMenu({ children, className }: { children: React.ReactNode, className?:string}){
    
//     return <>
//         {children}
//     </>
// } 

export default  function MainNav() {
    return (
        <div className="flex bg-white sticky top-0 z-50 items-center justify-between gap-6 border-b border-gray-200 bg-white px-4 py-4 sm:px-6">   
            <h3 className="text-primary font-heading text-3xl">Carpintería el arca</h3>
            <div className='flex relative'>
                <nav className="flex  gap-4 items-center space-x-4 lg:space-x-6 text-gray-700 list-none justify-end m-0 me-4 pe-2 border-r-2  border-gray-100">
                    <li className="m-0 hover:text-primaryhover"><Link href="/">Inicio</Link></li>
                    <li className="m-0 hover:text-primaryhover"><Link href="/gallery">Galería</Link></li>
                    <li className="m-0 hover:text-primaryhover"><Link href="/contact">Contacto</Link></li>
                </nav> 
                <SocialMedias ></SocialMedias>
                <FloatingMenu
                        trigger={<TbUser className="text-2xl text-gray-500 transition-colors hover:text-primaryhover" />}
                        >
                            <div className='absolute right-0 top-full mt-3 w-64 bg-white rounded-2xl shadow-2xl  z-50 overflow-hidden'>
                                <div className='text-black bg-white rounded-2xl max-w-500 p-2'>
                                    <div className=' px-5 pt-5 pb-3 border-b border-gray-100'>
                                        <p className='text-gray-700 text-sm'>¡Bienvenido a nuestra plataforma!</p>
                                        <p className='text-gray-400 text-xs mt-0.5'>Inicia sesión para que puedas ver tus ordenes o crear una nueva</p>
                                    </div>

                                    <a className='flex items-center gap-3 px-5 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors cursor-pointer'
                                        href='/login'>
                                        <PiSignIn className='text-center my-auto text-grey-100' color='grey'></PiSignIn>
                                        <span className='text-sm'>Iniciar sesión</span>
                                    </a>
                                    <a className='flex items-center gap-3 px-5 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors cursor-pointer'
                                        href='/login'>
                                        <RiUserAddLine className='text-center my-auto text-grey-100' color='grey'></RiUserAddLine>
                                        <span className='text-sm'>Crear cuenta</span>
                                    </a>
                                </div>
                            </div>
                </FloatingMenu>
            </div>
            
        </div>)

    }


