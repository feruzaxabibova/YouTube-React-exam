import { useEffect, useState } from "react"
import { Left, Right } from "../Lib/SVGs/Home"
import Video from "../Video/Video"
import Wideo from "../Wideo/Wideo"
import "./Home.scss"

function Home() {

    const [Data, setData] = useState([])

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/photos")
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    return (
        <>
            <div className="home-box">
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
                            {Data.filter(v => (
                                v.albumId === 1
                            )).map(photo =>
                            (
                                <Video
                                    key={photo.id}
                                    img={photo.url}
                                    name={photo.title}
                                    view="80k views"
                                    author="Dollie Blair"
                                />
                            ))}
                        </ul>
                    }
                </div>
                <div className="home-center">
                    <h1 className="recomended">
                        Recommended
                    </h1>
                    {
                        Data.length > 0 &&
                        <ul className="top-list">
                            {Data.map(photo =>
                            (
                                <Wideo
                                    key={photo.id}
                                    img={photo.url}
                                    name="Dude You Re Getting A Telescope"
                                    view="80k views"
                                    author="Dollie Blair"
                                />
                            ))}
                        </ul>
                    }
                </div>

                <div className="home-top">
                    <div className="home-top__top">
                        <div className="top-left">
                            <h2 className="home-top__heading">Dollie Blair</h2>
                            <p className="bottom-text">
                                Recomended chanel for you
                            </p>
                        </div>
                        <div className="top-right">
                            <p className="subscribe">Subscribe 2.3m</p>
                            <div className="home-top__box">
                                <div className="left">
                                    <Left />
                                </div>
                                <div className="right">
                                    <Right />
                                </div>
                            </div>

                        </div>
                    </div>
                    {
                        Data.length > 0 &&
                        <ul className="top-list">
                            {Data.map(photo =>
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

export default Home