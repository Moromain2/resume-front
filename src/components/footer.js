import React from 'react'
import styled from 'styled-components'

const FooterStyles = styled.footer`
    background-color: ${(props) => props.theme.footerBackgroundColor};
    color: ${(props) => props.theme.footerTextColor};
    padding: 0.625em;
    text-align: center;
`

const Footer = () => {
    return (
        <FooterStyles>
            <div className="container">
                <h4>© Romain Mosser | {new Date().getFullYear()}</h4>
            </div>
        </FooterStyles>
    )
}

export default Footer
