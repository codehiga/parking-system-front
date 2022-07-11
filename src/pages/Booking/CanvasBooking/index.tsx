import { useEffect, useState } from "react";

export const CanvasBooking = () => {

  const [ parkingMap, setParkingMap ] = useState<number[]>([]);

  useEffect(() => {
    for(let i = 1; i < 60; i++) {
      parkingMap.push(i)
    }
  }, [])


  return(
    <div className="h-full w-full max-h">
      {
        parkingMap?.map((park) => (
          <div>
            a
          </div>
        ))
      }
    </div>
  )
}