import { useContext } from "react"
import { UserContext } from "../../providers/UserContext"
import { CartsProvider } from "../../providers/CartContext";
import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoutes = () => {
  const { user } = useContext(UserContext);

  return user ? (
    <CartsProvider>
      <Outlet />
    </CartsProvider>
  ) : (
    <Navigate to="/" />
  )
}