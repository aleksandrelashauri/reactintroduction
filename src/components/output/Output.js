import React, { useEffect, useState } from 'react';
import Loader from '../loader/Loader';
import './Output.scss'

const Output = ({ text,newText }) => {
    const [Loading, setLoading] = useState([]);
    const [data, setData] = useState();

    useEffect(() => {
            setLoading(true)
            fetch(`https://itunes.apple.com/search?term=${text}`)
                .then(resp => resp.json())
                .then(
                    (result) => {
                        if (result.results.length) {
                            setData(result.results);
                        } else {
                            setData();
                        }
                    },
    
                ).finally(()=>{
                    setLoading(false)
                })
    }, [newText])
    return (
        <div class="result">
            <h2>Playlist</h2>

                    {
                    data && (
                            <Loader isLoading={Loading}>
                                <div className="result-cards">
                                    <div className="card">
                                        <div>   
                                            {data.filter((data , index) => index < 11).map((results, index) => {
                                                return (
                                                    <div className='text-container' key={index}>
                                                        <video class="video" controls>
                                                                <source src={results.previewUrl} type="video/mp4"/> 
                                                        </video> 
                                                        <h4><b>{results.artistName}</b></h4>
                                                        <p>{results.trackCensoredName}</p>
                            
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </Loader>
                            )
                    }

        </div>
    )


};

export default Output;