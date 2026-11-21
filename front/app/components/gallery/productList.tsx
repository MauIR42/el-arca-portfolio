'use client';
import { Suspense, useEffect, useState } from "react"
import Pagination from "./paggination"
import useEmblaCarousel from 'embla-carousel-react'
import Image from "next/image";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import clsx from "clsx";
import type { Product } from "../../types/product";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";


function ProductCarousel({images, name}: {images: Product["images"], name:string}) {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });
    const [selectedIndex, setSelectedIndex] = useState(0);
    console.log(images);
    useEffect(() => {
      if (!emblaApi) return;

      const updateIndex = () => {
        setSelectedIndex(emblaApi.selectedScrollSnap());
      };

      emblaApi.on("select", updateIndex);

      updateIndex();

      return () => {
        emblaApi.off("select", updateIndex);
      };
    }, [emblaApi]);

  return (
    <div className="embla relative w-full h-72 flex flex-col">
      <div className="embla__viewport grow" ref={emblaRef}>
        <div className="embla__container h-full">
          {images.map((image, index) => (
            <div className="embla__slide " key={image.url} >
                <div className="relative h-full w-full group">
                    <Image
                        src={image.url}
                        alt={image.name || `${name} - ${index + 1}`}
                        fill={true}
                        className="w-full object-cover rounded-tl-3xl rounded-tr-3xl "
                    />
                    
                    {emblaApi?.canScrollPrev && <button type="button" onClick={() => emblaApi?.scrollPrev()}  
                        className={
                          clsx("cursor-pointer absolute bg-white/50 left-0 top-1/2  text-white hidden group-hover:block ml-2 w-8 h-8 rounded-full text-center  flex items-center  justify-items-center hover:bg-white/80",
                           {})}>
                            <FaAngleLeft className="relative text-black grow"></FaAngleLeft>
                    </button>}
                    {emblaApi?.canScrollNext &&<button type="button" onClick={() => emblaApi?.scrollNext()} 
                        className="cursor-pointer absolute right-0 top-1/2 bg-white/50 bg-opacity-10 text-white group-hover:block
                          mr-2 w-8 h-8 rounded-full text-center hidden flex items-center  justify-items-center hover:bg-white/80">
                            <FaAngleRight className="relative text-black grow"></FaAngleRight>
                    </button>}

                    <div className="absolute bottom-1 left-1/2 flex mb-5 gap-3 -translate-x-1/2">
                      {images.map((image, index)=>(
                          <button key={image.url} className={clsx("w-2 h-2 bg-white/70 rounded-full", {"w-4  bg-white": selectedIndex == index})}></button>
                          // {index} 
                      ))}
                    </div>
                </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function ProductCard({product} : { product: Product }){
  const [selected, setSelected] = useState(false);
  const maxPills = 4;
  const visiblePills = product.tags.slice(0,maxPills);
  const extraTags = product.tags.length - maxPills;
  return (<div  className="bg-white rounded-2xl shadow-md w-full">
      <div className="relative">
        <ProductCarousel images={product.images} name={`${product.name}-${product.id} ` } />
        <button className={clsx("absolute top-3 right-3 w-9 h-9 rounded-full cursor-pointer transition-colors duration-200 ease-in-out", {"bg-primary": selected, "bg-white/90": !selected})} 
                onClick={() => setSelected(selected => !selected)}>{(selected) ? <FaHeart className="mx-auto text-white"></FaHeart> : <FaRegHeart className="mx-auto"></FaRegHeart>}</button>
      </div>
      
      <div className="px-5 py-2">
          <div className="flex justify-between">
            <p className="text-primary text-xs my-auto">Custom Crafts</p>
            <p className="my-auto">$120</p>
          </div>
          
          <h3 className="text-lg font-semibold my-4">{product.name}</h3>
          <p className="text-gray-600 text-sm leading-relaxed">{product.description} </p>
      </div>
      <div className="flex mx-5 my-4">
        {visiblePills.map((tag)=> {
          return <span className="px-3 py-1 bg-[#FFF8E7] text-gray-700 text-xs rounded-full">{tag.name}</span>
        })}
        {extraTags > 0 && <span className="px-3 py-1 bg-[#FFF8E7] text-gray-700 text-xs rounded-full">+ {extraTags}</span>}
      </div>  
  </div>)

}

export default function ProductList({products}: { products: Product[] }) {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false })

  const goToPrev = () => emblaApi?.scrollPrev()
  const goToNext = () => emblaApi?.scrollNext()
  let totalPages = 2;
    
    return (<div>
            <div className="flex flex-col gap-4 mt-5 align-center justify-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 w-full">
                    {products.map((product) => {
                        return <ProductCard key={product.id} product={product}></ProductCard>
                    })}
                </div>
                <Suspense fallback={<div>Cargando búsqueda...</div>}>
                    <Pagination totalPages={totalPages}></Pagination>
                </Suspense>
            </div>
        </div>)
}
