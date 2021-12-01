import "./Sidebar.scss"

// Images
import { Home, Trending, SubscriptionIcon, Games, Show, Library, History, Watchlater, Favourites, Likedvideos, Music, } from "../Lib/SVGs/Home"
import { Link, NavLink } from "react-router-dom"

import Subscriptions from "../Subscriptions/Subscriptions"

function Sidebar () {
    return(
        <>
            <div className="container">
                <ul className="sidebar">
                    <li className="sidebar__item">
                        <Home className="icon"/>
                        <NavLink to="/" className="side-home" exact>Home</NavLink>
                    </li>
                    <li className="sidebar__item">
                        <Trending />
                        <NavLink to="/trending" className="side-trending">Trending</NavLink>
                    </li>
                    <li className="sidebar__item">
                        <SubscriptionIcon />
                        <NavLink to="/subs" className="side-subs">Subscriptions</NavLink>
                    </li>
                    <li className="sidebar__item">
                        <Library />
                        <NavLink to="/lib" className="side-lib">Library</NavLink>
                    </li>
                    <li className="sidebar__item">
                        <History />
                        <NavLink to="/hist" className="side-hist">History</NavLink>
                    </li>
                    <li className="sidebar__item">
                        <Watchlater />
                        <NavLink to="/watch" className="side-watch">Watch later</NavLink>
                    </li>
                    <li className="sidebar__item">
                        <Favourites />
                        <NavLink to="/fav" className="side-fav">Favourites</NavLink>
                    </li>
                    <li className="sidebar__item">
                        <Likedvideos />
                        <NavLink to="/liked" className="side-like">Liked videos</NavLink>
                    </li>
                    <li className="sidebar__item">
                        <Music />
                        <NavLink to="/music" className="side-music">Music</NavLink>
                    </li>
                    <li className="sidebar__item">
                        <Games />
                        <NavLink to="/games" className="side-games">Games</NavLink>
                    </li>
                    <li className="sidebar__item">
                        <Show />
                        <NavLink to="/" className="side-show">Show more</NavLink>
                    </li>
                </ul>
                <Subscriptions />
                <Link className="settings" to="/settings">Settings</Link>
            </div>
        </>
    )
}

export default Sidebar