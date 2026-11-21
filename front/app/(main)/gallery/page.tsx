

import { Suspense } from "react";
import Filter, { FilterSelected } from "../../components/gallery/filter";
import Search from "../../components/gallery/search-bar";
import ProductList from "../../components/gallery/productList";
import type { Product } from "../../types/product";




// export type products = any;


export default async function Home(props: {
  searchParams?: Promise<{
    query?: string;
    page?: string;
  }>;
}) {
    let activeFilters: FilterSelected[] = [];
    let products: Product[] = [];
    let filteredProducts: Product[] = [{
        id: 1,
        dimensions: { width: 20, height: 25, depth: 2 },
        minimumQuantity: 1,
        basePrice: 120,
        active: true,
        tags: [{id:1, name:"cumpleaños"}, {id:2,name:"prueba"}],
        name: "test1",
        description: "Personalized wooden portraits hand-carved with precision. Perfect for birthdays, anniversaries, and special celebrations. Each piece is unique and crafted to capture your precious moments.",
        images: [
            {"url":"/images/creation1.jpg", "name":"test1"},
            {"url":"/images/creation2.jpg", "name":"test1"},
            {"url":"/images/creation3.jpg", "name":"test1"}
        ]
    },{
        id: 2,
        dimensions: { width: 20, height: 25, depth: 2 },
        minimumQuantity: 1,
        basePrice: 120,
        active: true,
        tags: [],
        name: "test1",
        description: "test1 description",
        images: [
            { url: "/images/creation1.jpg", name: "Product front view" },
            { url: "/images/creation2.jpg", name: "Product side view" },
            { url: "/images/creation3.jpg", name: "Product detail" }
        ]
    },{
        id: 3,
        dimensions: { width: 20, height: 25, depth: 2 },
        minimumQuantity: 1,
        basePrice: 120,
        active: true,
        tags: [],
        name: "test1",
        description: "test1 description",
        images: [
            { url: "/images/creation1.jpg", name: "Product front view" },
            { url: "/images/creation2.jpg", name: "Product side view" },
            { url: "/images/creation3.jpg", name: "Product detail" }
        ]
    },{
        id: 4,
        dimensions: { width: 20, height: 25, depth: 2 },
        minimumQuantity: 1,
        basePrice: 120,
        active: true,
        tags: [],
        name: "test1",
        description: "test1 description",
        images: [
            { url: "/images/creation1.jpg", name: "Product front view" },
            { url: "/images/creation2.jpg", name: "Product side view" },
            { url: "/images/creation3.jpg", name: "Product detail" }
        ]
    },{
        id: 5,
        dimensions: { width: 20, height: 25, depth: 2 },
        minimumQuantity: 1,
        basePrice: 120,
        active: true,
        tags: [],
        name: "test1",
        description: "test1 description",
        images: [
            { url: "/images/creation1.jpg", name: "Product front view" },
            { url: "/images/creation2.jpg", name: "Product side view" },
            { url: "/images/creation3.jpg", name: "Product detail" }
        ]
    },{
        id: 6,
        dimensions: { width: 20, height: 25, depth: 2 },
        minimumQuantity: 1,
        basePrice: 120,
        active: true,
        tags: [],
        name: "test1",
        description: "test1 description",
        images: [
            { url: "/images/creation1.jpg", name: "Product front view" },
            { url: "/images/creation2.jpg", name: "Product side view" },
            { url: "/images/creation3.jpg", name: "Product detail" }
        ]
    },{
        id: 7,
        dimensions: { width: 20, height: 25, depth: 2 },
        minimumQuantity: 1,
        basePrice: 120,
        active: true,
        tags: [],
        name: "test1",
        description: "test1 description",
        images: [
            { url: "/images/creation1.jpg", name: "Product front view" },
            { url: "/images/creation2.jpg", name: "Product side view" },
            { url: "/images/creation3.jpg", name: "Product detail" }
        ]
    }];
    // let totalPages: number = await fetchInvoicesPages(query);
    let totalPages: number = 10;
    return (<div className=" min-h-screen bg-gradient-to-br from-[#FFF5F7] via-[#FFF8E7] to-[#F0F4FF] text-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center">
                <h1 className="text-4xl font-bold mb-2 ">Galería de productos</h1>
                <p className="text-lg text-gray-600">Busca entre nuestro catálogo de productos, agrega productos para crear una orden <br></br>
                    y ¡Empieza a explorar la personalización y futura entrega de tu pedido!
                </p>
            </div>
            <div className="max-w-2xl mx-auto mt-8">
                <Suspense fallback={<div>Cargando búsqueda...</div>}>
                    <Search placeholder="Buscar productos por nombre..." ></Search>
                </Suspense>
            </div>
            
            <div className="lg:grid lg:grid-cols-4 lg:gap-8 gap-2 mt-5">
                <Suspense fallback={<div>Cargando filtros...</div>}>
                    <Filter className="lg:col-span-1 mb-8 lg:mb-0 hidden lg:block"></Filter>
                </Suspense>
                
                <div className="lg:col-span-3">
                    <div className="flex flex-col gap-2">
                        <p>Filtros activos:</p>
                        <div>
                            {activeFilters.map((filter) => {
                                return (<div key={filter.id}>
                                    <p>{filter.name}</p>
                                </div>)
                            })}
                        </div>
                    </div>
                    
                    <div>
                        {filteredProducts.length > 0 ? (
                            <ProductList products={filteredProducts}></ProductList>
                        ) : (
                            <p>No se encontraron productos.</p>
                        )}
                    </div>
                </div>

            </div>
        </div>
    </div>)
}