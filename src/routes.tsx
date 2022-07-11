import { Route, Routes } from "react-router-dom"
import { Navbar } from "./components/Navbar"
import { Booking } from "./pages/Booking"
import { Checkout } from "./pages/Checkout"
import { Home } from "./pages/Home"

export const AppRoutes = () => {
  return(
    <main className="container-content flex-col">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/checkout/:id" element={<Checkout />} />
      </Routes>
    </main>
  )
}