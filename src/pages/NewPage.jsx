import SideBar from "../components/general/SideBar/SideBar"
import Footer from "../components/general/Footer/Footer"
import { useState } from "react";

const NewPage = (Component) => {
    const [rol, setRol] = useState(localStorage.getItem('rol'));
    return (
        <>
            <div className="flex">
                <div className="w-1/5">
                    <SideBar role={rol} />
                </div>
                <div className="w-full flex flex-col min-h-screen bg-hero bg-no-repeat bg-cover bg-center bg-fixed">
                    <Component />
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default NewPage