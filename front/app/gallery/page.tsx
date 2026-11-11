import Filter from "../components/gallery/filter";
import Pagination from "../components/gallery/paggination";
import SearchBar from "../components/gallery/search-bar";


export type filter = {
    id: number;
    name: string;
    type: "list" | "range" | "boolean";
    values?: string[]; //options available for list filters
    active?: boolean; //for boolean filters
    min?: number; //for range filters
    max?: number;
    selected?: string[] //for multiple list
}

export type products = any;


export default async function Home(props: {
  searchParams?: Promise<{
    query?: string;
    page?: string;
  }>;
}) {
    let activeFilters: filter[] = [];
    let products: products[] = [];
    let filteredProducts: products[] = [];
    // let totalPages: number = await fetchInvoicesPages(query);
    let totalPages: number = 10;

    const searchParams = await props.searchParams;
    return (<div>
        <h1>Galería de productos</h1>
        <p>Busca entre nuestro catálogo de productos, agrega productos para crear una orden y 
            ¡personalizalo!
        </p>

        <SearchBar></SearchBar>
        <div>
            <Filter></Filter>
            <div>
                {activeFilters.map((filter) => {
                    return (<div key={filter.id}>
                        <p>{filter.name}</p>
                        <p>{filter.type}</p>
                    </div>)
                })}
                <div>
                    {filteredProducts.map((product) => {
                        return (<div key={product.id}>
                            <p>{product.name}</p>
                            <p>{product.description}</p>
                        </div>)
                    })}
                    <Pagination totalPages={totalPages}></Pagination>
                </div>
            </div>

        </div>
    </div>)
}