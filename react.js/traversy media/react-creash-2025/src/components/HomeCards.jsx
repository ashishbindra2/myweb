import { Link } from 'react-router-dom'
import { FiChevronRight, FiCircle } from "react-icons/fi";
import { FaUser } from 'react-icons/fa';

import Card from './Card'
function HomeCards() {
    return (
        <div className="w-full flex justify-center">
            <div className="flex flex-wrap justify-center gap-4 w-full max-w-screen-xl p-4">
                <Card >
                    <FiCircle className="w-7 h-7 text-gray-500 dark:text-gray-400 mb-3" />

                    <Link to="#">
                        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Need a help in Claim?</h5>
                    </Link>
                    <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Go to this step-by-step guideline process on how to certify for your weekly benefits:</p>
                    <Link to="#" className="inline-flex font-medium items-center text-blue-600 hover:underline">
                        See our guideline
                        <FiChevronRight className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" />
                    </Link>
                </Card>
                <Card bg="bg-indigo-100">
                    <FaUser className="w-7 h-7 text-gray-500 dark:text-gray-400 mb-3" />

                    <Link to="#">
                        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Need a help in Claim?</h5>
                    </Link>
                    <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Go to this step-by-step guideline process on how to certify for your weekly benefits:</p>
                    <Link to="#" className="inline-flex font-medium items-center text-blue-600 hover:underline">
                        See our guideline
                        <FiChevronRight className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" />

                    </Link>
                </Card>
            </div>
        </div>
    )
}

export default HomeCards

