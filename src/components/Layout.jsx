import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import Menu from "./Menu"

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen grid grid-cols-1 font-serif">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
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