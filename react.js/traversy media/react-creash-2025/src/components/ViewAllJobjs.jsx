import { Link } from 'react-router-dom'

const ViewAllJobjs = () => {
  return (
    <div className="my-3 grid grid-cols-6 gap-4">
      <Link to='/jobs' className="mx-4 text-center p-4 col-span-4 col-start-2 bg-indigo-500 hover:bg-fuchsia-500 ...">view all jobs</Link>
    </div>
  )
}

export default ViewAllJobjs