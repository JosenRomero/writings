import { createContext, useState, useEffect } from "react"
import { checkingAuthentication } from "../services/user"

export const UserContext = createContext()

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {

    async function init() {
      const result = await checkingAuthentication();
      if (result?.message === "Unauthorized") updateUser(null);
      else updateUser(result);
    }

    init();

  }, [])

  const updateUser = (value) => {
    setUser(value);
    if(value) setIsAuthenticated(true);
    else setIsAuthenticated(false);
  }
  
  return (
    <UserContext.Provider value={{ user, updateUser, isAuthenticated }}>
      {children}
    </UserContext.Provider>
  )
}