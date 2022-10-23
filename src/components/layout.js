import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from '../styles/globalStyles'
import Header from './header'
import Hero from './hero'
import Navbar from './navbar'
import ContactForm from './contact-form'
import Footer from './footer'
import ThemeSwitcher from './theme-switcher'
import { themes } from '../themes/themes'

const Layout = ({children}) => {
    const prefersDark = typeof window.matchMedia('(prefers-color-scheme: dark)').matches // returns true if user prefers dark mode
    const [theme, setTheme] = useState(prefersDark ? 'dark' : 'light') // sets the theme's initial state depending on user's preference
    return (
        <>
            <ThemeProvider theme={themes[theme]}>
                <GlobalStyles/>
                    <Header>
                        <ThemeSwitcher theme={theme} setTheme={setTheme}/>
                    </Header>
                    <Hero/>
                    <Navbar/>
                    <main className="page-wrapper">
                        {children}
                    </main>
                    <ContactForm/>
                    <Footer/>
            </ThemeProvider>
        </>
    )
}

export default Layout
