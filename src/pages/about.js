import React from 'react'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"
import styled from 'styled-components'
import ReactMarkdown from 'react-markdown'
import { AnimatePresence, motion } from "framer-motion"

const AboutPageStyles = styled.div`
    h1 {
        margin-bottom: .667em;
    }
    .gatsby-image-wrapper.avatar-image {
        margin-bottom: 2em;
        overflow: visible;
        &:after, &:before {
            content: '';
            z-index: 2;
            position: absolute;
            display: block;
            background: ${(props) => props.theme.accentColor};
            height: 1em;
        }
        &:before {
            width: 1em;
            left: .5em;
            top: -0.5em;
        }
        &:after {
            width: 5em;
            left: 6.25em;
            bottom: -0.5em;
        }
        img {
            background: ${(props) => props.theme.accentColor};
            mix-blend-mode: hard-light;
            filter: saturate(0.5);
        }
    }
    .about-body {
        h1 {
            font-size: 1.75em;
            line-height: 1.4;
            margin-bottom: .3em;
        }
        strong {
            color: ${(props) => props.theme.accentColor};
        }
    }
`

const AboutPage = ({data}) => {
    const aboutData = data.allStrapiAbout.nodes[0]
    return (
        <AnimatePresence exitBeforeEnter>
            <motion.div
                initial={{ opacity: 0, y: 200 }}
                animate={{ opacity: 1, y: 0 }}
                eyit={{ opacity: 0, y: 200 }}
                transition={{
                    type: "spring",
                    mass: 0.35,
                    stiffness: 75,
                    duration: 0.5
                }}
            >
                <AboutPageStyles className="container">
                    <h1 className='page-header'>À propos</h1>
                    <GatsbyImage 
                        image={getImage(aboutData.about_avatar.localFile.childImageSharp.gatsbyImageData)}
                        key={aboutData.about_avatar.localFile.id}
                        alt='À propos de Romain Mosser'
                        className="avatar-image"
                    />
                    <ReactMarkdown className='about-body' children={aboutData.about_text.data.about_text}/>
                </AboutPageStyles>
            </motion.div>
        </AnimatePresence>
    )
}

export const query = graphql`
  query {
    allStrapiAbout {
      nodes {
        about_avatar {
        localFile {
                childImageSharp {
                    gatsbyImageData(height: 180, width: 164, quality: 100)
                }
            }
        }
        about_text {
          data {
            about_text
          }
        }
        SEO {
            title
            description
        }
      }
    }
  }
`

export const Head = ({ data }) => {
    const seoData = data.allStrapiAbout.nodes[0].SEO
    return (
        <>
            <title>{seoData.title}</title>
            <meta name="description" content={seoData.description} />
        </>
    )
}

export default AboutPage
