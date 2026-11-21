import { IoCallOutline } from "react-icons/io5";
import { SlLocationPin } from "react-icons/sl";
import { MdOutlineMail } from 'react-icons/md';
import { LuSend } from "react-icons/lu";


export function ContactElement(contact: {icon:string, text: string, title:string}){
    let icons: Record<string,any>= {
        "call": <IoCallOutline className="mx-auto text-center my-auto" size={24}></IoCallOutline>,
        "location": <SlLocationPin className="mx-auto text-center my-auto" size={24}></SlLocationPin>,
        "mail": <MdOutlineMail className="mx-auto text-center my-auto" size={24}></MdOutlineMail>
    }
    return (<div className="flex gap-2">
        <div className="text-primary  bg-pinkgradientstop rounded-full h-10 w-10 flex justify-center ">{icons[contact.icon]}</div>
        <div>
            <p className="text-xs text-black">{contact.title}</p>
            <p>{contact.text}</p>
        </div>
    </div>)
}

export default function Home() {
    return <div className="min-h-screen  bg-gradient-to-br from-[#FFF5F7] via-[#FFF8E7] to-[#F0F4FF] text-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="mb-8">
                <h1 className="font-bold text-5xl text-center mb-4">Contactanos</h1>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto text-center"> ¿Lista para iniciar tu proyecto de carpintería a la medida? 
                    Mandanos un mensaje y estaremos de vuelta contigo muy pronto.</p>
            </div>
            <div className="grid lg:grid-cols-2 gap-12">
                <div className="space-y-8">
                    <div className="rounded-4xl bg-white px-12 py-8 ">
                        <h3 className="font-bold text-2xl text-gray-900">Información de contacto</h3>
                        <div className="flex flex-col gap-3 mt-5">
                            <ContactElement icon="mail" text="elarca.manualidades@gmail.com"  title="Correo"></ContactElement>
                            <ContactElement icon="call" text="+525517965905"  title="Teléfono"></ContactElement>
                            <ContactElement icon="location" text="Av. Chapultepec 19, Lomas de las Torres, 52918 Cdad. López Mateos, Méx."  title="Ubicación"></ContactElement>
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-3xl p-8 shadow-lg">
                    <h3 className="text-2xl text-gray-900 font-bold mb-4">Envíanos un mensaje</h3>
                    <form>
                        <div className="flex flex-col mb-2">
                            <label htmlFor="name" className="block text-gray-700 mb-2" >Nombre *</label>
                            <input type="text" name="name" placeholder="¡tu nombre!"
                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#D4516A] focus:outline-none transition-colors"></input>
                        </div>
                        <div className="flex flex-col mb-2">
                            <label htmlFor="email" className="block text-gray-700 mb-2" >Correo</label>
                            <input type="email" name="email" placeholder="tu@correo.com"
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#D4516A] focus:outline-none transition-colors"></input>
                        </div>
                        <div className="flex flex-col mb-2">
                            <label htmlFor="phone" className="block text-gray-700 mb-2">Número</label>
                            <input type="tel" name="phone" placeholder="+52 55 xx xx xx xx"
                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#D4516A] focus:outline-none transition-colors"></input>
                        </div>
                        <div className="flex flex-col mb-2" >
                            <label htmlFor="message" className="block text-gray-700 mb-2">Mensaje</label>
                            <textarea
                                id="message"
                                name="message"
                                rows={5}
                                required
                                maxLength={2000}
                                className="min-h-32 resize-y rounded-md border border-gray-300 p-3"
                                placeholder="Escríbenos tus dudas por aquí"
                            />
                        </div>
                        <button type="button" className="hover:bg-[#B84359] transition-colors bg-primary text-white  w-full text-center py-2.5 mx-auto inline rounded-xl"> 
                            <span className="mr-3">Enviar mensaje</span>
                            <LuSend className="text-center my-auto inline"></LuSend>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>;
}
