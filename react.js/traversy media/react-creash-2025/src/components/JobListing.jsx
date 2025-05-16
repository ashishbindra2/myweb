import { useState, useEffect } from 'react'
// import jobs from '../jobs.json'
import Job from './Job'
import Spinner from '../components/Spinner';

const JobListing = ({ isHome = false }) => {
    // const jobListings = isHome ? jobs.slice(0, 3): jobs;
    const [jobs, setJobs] = useState([]); // name of the state and name of function which update thte state
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchJobs = async () => {
            const apiUrl = isHome
                ? "/api/jobs?_limit=3"
                : "/api/jobs";

            try {
                const res = await fetch(apiUrl);
                const data = await res.json();
                console.log(data)
                setJobs(data);
            } catch (error) {
                console.log("error fctching data", error)
            } finally {
                setLoading(false);
            }
        }
        fetchJobs();
    }, []);

    return (
        < section className="bg-blue-50 py-12 px-6" >
            <h2 className="text-2xl font-bold text-center mb-8 text-indigo-700">{isHome ? "Recent Jobs" : "Browse Jobs"}</h2>
            {loading ?
                <Spinner loading={loading} />
                : <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-screen-xl mx-auto">

                    {jobs.map((job) => (
                        <Job key={job.id} job={job} />
                    ))} </div>}

        </section >
    )
}

export default JobListing