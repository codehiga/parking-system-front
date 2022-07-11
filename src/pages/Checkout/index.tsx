import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { ITransaction } from "../../types/TransactionType";

export const Checkout = () => {

  const [ checkoutCar, setCheckoutCar ] = useState<ITransaction | undefined>();
  const { id } = useParams();

  const getCheckoutCar = async () => {

    const response = await axios.get("http://localhost:3333/transaction/"+id);
    setCheckoutCar(response.data);
  }

  async function checkout(id:string){
    const response = await axios.patch("http://localhost:3333/transaction/checkout/"+id);
  }

  function calcular() {

    if(!checkoutCar) return;

    const checkin = new Date(checkoutCar.checkin)
    const checkout = new Date(checkoutCar.checkout)

    const checkinDate = Date.UTC(checkin.getFullYear(), checkin.getMonth(), checkin.getDate(), checkin.getHours(), checkin.getMinutes(), checkin.getMinutes());
    
    const checkoutDate = Date.UTC(checkout.getFullYear(), checkout.getMonth(), checkout.getDate(), checkout.getHours(), checkout.getMinutes(), checkout.getMinutes());



    console.log(((checkoutDate - checkinDate) / 86400000) * 60)
  }

  useEffect(() => {

    getCheckoutCar();

  }, [id])
  
  return(
    <div className="content-height-calc bg-slate-200 p-2">
      {
        checkoutCar &&
        <div className="flex flex-col">
          <span><b>ID:</b> {checkoutCar.id}</span>
          <span><b>Placa:</b> {checkoutCar.plate} </span>
          <span><b>Checkin:</b> {checkoutCar.checkin.toString()} </span>
          <button onClick={calcular}>Calcular</button>
          <button onClick={() => checkout(checkoutCar.id)}>Fazer checkout</button>
        </div>
      }
    </div>
  )
}