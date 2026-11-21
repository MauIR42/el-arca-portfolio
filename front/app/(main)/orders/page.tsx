import { Order } from "@/app/types/order";
import OrderList from "./components/order-list";


export default function Main(){
    const orders: Order[] = [];
    return (<div className="min-h-screen bg-gradient-to-br from-[#FFF5F7] via-[#FFF8E7] to-[#F0F4FF] text-black
                flex justify-center items-center ">
                <div>
                    <h1 className="text-2xl font-bold">Mis ordenes</h1>
                    <p className="text-grey-100 text-sm">Busca y organiza todas tus ordenes.</p>
                    <OrderList orders={orders}></OrderList>
                </div>


    </div>)
}