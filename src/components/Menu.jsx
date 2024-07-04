import LinkItem from "./LinkItem"

const Menu = () => {
  return (
    <nav className="p-4">
      <div className="md:w-3/4 mx-auto flex justify-end gap-x-3">
        <LinkItem to={"/"} text={"Home"} />
        <LinkItem to={"register"} text={"Register"} />
        <LinkItem to={"login"} text={"Login"} />
      </div>
    </nav>
  )
}

export default Menu