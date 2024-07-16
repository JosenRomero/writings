import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import Menu from "./Menu"

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen grid grid-cols-1 font-serif bg-white">
      <Menu />
      <main className="p-6 w-full md:w-3/5 mx-auto row-span-4">
        <ToastContainer />
        {children}
      </main>
      <footer></footer>
    </div>
  )
}

export default Layout