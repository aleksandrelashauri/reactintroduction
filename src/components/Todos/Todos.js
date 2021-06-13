import '../../style.css'
import React, { useState } from 'react'
import List from './List';
import TitleInput from './TitleInput';

const Todos = () => {
    const[ data, setData] = useState([]);
    const addTodo = (title) =>{
     setData([
        {
            title:title,
             checked:false,
        },
         ...data
     ]
    );
 }
    return(
        <div className='todos'>
            <h2> Check Box </h2>
            <TitleInput onSubmit={addTodo} />
           <List data={data} setData={setData} />
        </div>
    );
};

export default Todos;