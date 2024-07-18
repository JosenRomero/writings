
const Reload = ({ message }) => {
  return (
    <div
      className='py-6 text-red-800 rounded-lg bg-red-50 text-center'
      role='alert'
    >
      <p className="font-bold text-2xl mb-3">Error</p>
      <p className="text-lg">
        <span className="font-semibold">Description: </span>
        {message}
      </p>
    </div>
  )
}

export default Reload
