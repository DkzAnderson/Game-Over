import { Outlet } from "react-router-dom"
import { NavBar } from "../components/NavBar/NavBar"

export const LoginPage = () => {


  return (
    <section className="w-full flex flex-col items-center justify-center bg-st min-h-screen">
        <NavBar/>
        <Outlet/>
    </section>
  )
}
