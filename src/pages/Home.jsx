
import NavBar from "../Components/NavBar.jsx"
import FeedComponent from "../Components/FeedComponent.jsx";
import {useState, useEffect} from "react"
import {db} from '../lib/firebase-config.jsx'
import { collection, getDocs } from 'firebase/firestore'

function Home(){
    const [articles, setArticles] = useState([])
    const collectionRef = collection(db, 'postsList')
    useEffect(() =>{

        async function getArticles(){
            const data = await getDocs(collectionRef)
            setArticles(data.docs.map((doc)=> ({...doc.data(), id: doc.userID})))
            console.log(data)
        }

        getArticles()
    }, [])
    return (
        <>
            <NavBar/>
            <div className="Home">
                {articles.map((article) => {
                    return(
                    <div>
                        {" "}
                        {article.title?(
                            <FeedComponent title={article.title}
                                           imageID={article.imageID}
                                           reroute={article.reroute}
                                           description={article.description}/>
                        ):(
                            <div></div>
                        )}


                    </div>
                    )
                })}
            </div>
        </>
    )
}
export default Home