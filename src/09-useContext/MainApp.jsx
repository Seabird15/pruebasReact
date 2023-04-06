import { Outlet } from "react-router-dom"
import { UserProvider } from "./context/UserProvider"
import { NavBar } from "./NavBar"

    export const MainApp = () => {
      return (
        <UserProvider> 
            {/* <h1>MainApp</h1> */}
            <NavBar />
            <hr />

            <Outlet />
        </UserProvider>
      )
    }
    