import Sidebar from "../../components/Sidebar/Sidebar"
import Home from "../../components/Home/Home"
import "./HomePage.scss"

function HomePage () {
    return (
        <>
            <div className="home">
                    <Sidebar />
                    <Home />
            </div>
        </>
    )
}
export default HomePage