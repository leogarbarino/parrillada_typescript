import { useMemo } from "react";
import { OrderItem } from "../types";
import { formatCurrency } from "../helpers";

type OrderTotalsProps= {
    order: OrderItem[],
    tip: number,
    placeOrder: () => void
}


export function OrderTotals({order, tip, placeOrder} : OrderTotalsProps) {

  const subTotalAmount = useMemo(() => order.reduce((total, item) => total + (item.quantity * item.price), 0), [order])
  const tipAmount= useMemo(() => subTotalAmount * tip, [tip, order])
  const totalAmount= useMemo(() => subTotalAmount + tipAmount, [tip, order])

  return (
    <>
      <div className="space-y-3">
        <h2 className="font-serif text-2xl">Total consumido y Propina: </h2>
        <p className="font-thin text-right">
          SubTotal a pagar:
          <span className="font-thin"> {formatCurrency(subTotalAmount)}</span>
        </p>

        <p className="font-thin text-right">
          Propina:
          <span> {formatCurrency(tipAmount)}</span>
        </p>

        <p className="font-extrabold text-right">
          Total a pagar:
          <span className="font-bold"> {formatCurrency(totalAmount)}</span>
        </p>
      </div>

      <button className="w-full bg-black p-3 uppercase text-white font-bold mt-10 disabled:opacity-10"
      disabled={totalAmount === 0}
      onClick={placeOrder} >Guardar orden en base de datos</button>
    </>
  );
}
