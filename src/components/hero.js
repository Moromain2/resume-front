import React from 'react'
import variables from '../themes/variables'
import styled from 'styled-components'
import { useStaticQuery, graphql } from "gatsby"
import ReactMarkdown from 'react-markdown'

const HeroStyles = styled.div`
  .container {
    margin-top: calc(${variables.sizes.navbarHeight} + 4em);
  }
  .hero-body {
    a {
      text-decoration: underline;
      transition: ${variables.motion.buttonTransition};
      &:hover {
        color: ${(props) => props.theme.accentColor};
      }
    }
  }
`

const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      allStrapiHero {
        nodes {
          id
          hero_title
          hero_intro {
            data {
              hero_intro
            }
          }
        }
      }
    }
  `)
  const heroData = data.allStrapiHero.nodes[0]
    return (
        <HeroStyles>
          <div className="container" key={heroData.id}>       
            <h1 className="main-header">{heroData.hero_title}</h1>
            <ReactMarkdown className="hero-body" children={heroData.hero_intro.data.hero_intro}/>
          </div>
        </HeroStyles>
    )
}

export default Hero
