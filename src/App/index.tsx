import { BrowserRouter } from "react-router-dom"
import { Menu } from "../components/Menu"
import { AppRoutes } from "../routes"

export const App = () => {
  return(
    <div className="bg-black h-full flex">
      <BrowserRouter>
        <Menu />
        <AppRoutes />
      </BrowserRouter>
    </div>
  )
}