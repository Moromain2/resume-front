import { createGlobalStyle } from 'styled-components'
import variables from '../themes/variables'

const GlobalStyles = createGlobalStyle`    
    // Resets
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    li {
        list-style-type: none;
    }
    a {
        color: inherit;
        text-decoration: none;
    }

    // General
    body {
        font-family: ${variables.fonts.main}, 'Helvetica', sans-serif;
        font-size: 16px;
        background-color: ${(props) => props.theme.mainBackground};
        color: ${(props) => props.theme.mainText};
    }

    // Typography
    .main-header {
        font-size: 1.75em;
        line-height: 1.4em;
        margin-bottom: 0.5em;
    }
    .page-header {
        font-size: 3em;
        line-height: 1.2em;
    }
    .card-header {
        font-size: 1.25em;
        line-height: 1em;
        font-weight: 900;
        margin-bottom: 0.4em;
    }
    .card-subheader {
        font-size: 1em;
        line-height: 1em;
        font-weight: 900;
        margin-bottom: 0.5em;
        color: ${(props) =>props.theme.accentColor};
    }
    .card-label {
        font-size: 0.75em;
        line-height: 1em;
        font-weight: 900;
        margin-bottom: 0.6em;
        color: ${(props) =>props.theme.cardLabel};
    }
    p {
        font-size: 1em;
        line-height: 1.5em;
    }

    // Structure
    .container {
        // Try changing it with clamp() property?
        padding: 0 ${variables.sizes.mobilePadding};
        @media screen and (min-width: 640px) {
            max-width: 600px;
            margin: auto;
            padding: 0;
        }
        @media screen and (min-width: 960px) {
            max-width: 900px;
        }
        @media screen and (min-width: 1200px) {
            max-width: 1080px;
        }
    }
    .page-wrapper {
        min-height: 60vh;
    }

    // Design
    .tag {
        background-color: ${(props) => props.theme.accentColor};
        color: ${(props) => props.theme.accentText};
        padding: .4em .7em;
        font-size: 0.75em;
        line-height: 1em;
        border-radius: 1em;
    }
`

export default GlobalStyles