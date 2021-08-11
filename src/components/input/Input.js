import React from 'react' ; 
import { useState } from 'react';
import Output from '../output/Output';
import './Input.scss';
import SearchIcon from '@material-ui/icons/Search';

function Input (){ 
    const [text, setText]=useState('metallica');
    const [newText , setNewText] = useState();

    const getDatas = (e) => {
        !!e && e.preventDefault();
        setNewText (text);
    }

    return(
        <div className='container'>
            <form onClick={getDatas} className="left-side">
                <div className='search'>
                    <input className="input-class" onChange={e => setText(e.target.value)} placeholder="Search"/>
                    <button className="search-button" type="submit" >
                    <SearchIcon/>
                    </button> 
                </div>
            </form>
            <div class="vl"></div>
            <Output text={text} newText={newText}/>
            
        </div>

    )

}
export default Input;
