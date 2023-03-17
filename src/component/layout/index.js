import { useContext } from "react";
import { AuthContext } from "../../context/authentication/authContextProvider";
import Footer from "../common/Footer";
import Header from "../common/Header";
import Sidebar from "../common/Sidebar";

const Layout = ({ children }) => {
    const {isSignedIn} = useContext(AuthContext)
    return (
        <>
        {isSignedIn && <div className="parent">
            <div className="main">
                <Sidebar />
                <article className="content child">
                    <Header />
                    {children}
                </article>
            </div>
            <Footer />
        </div>
        }
        {
            !isSignedIn && <>{children}</>
        }
        </>
    )
}

export default Layout;