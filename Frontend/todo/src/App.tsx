import Todo from './components/Todo';
import { useTheme } from './context/themeContext';

function App() {
    const { theme, setTheme } = useTheme();  // ✅ Safe to use now

    return (
        <div className={`${theme === "light" ? "bg-white" : "bg-gray-800"} min-h-screen flex flex-col items-center`}>
            <Todo />
            <button 
                className='bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 mt-4'
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
                Toggle Theme
            </button>
        </div>
    );
}

export default App;
