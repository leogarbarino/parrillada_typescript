import { formatCurrency } from "../helpers"
import { OrderItem } from "../types"


type OrderContentsProps= {
    order: OrderItem[],
    removeItem: (id: OrderItem['id']) => void

}

export default function OrderContents({ order, removeItem } : OrderContentsProps) {
  return (
    <div>
      <h2 className="text-4xl text-center mt-10 font-serif">Detalle Consumo</h2>

      <div className="space-y-3 mt-5">
          {order.map( item => (
                <div className="flex justify-between items-center border-t-2 border-blue-200 py-6 last-of-type:border-b-2" key={item.id}>

                  <div>
                    <p className="text-lg">{ item.name } - {formatCurrency(item.price)}</p>
                    <p className="font-black">Cantidad: {item.quantity} - Total a pagar: {formatCurrency(item.price * item.quantity)}</p>
                  </div>

                    <button onClick={() => removeItem(item.id)} className="bg-red-600 h-8 w-8 rounded-full text-white font-black">X</button>
                </div>
            ))
         } 
      </div>
    </div>
  )
}
