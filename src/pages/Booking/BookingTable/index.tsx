import axios from "axios";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { ITransaction } from "../../../types/TransactionType";
import '../booking.styles.css'

export const BookingTable = () => {

  const [ cars, setCars ] = useState<ITransaction[] | undefined>();

  useEffect(() => {
    getCars()
  }, [])

  const getCars = async () => {
    const response = await axios.get("http://localhost:3333/transaction/");
    setCars(response.data);
  }

  return(
    <div className="w-full">
      <table className="table-auto w-full">
        <thead >
          <tr className="bg-slate-300 border-2">
            <th>Ativo</th>
            <th>Booking ID</th>
            <th>Car Plate</th>
            <th>Owner ID</th>
            <th>Checkin</th>
            <th></th>
          </tr>
        </thead>

        <tbody className="w-full overflow-auto h-full">
          { 

            cars &&
            cars.map((car : ITransaction) => (
              <tr className="trBookingContent bg-slate-300 border-2" key={car.id}>
                <td>{car.active.toString()}</td>
                <td>{car.id}</td>
                <td>{car.plate}</td>
                <td>{car.idOwner}</td>
                <td>{car.checkin.toString()}</td>
                {
                  car.active === true ? 
                  <td>
                    <Link to={"/checkout/"+car.id} className="buttonCheckout">Checkout</Link>
                  </td> 
                  : 
                  <td>{car.checkout.toString()}</td>
                }
              </tr>
            ))

          }
        </tbody>
      </table>
    </div>
  )
}