import Image from "next/image";
import { Button } from "./components/ui/button";
import { FaArrowRight } from "react-icons/fa";
import { IoHammerOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { LuAward } from "react-icons/lu";
import { JSX } from "react/jsx-runtime";

type FeatureCardProps = {
  title: string;
  description: string;
  icon: string;
};


const icons: Record<string, JSX.Element>  = {
  'hammer': <IoHammerOutline className="text-4xl text-primary" /> ,
  'heart': <CiHeart className="text-4xl text-primary" />,
  'award': <LuAward className="text-4xl text-primary" />

}
function FeatureCard({ title, description, icon }: FeatureCardProps) {
  return (
    <article className="text-black flex flex-col items-center justify-center">
      <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#FFE5EC] to-[#E5F4FF] rounded-2xl mb-4">
        {icons[icon]}
      </div>
      <h3 className="mb-7"><b>{title}</b></h3>
      <p className="text-center">{description}</p>
      
    </article>
  );
}

function ExampleCard({ title, description, imageSrc }: { title: string; description: string; imageSrc: string }) {
  return (
    <div className="flex flex-col items-center fjustify-center bg-white rounded-2xl shadow-md overflow-hidden max-h-100 w-80 
      group shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
      <div className="relative  w-full h-60 overflow-hidden">
        <Image src={imageSrc} alt={title} width={400} height={300} className="relative  w-full h-full object-cover overflow-hidden 
        group-hover:scale-125 transition-transform duration-300 " />
        <div className="absolute inset-0  bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
      </div>
      <div className="p-4 text-center h-40">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col bg-gradient-to-br from-[#FFF5F7] via-[#FFF8E7] to-[#F0F4FF]">
      {/* <main className="flex flex-1 w-full  flex-col items-center justify-between   bg-gradient-to-br from-[#FFF5F7] via-[#FFF8E7] to-[#F0F4FF] sm:items-start"> */}
        <div className="min-h-screen min-h-screen flex flex-col align-center justify-center">
          <div className="text-black  max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-15 flex h-full">
            <div className="flex flex-col items-start justify-center w-3/5 h-full gap-4 ">
              <div className="px-3 rounded-full bg-pinkgradientstop text-center mb-4 py-2">
                <p className=" text-primary  ">Hecho con cuidado</p>
              </div>
              <h1 className="text-5xl lg:text-6xl leading-tight text-gray-900">Creando hermosos momentos de madera</h1>
              <h3 className="text-xl">Desde manualidades personalizadas para 
                tus celebraciones especiales a muebles 
                de todo tipo, te traemos tus proyectos de madera
                a la realidad con dedicación y técnica.</h3>
                <div className="flex gap-7">
                  <Button className="py-3 px-4 bg-primary hover:bg-primaryhover text-white font-bold py-2 px-4 rounded-full mt-4">
                    Ve nuestra galería
                    <FaArrowRight className="ml-2" />
                  </Button>
                  <Button className="py-3 px-4  bg-white text-gray-700 hover:bg-gray-100 font-bold py-2 px-4 rounded-full mt-4">
                    Contáctanos
                  </Button>
                </div>
                
            </div>
            <div className="flex   items-center justify-center grow h-full">
              <Image
                src="/images/landing-1.jpg"
                alt="Landing Image"
                width={1080}
                height={1620}
                className="w-120 h-120 object-cover rounded-xl"
              />
            </div>

          </div>
        </div>
        
        <section className="py-16 bg-white">
          <div className="flex  bg-white justify-around  max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 gap-3">
            <FeatureCard title="Expert Craftsmanship" description="Every piece is handcrafted with attention to detail and passion." icon="hammer"></FeatureCard>
            <FeatureCard title="Made with Love" description="Each creation tells a story and carries the warmth of handmade quality." icon="heart"></FeatureCard>
            <FeatureCard title="Custom Designs" description="Personalized creations tailored to your special moments and needs." icon="award"></FeatureCard>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-br from-[#FFF5F7] via-[#FFF8E7] to-[#F0F4FF] flex flex-col items-center justify-center gap-8 text-black">
          <h3 className="text-3xl font-bold text-5xl text-gray-900 "> Nuestras creaciones</h3>
          <p>Explora en nuestro sitio nuestros trabajos en madera que tenemos para ti</p>
          <div className="flex flex-wrap justify-around gap-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ExampleCard title="Manualidades" description="Para todos sus eventos: bodas, cumpleaños, festividades escolares." imageSrc="/images/creation1.jpg" />
            <ExampleCard title="Muebles finos" description="Desde cajones y puertas hasta cocinas, dormitorios y estudios completos" imageSrc="/images/creation2.jpg" />
            <ExampleCard title="Decoraciones para la casa" description="Bonitos portaretratos, soportes para la cocina o balcón" imageSrc="/images/creation3.jpg" />
          </div>
          <div className="flex justify-center mt-8">
            <Button className="py-3 px-4 bg-primary hover:bg-primaryhover text-white font-bold py-2 px-4 rounded-full mt-4">
              Ve nuestra galería
              <FaArrowRight className="ml-2" />
            </Button>
          </div>
        </section>
        {/* landing */}
        {/* badges */}
        {/* examples */}
      {/* </main> */}
    </div>
  );
}
