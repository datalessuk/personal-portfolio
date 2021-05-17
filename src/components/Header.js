import '../styles/Header.scss'
import Nav from "../components/Nav"
import HeaderText from "../components/HeaderText"

function Header(){
    return(
        <div className="container">
        <Nav />
        <HeaderText />
        </div>
    )
}
export default Header;
