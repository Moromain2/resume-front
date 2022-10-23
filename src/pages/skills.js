import React from 'react'
import styled from 'styled-components'
import SkillCard from '../components/skill-card'
import { graphql } from 'gatsby'
import { AnimatePresence, motion } from "framer-motion"

const SkillsPageStyles = styled.div`
    .skill-category {
      font-size: 1em;
      font-weight: 900;
      color: ${(props) => props.theme.cardLabel};
      margin-bottom: 1em;

    }
    .skill-cards-container {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 1em;
        margin-bottom: 2em;
        &:last-of-type {
          margin-bottom: 0;
        }
        @media screen and (min-width: 640px) {
            grid-template-columns: repeat(4, 1fr);
        }
        @media screen and (min-width: 960px) {
            grid-template-columns: repeat(5, 1fr);
        }
        @media screen and (min-width: 1200px) {
            grid-template-columns: repeat(6, 1fr);
        }
    }
`

const SkillsPage = ({data}) => {
    const languages = data.languageQuery.nodes
    const hobbies = data.hobbyQuery.nodes
    const webTechs = data.webTechQuery.nodes
    const softwares = data.softwareQuery.nodes
    return (
      <AnimatePresence exitBeforeEnter>
            <motion.div 
              className="container"
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
                <SkillsPageStyles>
                      <h2 className='skill-category'>Informatique</h2>
                      <div className="skill-cards-container">
                      {softwares.map((software) => (
                        <SkillCard
                          key={software.id}
                          icon={software.skill_icon.localFile.svg.content}
                          title={software.skill_title}
                          progress={software.skill_rating}
                          category={software.category}
                        />
                        ))}
                      </div>
                      <h2 className='skill-category'>Technologies Web</h2>
                      <div className="skill-cards-container">
                      {webTechs.map((webTech) => (
                        <SkillCard
                          key={webTech.id}
                          icon={webTech.skill_icon.localFile.svg.content}
                          title={webTech.skill_title}
                          progress={webTech.skill_rating}
                          category={webTech.category}
                        />
                      ))}
                      </div>
                      <h2 className='skill-category'>Langues</h2>
                      <div className="skill-cards-container">
                      {languages.map((language) => (
                        <SkillCard
                          key={language.id}
                          icon={language.skill_icon.localFile.svg.content}
                          title={language.skill_title}
                          progress={language.skill_rating}
                          category={language.category}
                        />
                      ))}
                      </div>
                      <h2 className='skill-category'>Hobbies</h2>
                      <div className="skill-cards-container">
                      {hobbies.map((hobby) => (
                        <SkillCard
                          key={hobby.id}
                          icon={hobby.skill_icon.localFile.svg.content}
                          title={hobby.skill_title}
                          progress={hobby.skill_rating}
                          category={hobby.category}
                        />
                      ))}
                      </div>
                </SkillsPageStyles>
            </motion.div>
        </AnimatePresence>
    )
}

export const query = graphql`
  query {
    languageQuery: allStrapiSkill(
        sort: {fields: skill_rating, order: DESC}
        filter: {category: {eq: "Language"}}
      ) {
      nodes {
        skill_icon {
            localFile {
              svg {
                content
              }
            }
          }
        skill_rating
        skill_title
        category
        id
      }
    }
    webTechQuery: allStrapiSkill(
        sort: {fields: skill_rating, order: DESC}
        filter: {category: {eq: "Web technology"}}
      ) {
      nodes {
        skill_icon {
            localFile {
              svg {
                content
              }
            }
          }
        skill_rating
        skill_title
        category
        id
      }
    }
    hobbyQuery: allStrapiSkill(filter: {category: {eq: "Hobby"}}) {
      nodes {
        skill_icon {
            localFile {
              svg {
                content
              }
            }
          }
        skill_rating
        skill_title
        category
        id
      }
    }
    softwareQuery: allStrapiSkill(
        sort: {fields: skill_rating, order: DESC}
        filter: {category: {eq: "Software"}}
      ) {
      nodes {
        skill_icon {
            localFile {
              svg {
                content
              }
            }
          }
        skill_rating
        skill_title
        category
        id
      }
    }
    seoQuery: allStrapiHero {
      nodes {
        SEO {
          id
          title
          description
        }
      }
    }
  }
`

export const Head = ({ data }) => {
  const seoData = data.seoQuery.nodes[0].SEO
  return (
    <>
      <title>{seoData.title}</title>
      <meta name="description" content={seoData.description} />
    </>
  )
}

export default SkillsPage
