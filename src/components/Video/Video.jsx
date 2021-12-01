import "./Video.scss"
import { Link } from "react-router-dom"

function Video ( { img, name, view, author } ) {
    return (
        <>
            <li className="video">
            <Link to="/video/2">
                <img className="video__img" src={img} alt="" />
                <p className="video__name">{name}</p>
                <span className="video__view">{view}</span>
                <span className="video__author">{author}</span>
            </Link>
            </li>
        </>
    )
}

export default Video