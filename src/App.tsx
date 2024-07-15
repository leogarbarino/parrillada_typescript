import MenuItem from "./components/MenuItem";
import OrderContents from "./components/OrderContents";
import { OrderTotals } from "./components/OrderTotals";
import TipPercentageForm from "./components/TipPercentageForm";
import { menuItems } from "./data/db";
import useOrder from "./hooks/useOrder";

function App() {

  const{ order, addItem, removeItem, tip, setTip, placeOrder }= useOrder()
  

  return (
    <>
      <header className=" bg-teal-400 py-5 ">
        <h1 className=" text-center text-2xl  ">
          Factura Cliente por consumo
        </h1>
        <h2 className=" text-center text-4xl font-black py-5 font-serif ">
          Parrillada Carnes y Pastas
        </h2>
      </header>

      <main className=" max-w-7xl mx-auto py-20 grid md:grid-cols-2">
        <div className="p-5">
          <h2 className="text-4xl py-8 text-center font-serif">Menú</h2>

          <div className="space-y-2">
          {menuItems.map(item => (
            <MenuItem  
            key={item.id}
            item={item}
            addItem={addItem} />
          ))}
        </div>
        </div>

        <div className="border border-dashed border-slate-400 p-5 rounded-lg space-y-10">
          {order.length  ? (
            <>
           <OrderContents order={order} removeItem={removeItem} />
           <TipPercentageForm setTip={setTip} tip={tip} />
           <OrderTotals order={order} tip={tip} placeOrder={placeOrder} />
            </>
          ) : (
            <p className="text-center">No se ha ordenado nada aún</p> 
          )}
        </div>
      </main>
      <div className="text-center font-semibold font-serif text-xl mb-7 bg-teal-300 ">
        <p>Gracias por su preferencia</p>
      </div>
    </>
  );
}

export default App;
