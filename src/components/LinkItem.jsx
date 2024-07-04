import { NavLink } from "react-router-dom"

const LinkItem = ({ to, text }) => {
  return (
    <NavLink
      className={({ isActive }) => 
        [
          isActive ? "bg-gray-400 text-gray-100" : "bg-white text-slate-800 border border-gray-300",
          "font-medium text-sm px-5 py-2.5 rounded-lg hover:bg-gray-500 hover:text-gray-100"
        ].join(" ")
      }
      to={to}
    >
      {text}
    </NavLink>
  )
}

export default LinkItem