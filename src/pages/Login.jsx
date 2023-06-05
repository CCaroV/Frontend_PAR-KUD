import LoginCard from "../components/general/Login/LoginCard"
import Footer from "../components/general/Footer/Footer"


const Login = () => {

    return (
        <>
            <div className="flex flex-col min-h-screen items-center">
                <LoginCard />
                <Footer />
            </div>
        </>

    )
}

export default Login