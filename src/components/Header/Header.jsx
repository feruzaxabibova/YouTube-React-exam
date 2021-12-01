import "./Header.scss"

import { Butterbroad, Camera, LogoBlack, Notification, Setka } from "../Lib/SVGs/Home"
import { Link } from "react-router-dom"

function Header() {
    return (
        <>
            <div className="header">
                <div className="header__left">
                    <Link className="bb" to="/">
                        <Butterbroad className="bbroad" />
                    </Link>
                    <Link to="/">
                        <LogoBlack className="logo" />
                    </Link>
                </div>
                <form className="header__form">
                    <input className="header__input" type="search" />
                </form>
                <div className="header__right">
                    <div className="camera">
                        <Link to="/">
                            <Camera />
                        </Link>
                    </div>
                    <div className="setka">
                        <Link to="/">
                            <Setka />
                        </Link>
                    </div>
                    <div className="notic">
                        <Link to="/">
                            <Notification />
                        </Link>
                    </div>
                    <div className="cabine">
                        <Link to="/">
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header