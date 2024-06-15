import axios from "axios";
import React, { useEffect, useState } from "react";
import Spinner  from "./Spinner";
import useGif from "../hooks/useGif";

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;  // by the process keyword we can access env file

function Tags() {

    const [tag, setTag] = useState('');
    // const [gif, setGif] = useState('');
    // const [loading, setLoading] = useState('false');

    // async function fetchData() {
    //     setLoading(true);
    //     const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
    //     const {data} = await axios.get(url);
    //     const imageSource = data.data.images.downsized_large.url;
    //     setGif(imageSource);
    //     setLoading(false);
    // }

    // useEffect( () => {
    //     fetchData();
    // }, []);


    const {gif, loading, fetchData} = useGif(tag);
    function clickHandler() {
        fetchData();
    }

    function changeHandler(event) {
        setTag(event.target.value);
    }


    return(
        <div className="second">
            <h3 className="ran">RANDOM {tag} GIF</h3>

            {
                loading ? (<Spinner/>) : (<img src={gif} width="450"></img>)
            }

            <input className="gen-2" type="text" onChange={changeHandler} value={tag}/>
            
            <button className="gen" onClick={clickHandler}>GENERATE</button>
        </div>
    );
}

export default Tags;