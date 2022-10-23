import React from 'react'
import variables from "../themes/variables";
import styled from 'styled-components'
import { Link } from 'gatsby'

const NavbarStyles = styled.div`
    margin: 3em 0 1.5em;
    overflow-y: visible;
    nav {
        overflow-y: scroll;
        &::-webkit-scrollbar {
            display: none;
        }
        ul {
            display: flex;
            li {
                margin-right: 0.75em;
                &:last-child {
                    padding-right: 1em;
                }
                a {
                    transition: ${variables.motion.buttonTransition};
                    font-size: 1em;
                    font-weight: 600;
                    padding: 1em 1.5em;
                    background-color: ${(props) => props.theme.buttonBackground};
                    color: ${(props) => props.theme.buttonTextColor};
                    display: inline-block;
                    white-space: nowrap;
                    border-radius: .75em;
                    &.active, &.relative {
                        background-color: ${(props) => props.theme.buttonBackgroundActive};
                        color: ${(props) => props.theme.buttonTextColorActive};
                    }
                    @media screen and (min-width: 960px) {
                        &:hover {
                            background-color: ${(props) => props.theme.buttonBackgroundActive};
                            color: ${(props) => props.theme.buttonTextColorActive};
                        }
                    }
                }
            }
        }
    }
`

const Navbar = () => {
    // function getCurrentURL() {
    //     const url = window.location.href
    //     if (url.indexOf('/experiences')) {
    //         return {className: "active"}
    //     }
    // }
    // const url = getCurrentURL()
    return (
        <NavbarStyles>
            <nav className="container">
                <ul>
                    {/* <li>{url}</li>
                    {url.indexOf('/experiences') ? <li><Link to="/" className="active" onClick={getCurrentURL()}>Expériences</Link></li>
                    : <li><Link to="/" activeClassName="active" className="nope" onClick={getCurrentURL()}>Expériences</Link></li>} */}
                    <li><Link 
                                to="/" 
                                activeClassName='active'
                            >
                                Expériences
                    </Link></li>
                    <li><Link to="/education" activeClassName="active">Formation</Link></li>
                    <li><Link to="/skills" activeClassName="active">Compétences</Link></li>
                    <li><Link to="/about" activeClassName="active">À propos</Link></li>
                </ul>
            </nav>
        </NavbarStyles>
    )
}

export default Navbar
