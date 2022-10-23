import React from 'react'
import variables from '../themes/variables'
import styled from 'styled-components'
import { Link } from 'gatsby'

const HeaderStyles = styled.div`
    height: ${variables.sizes.navbarHeight};
    display: flex;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: ${(props) => props.theme.mainBackground};
    color: ${(props) => props.theme.mainText};
    z-index: 10;
    .container {
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        border-bottom: 1px solid ${(props) => props.theme.mainText};
    }
`

const Header = ({children}) => {
    return (
        <HeaderStyles>
            <div className="container">
                <h1><Link to='/'>Romain Mosser</Link></h1>
                { children }
            </div>
        </HeaderStyles>
    )
}

export default Header
