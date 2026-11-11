import Link from 'next/link'
import { SocialMedias } from '../ui/socials'

export function MainNav() {
    return (
        <div className="flex bg-white sticky top-0 z-50 items-center justify-between gap-6 border-b border-gray-200 bg-white px-4 py-4 sm:px-6">   
            <h3 className="text-primary font-heading text-3xl">Carpintería el arca</h3>
            <nav className="flex  gap-4 items-center space-x-4 lg:space-x-6 text-gray-700 list-none justify-end m-0 me-4 pe-2">
                <li className="m-0 hover:text-primaryhover"><Link href="/">Inicio</Link></li>
                <li className="m-0 hover:text-primaryhover"><Link href="/gallery">Galería</Link></li>
                <li className="m-0 hover:text-primaryhover"><Link href="/contact">Contacto</Link></li>
            </nav> 
            <SocialMedias></SocialMedias>
        </div>)

    }
