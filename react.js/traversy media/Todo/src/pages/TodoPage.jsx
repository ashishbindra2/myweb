const TodoPage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-indigo-100 py-10 px-4">
            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-6">
                
                {/* Sidebar */}
                <aside className="w-full lg:w-1/4 bg-white shadow-xl rounded-xl p-6">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Categories</h2>
                    <ul className="space-y-3">
                        <li>
                            <a href="#" className="block px-4 py-2 bg-emerald-500 text-white rounded-lg shadow hover:bg-emerald-600 transition">
                                All
                            </a>
                        </li>
                        <li>
                            <a href="#" className="block px-4 py-2 bg-indigo-200 text-gray-800 rounded-lg hover:bg-indigo-300 transition">
                                Work
                            </a>
                        </li>
                        <li>
                            <a href="#" className="block px-4 py-2 bg-amber-200 text-gray-800 rounded-lg hover:bg-amber-300 transition">
                                Personal
                            </a>
                        </li>
                    </ul>
                </aside>

                {/* Main Content */}
                <div className="flex-1 w-full">
                    <header className="mb-8 text-center">
                        <h1 className="text-4xl font-extrabold text-gray-900 drop-shadow-sm">📝 My To-Do List</h1>
                        <p className="text-gray-600 mt-2">Stay organized and productive</p>
                    </header>

                    {/* Add Task */}
                    <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
                        <div className="flex flex-col sm:flex-row items-center gap-4">
                            <input
                                className="flex-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
                                type="text"
                                placeholder="Add a new task"
                            />
                            <button className="px-6 py-2 bg-emerald-600 text-white font-medium rounded-lg hover:bg-emerald-700 transition">
                                Add
                            </button>
                        </div>
                    </div>

                    {/* Task List */}
                    <div className="bg-white rounded-xl shadow-lg p-6">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Your Tasks</h2>
                        <ul className="divide-y divide-gray-200">
                            <li className="py-4 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <input type="checkbox" className="h-5 w-5 text-emerald-600" />
                                    <span className="text-lg">Finish React project</span>
                                </div>
                                <button className="text-rose-500 hover:text-rose-600 transition">Delete</button>
                            </li>
                            <li className="py-4 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <input type="checkbox" className="h-5 w-5 text-emerald-600" />
                                    <span className="text-lg">Buy groceries</span>
                                </div>
                                <button className="text-rose-500 hover:text-rose-600 transition">Delete</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TodoPage;
