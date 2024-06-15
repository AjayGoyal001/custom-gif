import axios from "axios";
import React, { useEffect, useState } from "react";
import Spinner  from "./Spinner";
import useGif from "../hooks/useGif";

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;  // by the process keyword we can access env file

function Random() {

    // const [gif, setGif] = useState('');
    // const [loading, setLoading] = useState('false');

    // async function fetchData() {
    //     setLoading(true);
    //     const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    //     const {data} = await axios.get(url);
    //     const imageSource = data.data.images.downsized_large.url;
    //     setGif(imageSource);
    //     setLoading(false);
    // }

    // useEffect( () => {
    //     fetchData();
    // }, []);

    const {gif, loading, fetchData} = useGif();
    function clickHandler() {
        fetchData();
    }


    return(
        <div className="first">
            <h3 className="ran">A RANDOM GIF</h3>

            {
                loading ? (<Spinner/>) : (<img src={gif} width="450"></img>)
            }
            
            <button className="gen" onClick={clickHandler}>GENERATE</button>
        </div>
    );
}

export default Random;