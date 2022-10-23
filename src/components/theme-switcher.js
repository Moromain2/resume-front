import React from 'react'
import styled from 'styled-components'
import MoonIcon from '../images/icons/moon-icon.svg'
import SunIcon from '../images/icons/sun-icon.svg'

const ThemeSwitchButton = styled.button`
    border: 1px solid ${(props) => props.theme.mainText};
    border-radius: 100%;
    background-color: ${(props) => props.theme.mainBackground};
    height: 3em;
    width: 3em;
    display: flex;
    justify-content: center;
    align-items: center;
    line-height: 1em;
    cursor: pointer;
    .theme-switch-icon {
        height: 1.5em;
        width: 1.5em;
        path {
            fill: ${(props) => props.theme.mainText}
        }
    }
`

const ThemeSwitcher = (props) => {
    function changeTheme() {
        if (props.theme === "light") {
            props.setTheme("dark")
        } else {
            props.setTheme("light")
        }
    }
    const icon = props.theme === "light" ? <MoonIcon className="theme-switch-icon"/> : <SunIcon className="theme-switch-icon"/> 
    return (
        <ThemeSwitchButton onClick={changeTheme}>
            {icon}
        </ThemeSwitchButton>
    )
}

export default ThemeSwitcher