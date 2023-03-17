import { useContext } from "react";
import { AuthContext } from "../../context/authentication/authContextProvider";
import './index.css'
const Layout = ({ children }) => {
    const {isSignedIn} = useContext(AuthContext)
    return (
        <>
        {isSignedIn && <div className="l-wrapper">
            <header className="main-head">The header</header>
            <nav className="main-nav">
                <ul>
                <li>
                    <a href="/orders">Nav 1</a>
                </li>
                <li>
                    <a href="/orders">Nav 2</a>
                </li>
                <li>
                    <a href="/orders">Nav 3</a>
                </li>
                </ul>
            </nav>
            <article className="content">
                {/* <h1>Main article area</h1>
                <p>
                In this layout, we display the areas in source order for any screen less
                that 500 pixels wide. We go to a two column layout, and then to a three
                column layout by redefining the grid, and the placement of items on the
                grid.
                </p> */}
                {children}
            </article>
            <aside className="side">Sidebar</aside>
            <div className="ad">Advertising</div>
            <footer className="main-footer">The footer</footer>
        </div>
        }
        {
            !isSignedIn && <>{children}</>
        }
        </>
    )
}

export default Layout;