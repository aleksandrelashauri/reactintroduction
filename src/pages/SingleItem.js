import React, {useEffect} from 'react';
import MainLayout from "../layouts/MainLayout";
import {useParams, useHistory, useLocation} from 'react-router-dom';

const SingleItem = () => {
    let history = useHistory();
    let params = useParams();
    let location = useLocation();
    console.log(history, params, location );
    useEffect(()=>{
        //params.id
    },[])
    return (
        <MainLayout>


        </MainLayout>
    );
};

export default SingleItem;