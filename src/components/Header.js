import '../styles/Header.scss'
import Nav from "../components/Nav"
import HeaderText from "../components/HeaderText"

function Header(){
    return(
        <div className="container">
        <section id="home">
        <Nav />
        <HeaderText />
        </section>
        </div>
    )
}
export default Header;
