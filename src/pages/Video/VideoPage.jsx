import "./VideoPage.scss"

import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import Wideo from "../../components/Wideo2/Wideo2"

function VideoPage() {

    const [Data, setData] = useState([])

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/photos")
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    return (
        <>
            <div className="page">
                <div className="page-left">
                    <div className="page__video">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/triLfKQcoXY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>                </div>
                    <h1 className="page__heading">
                        Dude You Re Getting A Telescope
                    </h1>
                    <div className="page__views">
                        <p className="views">123k views</p>
                        <div className="right-icons">
                            <p className="like">123k</p>
                            <p className="dislike">435k</p>
                            <p className="share">Share</p>
                        </div>
                    </div>
                    <div className="bottom-border"></div>
                    <div className="left-bottom">
                        <div className="page__subs">
                            <h2 className="user-name">
                                Food & Drink
                            </h2>
                            <p className="subs-p">Subscribe 2.3m</p>
                        </div>


                        <p className="subs-nums">Published on 14 Jun 2019</p>
                        <p className="user-text">A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action. There is no magic formula to write perfect ad copy; it is based on a number of factors, including ad placement, demographic, even the consumer’s mood when they see your ad. </p>
                        <Link className="show" to="/">Show more</Link>
                    </div>
                </div>
                <div className="page-right">
                    <div className="right-top">
                        <h2 className="next">
                            Next
                        </h2>
                        <p className="autoplay">AUTOPLAY</p>
                    </div>
                    {
                        Data.length > 0 &&
                        <ul className="right-list">
                            {Data.filter(v => (
                                v.albumId === 1
                            )).map(photo =>
                            (
                                <Wideo
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
            </div>
        </>
    )
}

export default VideoPage