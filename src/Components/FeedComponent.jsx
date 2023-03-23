import {Link} from "react-router-dom"
import '../css/FeedComponent.css'
function FeedComponent(props){
    return(
        <div className="feedDiv">
        <Link to={props.reroute} className="link">
            <button className="feedComponent">
                <h1> {props.title}</h1>
                <div className="description">
                    <p> {props.description}</p>
                </div>
                <img src={props.imageID} alt={props.title}/>
            </button>
        </Link>
        </div>
    )
}
export default FeedComponent