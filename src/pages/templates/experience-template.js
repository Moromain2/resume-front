import React from 'react'
import { Link, navigate, graphql } from 'gatsby'
import styled from 'styled-components'
import CloseIcon from '../../images/icons/close-icon.svg'
import ArrowNavIcon from '../../images/icons/arrow-nav-icon.svg'
import {motion} from 'framer-motion'

const ExperiencePageStyles = styled.div`
    .experience-page-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 1.5em;
        .experience-breadcrumbs {
            display: flex;
            align-items: center;
            li {
                font-size: 1em;
                margin-right: .125em;
                font-weight: 900;
                color: ${(props) => props.theme.cardLabel};
                &:last-of-type {
                    margin-right: 0;
                }
                &.current-page-breadcrumb {
                    color: ${(props) => props.theme.accentColor};
                }
                &.arrow-nav {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    svg {
                        height: .75em;
                        width: .75em;
                    }
                    path {
                        fill: ${(props) => props.theme.cardLabel};
                    }
                }
            }
        }
        .close-page-button {
            height: 2.5em;
            width: 2.5em;
            border: 1px solid ${(props) => props.theme.mainText};
            background-color: ${(props) => props.theme.mainBackground};
            border-radius: .5em;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            .close-icon {
                height: 1.75em;
                width: 1.75em;
                svg {
                    height: 1.75em;
                    width: 1.75em;
                    path {
                        fill: ${(props) => props.theme.mainText};
                    }
                }
            }
        }
    }
    h1 {
        margin-bottom: .1em;
    }
    h2 {
        color: ${(props) => props.theme.cardLabel};
        font-size: 1em;
        margin-bottom: 1em;
    }
    ul.tasks-list {
        padding-left: 1.5em;
        li {
            list-style-type: circle;
            padding-left: .5em;
            line-height: 1.5em;
        }
    }
`

const pageContentMotion = {
    hidden: { opacity: 0, y: 160 },
    show: {
        opacity: 1, y: 0,
        transition: {
            ease: "easeOut",
            duration: .35,
        }
    }
}

const experiencePage = ({data}) => {
    const experience = data.strapiExperience
    return (
        <ExperiencePageStyles>
            <div className="container">
                <div className="experience-page-header">
                    <ul className="experience-breadcrumbs">
                        <li><Link to="/">Experiences</Link></li>
                        <li className="arrow-nav"><ArrowNavIcon/></li>
                        <li className="current-page-breadcrumb">{experience.experience_company}, {experience.experience_location}</li>
                    </ul>
                    <button className="close-page-button" onClick={() => navigate(-1)}>
                        <div className="close-icon">
                            <CloseIcon/>
                        </div>
                    </button>
                </div>
                <motion.div
                    variants={pageContentMotion}
                    initial="hidden"
                    animate="show"
                >
                    <h1 className="page-header">{experience.experience_title}</h1>
                    {experience.experience_end_date ? (
                    <h2 className="card-label">{experience.experience_start_date.charAt(0).toUpperCase() + experience.experience_start_date.slice(1)} à {experience.experience_end_date}</h2>
                    ) : (
                        <h2 className="card-label">Depuis {experience.experience_start_date}</h2>
                    )}
                    <div>
                        <p>{experience.experience_description.data.experience_description}</p>
                        <ul className="tasks-list">
                            {experience.task?.map((task) => (
                                <li key={task.id}>{task.task}</li>
                            ))}
                        </ul>
                    </div>
                </motion.div>
            </div>
        </ExperiencePageStyles>
    )
}

export const query = graphql`
  query ($slug: String!) {
    strapiExperience(slug: {eq: $slug}) {
      id
      slug
      experience_title
      experience_location
      experience_company
      experience_start_date(formatString: "MMMM YYYY" locale: "FR")
      experience_end_date(formatString: "MMMM YYYY" locale: "FR")
      experience_description {
        data {
          experience_description
        }
      }
      task {
        id
        task
      }
      SEO {
        id
        title
        description
      }
    }
  }
`

export const Head = ({ data }) => {
    const seoData = data.strapiExperience.SEO
    return (
        <>
            <title>{seoData.title}</title>
            <meta name="description" content={seoData.description} />
        </>
    )
}

export default experiencePage
