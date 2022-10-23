import React from 'react'
import variables from '../themes/variables'
import styled from 'styled-components'
import ArrowIcon from '../images/icons/arrow-icon.svg'

const ContactFormStyles = styled.div`
    background-color: ${(props) => props.theme.accentColor};
    color: ${(props) => props.theme.mainBackground};
    padding: 3em 0 4em;
    margin-top: 5em;
    .temporary-contact-info {
        li {
            margin-bottom: .5em;
            &:last-of-type {
                margin-bottom: 0;
            }
            a {
                transition: ${variables.motion.buttonTransition};
                text-decoration: underline;
                &:hover {
                    color: ${variables.colors.white};
                }
            }
        }
    }
    .form-container {
        border: 1px solid #F5FFFF; // Has to be changed with theme variables (not working for some reason)
        padding: 1.5em 1em;
        border-radius: .5em;
        .field-group {
            display: flex;
            flex-direction: column;
            margin-bottom: 1.5em;
            &:last-of-type {
                margin-bottom: 0;
            }
            .input-field {
                border: 1px solid #32505A; // Has to be changed with theme variables (not working for some reason)
                background-color: #F5FFFF; // Has to be changed with theme variables (not working for some reason)
                padding: .5em;
                font-size: 1em;
                border-radius: .25em; 
                font-family: ${variables.fonts.main};
            }
            textarea {
                height: 7.5em;
                resize: vertical;
            }
            label {
                font-size: 1em;
                margin-bottom: .25em;
            }
        }
        .form-submit {
            display: flex;
            justify-content: space-between;
            width: 100%;
            background-color: ${(props) => props.theme.accentColor};
            border: 1px solid ${(props) => props.theme.mainBackground};
            color: ${(props) => props.theme.mainBackground};
            padding: .75em 1em;
            font-family: ${variables.fonts.main};
            font-size: 1em;
            line-height: 1.5;
            border-radius: .25em;
            margin-top: 1.25em;
            cursor: pointer;
            transition: ${variables.motion.buttonTransition};
            @media screen and (min-width: 960px) {
                &:hover {
                    background-color: ${(props) => props.theme.mainBackground};
                    color: ${(props) => props.theme.accentColor};
                    .arrow-icon path {
                        fill: ${(props) => props.theme.accentColor};
                    }
                }
            }
            .arrow-icon {
                width: 1.5em;
                height: 1.5em;
                path {
                    fill: ${(props) => props.theme.mainBackground};
                }
            }
        }
    }
`

const ContactForm = () => {
    return (
        <ContactFormStyles>
            <div className="container">
                <h1 className="main-header">Contactez moi</h1>
                <ul className='temporary-contact-info'>
                    <li><a href='mailto:mosser-romain@gmail.com'>mosser-romain@gmail.com</a></li>
                    <li><a href="https://www.linkedin.com/in/romain-mosser-a9680367/">LinkedIn</a></li>
                </ul>
                {/* <form className="form-container">
                    <div className="field-group">
                        <label htmlFor="name">Nom</label>
                        <input className="input-field" type="text" name="name" id="name" placeholder="Robert Ducon"/>
                    </div>
                    <div className="field-group">
                        <label htmlFor="email">Email</label>
                        <input className="input-field" type="email" name="email" id="email" placeholder="robert@ducon.com" />
                    </div>
                    <div className="field-group">
                        <label htmlFor="message">Message</label>
                        <textarea className="input-field" name="message" id="message"></textarea>
                    </div>
                    <button className="form-submit">
                        <span>Envoyer</span>
                        <ArrowIcon className="arrow-icon"/>
                    </button>
                </form> */}
            </div>
        </ContactFormStyles>
    )
}

export default ContactForm
