
const Layout = ({ children }) => {
  return (
    <div className="min-h-screen grid grid-cols-1 place-content-between font-serif">
      <nav></nav>
      <main className="mx-auto">
        {children}
      </main>
      <footer></footer>
    </div>
  )
}

export default Layout