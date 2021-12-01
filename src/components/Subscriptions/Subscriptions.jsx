import { NavLink } from "react-router-dom"
import "./Subscriptions.scss"

function Subscriptions () {
    return (
        <>
            <h2 className="subs">Subscriptions</h2>
            <ul className="users">
                <li className="users__item">
                    <NavLink className="users__link" to="/chanel">Gussie Singleton</NavLink>
                </li>
                <li className="users__item">
                    <NavLink className="users__link" to="/chanel">Nora Francis</NavLink>
                </li>
                <li className="users__item">
                    <NavLink className="users__link" to="/chanel">Belle Briggs</NavLink>
                </li>
                <li className="users__item">
                    <NavLink className="users__link" to="/chanel">Eunice Cortez</NavLink>
                </li>
                <li className="users__item">
                    <NavLink className="users__link" to="/chanel">Emma Hanson</NavLink>
                </li>
                <li className="users__item">
                    <NavLink className="users__link" to="/chanel">Leah Berry</NavLink>
                </li>
            </ul>
        </>
    )
}

export default Subscriptions