import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

function useGif(tag) {
    const [gif, setGif] = useState('');
    const [loading, setLoading] = useState('false');
    const url1 = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    const url2 = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;

    async function fetchData() {
        setLoading(true);
        const {data} = await axios.get(tag ? (url2) : (url1));
        const imageSource = data.data.images.downsized_large.url;
        setGif(imageSource);
        setLoading(false);
    }

    useEffect( () => {
        fetchData();
    }, []);

    return{gif, loading, fetchData};
}

export default useGif;