import React, { useState } from 'react';

export const Todolist = () => {
    const [data, setdata] = useState({ taskname: '', date: '', status: '' });
    const [task, settask] = useState([]);
    const [edit, setedit] = useState(null);

    const handlechange = (event) => {
        setdata({ ...data, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (edit !== null) {
            const updatedTasks = [...task];
            updatedTasks[edit] = data;
            settask(updatedTasks);
            setedit(null);
        } else {
            settask([...task, data]);
        }

 
        setdata({ taskname: '', date: '', status: '' });
    };

    const handeledit = (index) => {
        setdata(task[index]);
        setedit(index);
    };

    return (
        <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded-lg">
        <h1 className="text-xl font-bold mb-4">Todo List</h1>
        <form onSubmit={handleSubmit} className='mb-4'>
            <div className="mb-2">
                <label className="block text-sm font-medium text-gray-700">Task Name</label>
                <input
                    type='text'
                    name='taskname'
                    placeholder='Enter task'
                    value={data.taskname}
                    onChange={handlechange}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
                />
            </div>
            <div className="mb-2">
                <label className="block text-sm font-medium text-gray-700">Due Date</label>
                <input
                    name='date'
                    type='date'
                    value={data.date}
                    onChange={handlechange}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
                />
            </div>
            <div className="mb-2">
                <label className="block text-sm font-medium text-gray-700">Status</label>
                <input
                    type='text'
                    name='status'
                    placeholder='Enter status'
                    value={data.status}
                    onChange={handlechange}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
                />
            </div>
            <div>
                <button
                    type='submit'
                    className="w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
                >
                    {edit !== null ? 'Update Task' : 'Add Task'}
                </button>
            </div>
        </form>
        <h2 className="text-lg font-semibold mb-2">Task List</h2>
        <ul className="divide-y divide-gray-200">
            {task.map((t, index) => (
                <li key={index} className="py-2 flex justify-between items-center">
                    <span>{t.taskname} - {t.date} - {t.status}</span>
                    <button 
                        onClick={() => handeledit(index)}
                        className="ml-2 text-blue-500 hover:text-blue-700"
                    >
                        Edit
                    </button>
                </li>
            ))}
        </ul>
    </div>
);
};
