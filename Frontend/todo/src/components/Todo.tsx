import { useState } from 'react';

const Todo = () => {
    const [Tasks , setTasks] = useState<string[]>([]);
    const [Input , setInput] = useState("");

    const addTask = () => {
        if(Input.trim() !== "") {
            setTasks([...Tasks,Input]);
            setInput("");
        }
    };

    const removeTask = (index : number) => {
        setTasks(Tasks.filter((_,i) => i !== index));
    }

    return (
        <div className='flex flex-col items-center min-h-screen bg-gray-100 p-6'>
            <h1 className='text-3xl font-bold mb-4 text-blue-600'>To-Do List</h1>
            {/* Input Field */}
            <div className='flex gap-2'>
                <input type="text" className='p-2 border border-gray-300 rounded-md foucs:outline-none focus:ring-2 focus:ring-blue-500'
                placeholder='Enter a task...'
                value={Input}
                onChange={(e) => setInput(e.target.value)}/>
                <button
                onClick={addTask}
                className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600'>
                    Add
                </button>
            </div>

            {/* Task List */}
            <ul className="mt-4 w-80">
                {Tasks.length === 0 ? (
                <p className="text-gray-500 text-center">No tasks added yet.</p>
                ) : (Tasks.map((task, index) => (
                    <li
                    key={index}
                    className="flex justify-between items-center bg-white p-2 rounded-md shadow-md mt-2">
                        <span className="text-gray-700">{task}</span>
                            <button
                            onClick={() => removeTask(index)}
                            className="bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600">
                                Delete
                            </button>
                    </li>
                    )))}
            </ul>
        </div>
    );
}

export default Todo