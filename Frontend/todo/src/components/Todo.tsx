import { useReducer, useState } from 'react';

type Task = {
    id: number;
    text: string;
};

type TaskAction = 
    | { type: "Add_Task"; payload: string }
    | { type: "Remove_Task"; payload: number };

const taskReducer = (state: Task[], action: TaskAction): Task[] => {
    switch (action.type) {
        case "Add_Task":
            return [...state, { id: Date.now(), text: action.payload }];
        case "Remove_Task":
            return state.filter(task => task.id !== action.payload);
        default:
            return state;
    }
};

const formatTime = (timeStamp : number) => {
    return new Date(timeStamp).toLocaleTimeString([] , {
        hour : "2-digit",
        minute : "2-digit",
        second : "2-digit",
    });
};

const Todo = () => {
    const [input, setInput] = useState("");
    const [Tasks, dispatch] = useReducer(taskReducer, []);

    const addTask = () => {
        if (input.trim() !== "") {
            dispatch({ type: "Add_Task", payload: input });
            setInput("");
        }
    };

    const removeTask = (id: number) => {
        dispatch({ type: "Remove_Task", payload: id });
    };

    return (
        <div className='flex flex-col items-center min-h-screen bg-gray-800 p-6'>
            <h1 className='text-3xl font-bold mb-4 text-blue-600'>To-Do List</h1>

            {/* Input Field */}
            <div className='flex gap-2'>
                <input
                    type="text"
                    className='p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                    placeholder='Enter a task...'
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button
                    onClick={addTask}
                    className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600'>
                    Add
                </button>
            </div>

            {/* Task List */}
            <ul className='mt-4 w-96'>
                {Tasks.length === 0 ? (
                    <p className='text-gray-500 text-center'>No Tasks Added Yet</p>
                ) : (
                    Tasks.map((task) => ( 
                        <li
                            key={task.id}
                            className='flex justify-between items-center bg-gray-800 p-3 rounded-md shadow-lg mt-3 hover:bg-gray-700 transition'>
                            <div className='text-white'>
                                <p className='font-semibold'>{task.text}</p>
                                <p className='text-sm text-gray-400'>Added at : {formatTime(task.id)}</p>
                            </div>
                            <button
                                onClick={() => removeTask(task.id)}
                                className='bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600'>
                                Delete
                            </button>
                        </li>
                    ))
                )}
            </ul>
        </div>
    );
};

export default Todo;
