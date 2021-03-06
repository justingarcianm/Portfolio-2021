import { NavLink } from 'react-router-dom'

function Header() {
    return (
        <nav id="header">
            <div className="container-fluid">
                <div id="nav-bg">
                    <div className="brand-link">
                        <NavLink to="/">Lorem Ipsum</NavLink>
                    </div>

                    <div className="nav-links">
                        <NavLink to="/" activeClassName="active">Home</NavLink>
                        <NavLink to="/blog" activeClassName="active"> Blog</NavLink>
                        <NavLink to="/about" activeClassName="active">About</NavLink>
                        <a href="#contact">Contact</a>
                        <a href="https://github.com/justingarcianm" target="_blank" rel="noreferrer">Lorem</a>
                        <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">Ipsum</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header