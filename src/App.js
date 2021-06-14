import './components/app/style.css'
import React from 'react'

import Main from "./components/Main/Main";
import Detailed from "./components/Detailed/Detailed";


function App() {

    return(
    <div className='main-container'>
        <Main />
       <Detailed />

    </div>
    );
}

export default App;

