---

# React Learning Roadmap (Week 1 to Week 6)

## Overview
This guide provides **concise notes** on each week's topic for learning **React** from beginner to advanced level. Use it as a **quick reference** while studying and applying concepts.

---

## Week 1: React Fundamentals & JSX

### 1. What is React? Why React?
- React is a **JavaScript library** for building UI.
- Uses a **component-based architecture**.
- Features **Virtual DOM** for efficient updates.

### 2. Setting Up React
Install using Vite:
```sh
npm create vite@latest my-app --template react
cd my-app
npm install
npm run dev
```

### 3. JSX & Rendering Elements
JSX = JavaScript + XML  
Example:
```jsx
const element = <h1>Hello, React!</h1>;
ReactDOM.createRoot(document.getElementById('root')).render(element);
```

### 4. Components (Functional vs Class Components)
- **Functional Component** (Recommended):
  ```jsx
  function Greeting() {
    return <h1>Hello, world!</h1>;
  }
  ```
- **Class Component** (Legacy):
  ```jsx
  class Greeting extends React.Component {
    render() {
      return <h1>Hello, world!</h1>;
    }
  }
  ```

### 5. Props and State
- **Props** (Read-only, used for passing data):
  ```jsx
  function Welcome({ name }) {
    return <h1>Hello, {name}!</h1>;
  }
  ```
- **State** (Mutable, managed by `useState`):
  ```jsx
  function Counter() {
    const [count, setCount] = useState(0);
    return <button onClick={() => setCount(count + 1)}>Count: {count}</button>;
  }
  ```

### **Assignment:**
- Create a **Counter App** that uses state to track and display the count. Allow the user to increment and decrement the count.

---

## Week 2: Components, Props, State & Hooks

### 1. Component Lifecycle
- **Mounting:** `constructor() → render() → componentDidMount()`
- **Updating:** `shouldComponentUpdate() → render() → componentDidUpdate()`
- **Unmounting:** `componentWillUnmount()`

### 2. Lifting State Up
- Move state to a common parent component and pass data as props.

### 3. Hooks (`useState`, `useEffect`)
- `useState`:
  ```jsx
  const [count, setCount] = useState(0);
  ```
- `useEffect`: Runs after render. Example for fetching data:
  ```jsx
  useEffect(() => {
    fetchData();
  }, []); // Empty dependency array runs only on mount
  ```

### **Project 1:**
- Build a **Todo List** application where you manage the list of tasks, add new tasks, and toggle their completion status.

### **Assignment:**
- Use `useEffect` to fetch a list of items from a public API and display them on your React app.

---

## Week 3: Advanced Hooks, Context API & Routing

### 1. `useReducer` Hook
- Used for state management (like Redux but simpler).
  ```jsx
  function reducer(state, action) {
    switch (action.type) {
      case 'increment':
        return { count: state.count + 1 };
      default:
        return state;
    }
  }
  
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  ```

### 2. Context API
- Avoids **prop drilling** by providing global state.
  ```jsx
  const ThemeContext = createContext();
  function App() {
    return (
      <ThemeContext.Provider value="dark">
        <ChildComponent />
      </ThemeContext.Provider>
    );
  }
  ```

### 3. React Router
- Install:
  ```sh
  npm install react-router-dom
  ```
- Define Routes:
  ```jsx
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
  </Routes>
  ```

### **Project 2:**
- Create a **multi-page website** using React Router with pages like Home, About, and Contact.

### **Assignment:**
- Use Context API to pass global state across multiple components.

---

## Week 4: State Management & Performance Optimization

### 1. Redux Toolkit
- Install Redux Toolkit:
  ```sh
  npm install @reduxjs/toolkit react-redux
  ```
- Create a slice:
  ```js
  const counterSlice = createSlice({
    name: 'counter',
    initialState: { count: 0 },
    reducers: {
      increment: (state) => { state.count += 1; },
    },
  });
  export const { increment } = counterSlice.actions;
  export default counterSlice.reducer;
  ```

### 2. Performance Optimization
- **`useMemo`** (Caches computed values):
  ```js
  const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
  ```
- **`useCallback`** (Memoizes functions):
  ```js
  const memoizedCallback = useCallback(() => { doSomething(a, b); }, [a, b]);
  ```
- **Lazy Loading**:
  ```jsx
  const LazyComponent = React.lazy(() => import('./LazyComponent'));
  ```

### **Project 3:**
- Build a **blog application** where each post can be viewed individually and lazily loaded.

### **Assignment:**
- Implement performance optimization using `useMemo` and `useCallback` in a component that performs expensive operations.

---

## Week 5: Fullstack React with Backend

### 1. Fetching Data from APIs
- **Using Fetch API**:
  ```js
  useEffect(() => {
    fetch('https://api.example.com/data')
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  ```

### 2. Authentication (JWT & OAuth)
- Login with JWT:
  ```js
  const handleLogin = async () => {
    const response = await axios.post('/login', { username, password });
    localStorage.setItem('token', response.data.token);
  };
  ```

### 3. WebSockets (Real-time Communication)
- **Client**:
  ```js
  const socket = new WebSocket('ws://localhost:5000');
  socket.onmessage = (event) => console.log(event.data);
  ```
- **Server (Node.js)**:
  ```js
  const WebSocket = require('ws');
  const wss = new WebSocket.Server({ port: 5000 });
  wss.on('connection', (ws) => {
    ws.send('Hello from server');
  });
  ```

### **Project 4:**
- Build a **chat application** where messages are exchanged in real-time using WebSockets.

### **Assignment:**
- Set up a backend API (using Express or another framework) to handle authentication and integrate it with your React frontend using JWT.

---

## Week 6: Testing, Deployment & Best Practices

### 1. Unit Testing with Jest & React Testing Library
- Install:
  ```sh
  npm install --save-dev jest @testing-library/react
  ```
- Test Example:
  ```js
  test('renders the component', () => {
    render(<Component />);
    expect(screen.getByText('Hello')).toBeInTheDocument();
  });
  ```

### 2. Deployment (Vercel, Netlify)
- Deploy to Vercel:
  ```sh
  npm run build
  vercel deploy
  ```

### 3. CI/CD (GitHub Actions)
- **GitHub Workflow**:
  ```yml
  name: CI
  on: push
  jobs:
    build:
      runs-on: ubuntu-latest
      steps:
        - uses: actions/checkout@v2
        - run: npm install
        - run: npm test
  ```

### **Project 5:**
- Deploy one of your projects (like the chat app or blog app) to **Vercel** or **Netlify**.

### **Assignment:**
- Write tests for a component using **Jest** and **React Testing Library**.

---

## Final Thoughts
- This roadmap covers **everything from basics to advanced React**.
- Focus on **projects** and **real-world applications**.
- After this, explore **Next.js**, **Server Components**, and **Advanced State Management**.

