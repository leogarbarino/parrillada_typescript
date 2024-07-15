import { useState } from "react"
import type { MenuItem, OrderItem } from "../types"

export default function useOrder() {

    const[order, setOrder]= useState<OrderItem[]>([])
    const[tip, setTip]= useState(0)

    const addItem= (item: MenuItem) => {

      const itemExist= order.find(orderItem => orderItem.id === item.id)
      if(itemExist){
        const updatedOrder= order.map(orderItem => orderItem.id === item.id
           ? {...orderItem, quantity: orderItem.quantity + 1} : orderItem)
           setOrder(updatedOrder)
      }else{
        const newItem= {...item, quantity:1}
        setOrder([...order, newItem])
      }
      
    }

    const removeItem = (id : OrderItem ['id']) => {
      const itemExist = order.find((orderItem) => orderItem.id === id)
      if(itemExist && itemExist?.quantity > 1){ 
        const updatedOrder= order.map((orderItem) =>
        orderItem.id === id ? {...orderItem, quantity: orderItem.quantity -1}
        : orderItem )
        setOrder(updatedOrder)
      }else{
        const updatedOrder= order.filter((orderItem) => orderItem.id !== id)
        setOrder(updatedOrder)
      }
    }

    const placeOrder= () => {
      setOrder([]),
      setTip(0)
    }
    
    

  return {
      order,
      tip,
      setTip,
      addItem,
      removeItem,
      placeOrder
  }
}