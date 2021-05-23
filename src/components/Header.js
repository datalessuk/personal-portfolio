import '../styles/Header.scss'
import Nav from "../components/Nav"
import WelcomeText from "../components/WelcomeText"
import HeaderText from "../components/HeaderText"

function Header(){
    return(
        <div className="container">
        <section id="home">
        <Nav />
        <WelcomeText />
        <HeaderText />
        </section>
        </div>
    )
}
export default Header;
