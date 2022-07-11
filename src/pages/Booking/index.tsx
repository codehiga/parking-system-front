import { ChangeEvent, useState } from "react"
import { BookingTable } from "./BookingTable"
import { CanvasBooking } from "./CanvasBooking";

export const Booking = () => {

  const [ bookingView, setBookingView ] = useState<"Table" | "Canvas">("Table");

  return(
    <div className="w-full bg-slate-300 border-l-2 p-2 content-height-calc">
      <nav className="w-full flex h-20 items-center justify-between">
        <h1 className="text-lg font-bold">Booking</h1>

        <div className="flex items-center h-full gap-2">
          <select onChange={(e : ChangeEvent<HTMLSelectElement>) => {
            setBookingView(e.target.value)
          }} className="p-2">
            <option value="Table">Tabela</option>
            <option value="Canvas">Canvas</option>
          </select>

          <select className="p-2">
            <option>Estacionado</option>
          </select>

          <button className="p-2 bg-slate-700 text-white rounded-md">
            Checkin +
          </button>
        </div>
      </nav>

      {
        bookingView === "Table" ? 
        <BookingTable /> 
        :
        <CanvasBooking />
      }

    </div>
  )
}