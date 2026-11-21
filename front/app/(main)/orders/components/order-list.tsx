import { Order } from "@/app/types/order";
import Image from "next/image";

export function OrderCard({order}: {order: Order}){
    return (<div className="bg-white px-4 py-8">
        <Image alt={order.name} width={order.image.width} height={order.image.height} src={order.image.url}></Image>
        <div>
            <h3>{order.name}</h3>
            
            
        </div>
    </div>)
}

export default function OrderList({orders}:  {orders: Order[]}){
    let filteredOrders: Order[] = []
    return (<div>
        {filteredOrders.map( (order)=>{
          return <OrderCard key={order.id} order={order}></OrderCard>  
        })}
    </div>)
}