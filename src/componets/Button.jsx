const Button = ({ children, handlerClick }) => {
  return (
    <button
      className='p-4 text-base border-2 border-black border-solid rounded-lg hover:bg-yellow-300 dark:hover:bg-slate-700 dark:hover:text-white'
      onClick={handlerClick}
    >
      {children}
    </button>
  )
}

export default Button
