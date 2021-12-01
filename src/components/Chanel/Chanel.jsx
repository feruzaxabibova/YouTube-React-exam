import "./Chanel.scss"
import { useEffect, useState } from "react"
import { Notification, SearchInput, Left, Right } from "../Lib/SVGs/Home"
import { Link, NavLink } from "react-router-dom"
import Video from "../Video/Video"

function Chanel () {

    const [Data, setData] = useState([])
    
    useEffect( () => {
        fetch("https://jsonplaceholder.typicode.com/photos")
        .then(res => res.json())
        .then(data => setData(data))
    }, [])

    return (
        <>
            <div className="chanel-box">
                <div className="chanel-box-top">
                    {
                        Data.length > 0 && 
                        <img
                        className="chanel-box-top__image"
                        src={
                            Data[1].url
                        } alt="" />
                    }
                </div>
                <div className="chanel-center">
                    <div className="chanel-center__top">
                        <div className="initial">
                            <h1 className="user-name">Margaret Phelps</h1>
                            <p className="subs-num">245K subscribed</p>
                        </div>
                        <div className="notific-icon">
                            <Notification />
                            <p className="subs">Subscribe 2.3m</p>
                        </div>
                    </div>
                    <div className="chanel-center__bottom">
                        <div className="left-video">
                            <div className="nav-box">
                            <ul className="nav">
                                <li className="nav__item">
                                    <NavLink className="nav__link" activeClassName="active-link" to="/home">Home</NavLink>
                                </li>
                                <li className="nav__item">
                                    <NavLink className="nav__link" activeClassName="active-link" to="/videos">Videos</NavLink>
                                </li>
                                <li className="nav__item">
                                    <NavLink className="nav__link" activeClassName="active-link" to="/plays">Playlists</NavLink>
                                </li>
                                <li className="nav__item">
                                    <NavLink className="nav__link" activeClassName="active-link" to="/cann">Channels</NavLink>
                                </li>
                                <li className="nav__item">
                                    <NavLink className="nav__link" activeClassName="active-link" to="/dis">Discussion</NavLink>
                                </li>
                                <li className="nav__item">
                                    <NavLink className="nav__link" activeClassName="active-link" to="/about">About</NavLink>
                                </li>
                                <li className="nav__item">
                                <NavLink className="nav__link" activeClassName="active-link" to="/search"><SearchInput /></NavLink>
                                </li>
                            </ul>
                            </div>
                            <div className="video">
                                <div className="video-img-box">
                                {
                                    Data.length > 0 && 
                                    <Link to="video/2">
                                        <img
                                        className="video__image"
                                        src={
                                            Data[1].url
                                        } alt="" />
                                    </Link>

                                    
                                }
                                </div>
                                <div className="video__right">
                                    <h2 className="video__heading">
                                    Choosing The Best Audio Player Software For Your Computer
                                    </h2>
                                    <p className="video__text">
                                    Your cheap internet-based banner advertising will become one of the sought for ads there are. Today, the world of Internet advertising is rapidly evolving beyond banner ads and intrusive pop-ups. Bayles A common medium for advertising on the Internet is the use of banner ads. 
                                    </p>
                                    <p className="num">
                                    11k views  ·  6 months ago
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="right-recomend">
                            <p className="recom-users">Recommended channel</p>
                            <ul className="recom-list">
                                <li className="recom-list__item">
                                    <Link to="/chanel">Flora Benson</Link>
                                </li>
                                <li className="recom-list__item">
                                    <Link to="/chanel">Violet Cobb</Link>
                                </li>
                                <li className="recom-list__item">
                                    <Link to="/chanel">Phillip Mullins</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="home-top">
                    <div className="home-top__top">
                    <h2 className="home-top__heading">Dollie Blair</h2>
                    <div className="home-top__box">
                        <div className="left">
                        <Left />
                        </div>
                        <div className="right">
                        <Right />
                        </div>
                    </div>
                    </div>
                    {
                        Data.length > 0 && 
                        <ul className="top-list">
                            {Data.map( photo => 
                            (
                               
                                <Video 
                                    key={photo.id}
                                    img={photo.url}
                                    name="A Brief History Of Creation"
                                    view="80k views"
                                    author="Dollie Blair"
                                />
                            ))}
                        </ul>
                    }
                </div>

            </div>
        </>
    )
}

export default Chanel