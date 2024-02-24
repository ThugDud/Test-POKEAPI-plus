import { Link, Outlet } from "react-router-dom";
import Styled from './header.module.css'

function Header() {
    return (
        <>
            <div className={Styled.header}>
                <Link to={"/"} className={Styled.Link}>
                    <div className={Styled.thumb}>
                        <img className={Styled.thumbHead} src="\FAKEFACTORYwhite.png" alt="header Thumbnail" />
                        <h1>FAKE FACTORY</h1>
                    </div>
                </Link>
               
                <Link to={"/Feedback/"} className={Styled.Link}>
                     <h1>Feedback</h1> 
                </Link>

                <Link to={"/Search/"} className={Styled.Link}>
                     <h1>teste</h1> 
                </Link>
            
            </div>
            <Outlet />
        </>
    )
}

export default Header