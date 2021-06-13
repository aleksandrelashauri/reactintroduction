  
import React from 'react'

import Main from "./components/Main/Main";
import Detailed from "./components/Detailed/Detailed";
import Days from "./components/Days/Days";


function App() {

    return(
    <div className='main-container'>
        <Main />
       <Detailed />
           {/*<Days />*/}  

    </div>
    );
}

export default App;

