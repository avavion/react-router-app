import Container from "../Container/Container"
import { NavLink } from "react-router-dom"

const Header = () => {
    return (
        <header>
            <Container>
                <nav>
                    <ul>
                        <li>
                            <NavLink to="/">Todos</NavLink>
                        </li>
                        <li>
                            <NavLink to="/user">User Profile</NavLink>
                        </li>
                        <li>
                            <NavLink to="/secret">*secret*</NavLink>
                        </li>
                        <li>
                            <a href="https://github.com/avavion/react-router-app" target="_blank">GitHub</a>
                        </li>
                    </ul>
                </nav>
            </Container>
        </header>
    )
}

export default Header