import '../src/style.css';
import React from 'react'
import Todos from "./components/Todos/Todos";
function App() {
    return(
    <div className='main-container'>
        <Todos />
    </div>
    );
}

export default App;