import { useContext } from "react"
import { Navigate, Outlet } from "react-router-dom"
import { UserContext } from "../context/UserContext"

const ProtectedRoute = () => {
  const { isAuthenticated } = useContext(UserContext);

  if(isAuthenticated === null) return <h1>Loading...</h1>
  else if (!isAuthenticated) return <Navigate to={'/login'} replace />

  return (
    <Outlet />
  )
}

export default ProtectedRoute