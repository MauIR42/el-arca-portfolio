import { SocialMedias } from "../ui/socials";


export function Footer(){
    return (<div>
        <div className="bg-white text-gray-600 flex flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row sm:gap-0">
            <div>
                <h3 className="text-primary font-heading text-3xl">Carpintería el arca</h3>
                <p>Creando con amor desde 2000</p>
            </div>
            <div className="flex gap-3 sm:gap-1">
                <p className=" md:block hidden">Revisa nuestras redes sociales: </p>
                <SocialMedias></SocialMedias>
            </div>
        </div>
        
    </div>);
}