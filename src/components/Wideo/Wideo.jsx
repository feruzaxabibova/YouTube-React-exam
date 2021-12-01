import "./Wideo.scss"
import { Link } from "react-router-dom"

function Wideo ( { img, name, view, author } ) {
    return (
        <>
                <li className="wideo">
            <Link to="/video/2">
                    <img className="wideo__img" src={img} alt="" />
                    <p className="wideo__name">{name}</p>
                    <span className="wideo__view">{view}</span>
                    <span className="wideo__author">{author}</span>
            </Link>
                </li>
        </>
    )
}

export default Wideo