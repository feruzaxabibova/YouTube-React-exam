import Sidebar from "../../components/Sidebar/Sidebar"
import Chanel from "../../components/Chanel/Chanel"
import "./ChanelPage.scss"

function ChanelPage () {
    return (
        <>
            <div className="chanel">
                <div className="">

                    <Sidebar />
                </div>
                <div className="">

                    <Chanel />
                </div>
            </div>
        </>
    )
}

export default ChanelPage