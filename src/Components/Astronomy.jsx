import React from "react"
import {useEffect, useState} from 'react'
import '../Astronomy.css'
import NavBar from "./NavBar.jsx";


const apiKey = "JG92Aw10a9YLwjZ27GROTirgE6j7qnB9VeMUClvz"

//const apiKey = process.env.REACT_APP_NASA_KEY
function Astronomy() {
    const [photoData, setPhotoData] = useState(null)
    useEffect(() =>{
        fetchPhoto()
        async function fetchPhoto(){
            const res = await fetch(
                `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`
            )
            const data = await res.json()
            setPhotoData(data)
            console.log(data)
        }
    }, []);
    return(
        <>
        <NavBar/>
        <div className="astronomy">
            <div id="stars1"></div>
            <div id="stars2"></div>
            <div id="stars3"></div>
            <div>
                {!photoData ? (
                    <h1>No Data</h1>
                    ) : (
                    <div className="photoData">
                        <div className="titleData">
                            <h1>{photoData.title}</h1>
                            <h2>By {photoData.copyright}</h2>
                            <h2>{photoData.date}</h2>
                        </div>
                        <div className="contentData">
                             {photoData.media_type == "image"?(
                                <img src={photoData.url} alt={photoData.title}  className="media"/>
                             ) : (
                                <iframe
                                    title="astronomy-video"
                                    src={photoData.url}
                                    border="0"
                                    gesture="media"
                                    allow="encrypted-media"
                                    allowFullScreen
                                    className="media"
                                />
                             )}
                            <p>{photoData.explanation}</p>
                        </div>
                </div>
            )}
            </div>

        </div>
        </>
    );
}

export default Astronomy