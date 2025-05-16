
const Card = ({ children, bg="bg-white"}) => {
  return (
    <div className={`max-w-sm p-6 ${bg} p-6 rounded-lg shadow-md  border border-gray-200 dark:bg-gray-800 dark:border-gray-700`}>
        {children}
 
    </div>
  )
}

export default Card