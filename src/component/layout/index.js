import { useContext } from "react";
import { AuthContext } from "../../context/authentication/authContextProvider";
import Footer from "../common/Footer";
import Header from "../common/Header";
import Sidebar from "../common/Sidebar";

const Layout = ({ children }) => {
    const {isSignedIn} = useContext(AuthContext)
    return (
        <>
        {isSignedIn && <div className="l-wrapper">
            <Header />
            <article className="content">{children}</article>
            <Sidebar />
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