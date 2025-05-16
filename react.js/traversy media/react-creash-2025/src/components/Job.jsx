import { useState } from 'react';
import { FaMapMarker } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Job = ({ job }) => {
    const [showFullDescription, setShowFullDescription] = useState(false); // inside parameter we have default value

    let description = job.description;

    if (!showFullDescription) {
        description = description.substring(0, 60) + '...';
    }
    return (
        <div key={job.id} className="bg-white p-6 rounded-lg shadow">
            <span className="text-sm font-medium text-gray-500">{job.type}</span>
            <h3 className="text-lg font-bold mt-2">{job.title}</h3>
            <p className="text-sm text-gray-600 mt-2">{description}</p>
            <button onClick={() => setShowFullDescription(preState => !preState)} className="text-blue-600 text-sm mt-2 inline-block">
                {showFullDescription ? 'Less' : 'More'}
            </button>
            <div className="my-4 flex justify-between items-center">
                <span className="text-sm text-indigo-600 font-medium">{job.salary}</span>
                <div className="text-sm text-red-500 flex items-center gap-1">
                    <FaMapMarker className='inline text-lg mb-1' />
                    {job.location}
                </div>
            </div>
            <Link to={`/jobs/${job.id}`} className="mt-4 px-4 py-2 bg-indigo-500 text-white text-sm rounded">Read More</Link>
        </div>
    )
}

export default Job