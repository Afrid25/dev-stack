import logo from '../../assets/logo-text.png'

const NavLogo = () => {
    return (
        <a className="shrink-0" href="#home" aria-label="DevStack home">
            <img className="block w-32" src={logo} alt="DevStack" />
        </a>
    )
}

export default NavLogo
