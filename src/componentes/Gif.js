import React, { useState, useEffect } from 'react'

export const Gif = ({category}) => {
    const [count, setCount] = useState(0);
    useEffect(()=>{
        getGifs();
    })

    const getGifs =async()=>{
        const url = 'https://api.giphy.com/v1/gifs/search?q=Rick+and+Morty&limit=10&api_key=kJ7x4nFps8vAuBPFtmvwnTyPtmRZ811p';
        const resp = await fetch(url);
        const { data } = await resp.json();
        const gifs =data.map(img=>{
            return{
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        })
        console.log(gifs);
    }
    getGifs();
    return (
        <div>
            <h3>{category}</h3>
            <button onClick={()=> setCount(count + 1)}>setCount</button>
        </div>
    )
}
